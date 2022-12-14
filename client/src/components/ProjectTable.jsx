import {
  TableContainer,
  Table,
  Tr,
  Thead,
  Th,
  Td,
  Tbody,
  TableCaption,
} from '@chakra-ui/react';
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
        <Table variant="striped">
          <TableCaption placement="top">Lists all projects</TableCaption>
          <Thead>
            <Tr>
              <Th fontWeight="900">Title</Th>
              <Th fontWeight="900">Description</Th>
            </Tr>
          </Thead>
          <Tbody>
            {projects.map((project) => (
              <Tr key={project._id}>
                <Td>{project.title}</Td>
                <Td>{project.description}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}

export default ProjectTable;
