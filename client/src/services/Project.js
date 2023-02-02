const axios = require("axios");

const uri = "http://localhost:3000/api/";
const getProject = axios
  .get(uri)
  .then((response) => response.data)
  .catch((error) => {
    if (error.response && error.response.status === 404) {
      return `\u2014`;
    }
  });

function addProject(Project) {
  const response = axios
    .post(`${uri}/addNewProject`, Project)
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

// const deleteProject = (id) => axios.delete(`${uri}/${id}`);

// const updateProject = (id, newProject) => axios.patch(`${uri}/${id}`, newProject);

module.exports = {
  getProject,
  addProject,
  // deleteProject,
  // updateProject,
};
