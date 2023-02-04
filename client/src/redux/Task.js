const axios = require("axios");

const uri = "http://localhost:3000/Task/";


const getTask = axios
  .get(uri)
  .then((response) => response.data)
  .catch((error) => {
    if (error.response && error.response.status === 404) {
      return `\u2014`;
    }
  });

function addTask(Project) {
  const response = axios
    .post(`${uri}/addTask`, Project)
    .then((res) => {
      if (res) {
        return true;
      } else return false;
    })
    .catch((error) => {
      if (error.response && error.response.status === 404) {
        return `\u2014`;
      }
    });
  return response;
}

const deleteTask = (id) => axios.delete(`${uri}/deleteTask/${id}`);

const updateTask = (id, newProject) => axios.put(`${uri}/UpdateTask/${id}`, newProject);

module.exports = {
    getTask,
  addTask,
  deleteTask,
  updateTask
};
