import * as types from './actionType'
import axios from 'axios'

const getProjects = (projects) =>({
    type : types.GET_PROJECTS,
    payload : projects,
})

const addProjects = ()=>({
    type : types.ADD_PROJECTS,
})
const deleteProject = ()=>({
    type : types.DELETE_PROJECTS,
})

const updatedProject = ()=>({
    type : types.UPDATE_PROJECTS,
})
const uri ="http://localhost:3000/api/";

export const loadProjects = ()=>{
    return function (dispatch) {
        axios
        .get(uri)
        .then((res)=>{
            console.log(res,'res');
            dispatch(getProjects(res.data))
        })
        .catch((err)=>console.log(err))
}}

export const deleteProjects = (id)=>{
    return function (dispatch) {
        axios
        .delete(`${uri}/deleteProject/${id}`)
        .then((res)=>{
            console.log(res,'res');
            dispatch(deleteProject());
            dispatch(loadProjects())
        })
        .catch((err)=>console.log(err))
}}

export const addProject = (project)=>{
    return function (dispatch) {
        axios
        .post(`${uri}/addNewProject`, project)
        .then((res)=>{
            console.log(res,'res');
            dispatch(addProjects());
        })
        .catch((err)=>console.log(err))
}}

export const updateProject = (id,project)=>{
    return function (dispatch) {
        axios
        .put(`${uri}/updateProject/${id}`,project )
        .then((res)=>{
            console.log(res,'res');
            dispatch(updatedProject());
        })
        .catch((err)=>console.log(err))
}}






