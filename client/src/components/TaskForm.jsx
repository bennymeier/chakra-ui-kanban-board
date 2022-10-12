import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  useColorModeValue,
  Textarea,
} from '@chakra-ui/react';
import { useState } from 'react';
import { createTask } from '../utils/API';

function TaskForm() {
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
      createTask(data);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <Box
        rounded={'lg'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'lg'}
        p={8}
      >
        <Stack spacing={4}>
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
        </Stack>
      </Box>
    </>
  );
}

export default TaskForm;
