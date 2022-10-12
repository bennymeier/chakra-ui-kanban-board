import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Textarea,
} from '@chakra-ui/react';
import { useState } from 'react';
import { createProject } from '../utils/API';

function ProjectForm() {
  const [data, setData] = useState({ title: '', description: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      createProject(data);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormControl id="title" isRequired>
          <FormLabel>Title</FormLabel>
          <Input type="text" name="title" onChange={handleChange} />
        </FormControl>
        <FormControl id="description">
          <FormLabel>Description</FormLabel>
          <Textarea name="description" onChange={handleChange} />
        </FormControl>
        <Stack spacing={10} pt={2}>
          <Button
            loadingText="Submitting"
            size="lg"
            bg={'blue.400'}
            color={'white'}
            _hover={{
              bg: 'blue.500',
            }}
            type="submit"
          >
            Submit
          </Button>
        </Stack>
      </form>
    </>
  );
}

export default ProjectForm;
