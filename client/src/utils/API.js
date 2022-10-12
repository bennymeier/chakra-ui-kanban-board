import axios from 'axios';

export const API = axios.create({
  baseURL: 'http://localhost:1400/api',
  responseType: 'json',
});

/* PROJECTS */
export const createProject = (data) => {
  return API.post('/project/', data);
};

export const getProjects = async () => {
  return API.get('/projects');
};

export const getProjectById = async (projectID) => {
  return API.get(`/project/${projectID}`);
};

export const deleteProject = (projectID) => {
  return API.delete(`/project/${projectID}`);
};

export const updateProject = (projectID, data) => {
  return API.put(`/project/${projectID}`, data);
};

/* TASKS */
export const createTask = (data) => {
  return API.post('/task/', data);
};

export const getTasks = async () => {
  return API.get('/tasks');
};

export const getTaskById = async (taskID) => {
  return API.get(`/task/${taskID}`);
};

export const deleteTask = (taskID) => {
  return API.delete(`/task/${taskID}`);
};

export const updateTask = (taskID, data) => {
  return API.put(`/task/${taskID}`, data);
};
