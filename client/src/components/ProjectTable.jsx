import {
  TableContainer,
  Table,
  Tr,
  Thead,
  Th,
  Td,
  Tbody,
  IconButton,
} from '@chakra-ui/react';
import { FaRegEdit } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { getProjects } from '../utils/API';

function ProjectTable() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await getProjects();
        setProjects(data.data);
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProjects();
  }, []);
  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Title</Th>
              <Th>Description</Th>
              <Th>Created at</Th>
              <Th>Updated at</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {projects.map((project) => (
              <Tr key={project._id}>
                <Td>{project._id}</Td>
                <Td>{project.title}</Td>
                <Td>{project.description}</Td>
                <Td>{new Date(project.createdAt).toLocaleDateString()}</Td>
                <Td>{new Date(project.updatedAt).toLocaleString()}</Td>
                <Td>
                  <IconButton aria-label="Edit project" icon={<FaRegEdit />} />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}

export default ProjectTable;
