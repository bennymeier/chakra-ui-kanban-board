import { Heading } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import ProjectFormModal from '../components/ProjectFormModal';
import ProjectTable from '../components/debug/ProjectTable';
import TaskForm from '../components/TaskForm';
import TaskTable from '../components/debug/TaskTable';
import { getProjects, getTasks } from '../utils/API';

function Debug() {
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await getProjects();
        setProjects(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProjects();
    const fetchTasks = async () => {
      try {
        const { data } = await getTasks();
        setTasks(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchTasks();
  }, []);
  return (
    <>
      <Heading>Create Project</Heading>
      <ProjectFormModal />
      <Heading>Projects</Heading>
      <ProjectTable />
      <Heading>Create Task</Heading>
      <TaskForm />
      <Heading>Tasks</Heading>
      <TaskTable />
    </>
  );
}

export default Debug;
