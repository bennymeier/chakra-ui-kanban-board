import {
  TableContainer,
  Table,
  Tr,
  Thead,
  Th,
  Td,
  Tbody,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { getTasks } from '../../utils/API';

function TaskTable() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await getTasks();
        setTasks(data.data);
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
            </Tr>
          </Thead>
          <Tbody>
            {tasks.map((task) => (
              <Tr key={task._id}>
                <Td>{task._id}</Td>
                <Td>{task.title}</Td>
                <Td>{task.description}</Td>
                <Td>{new Date(task.createdAt).toLocaleDateString()}</Td>
                <Td>{new Date(task.updatedAt).toLocaleString()}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}

export default TaskTable;
