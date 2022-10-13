import {
  Heading,
  Box,
  Flex,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';
import { FaPlus } from 'react-icons/fa';
import ProjectTable from '../components/ProjectTable';
import ProjectForm from '../components/ProjectForm';

function Dashboard() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box padding="3" background="gray.100" borderRadius="10">
        <Flex justifyContent="space-between">
          <Heading size="md">Ongoing Projects</Heading>
          <Button
            leftIcon={<FaPlus />}
            size="sm"
            colorScheme="blue"
            onClick={onOpen}
          >
            Create Project
          </Button>
        </Flex>
        <ProjectTable />
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create Project</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <ProjectForm />
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
}

export default Dashboard;
