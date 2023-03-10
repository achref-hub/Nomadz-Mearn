import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import "bootstrap/dist/css/bootstrap.min.css";
import { forwardRef } from "react";
import {useDispatch , useSelector} from 'react-redux';
import "./DataTable.css";
import {
  ViewColumn,
  Search,
  SaveAlt,
  Remove,
  LastPage,
  FirstPage,
  FilterList,
  Edit,
  DeleteOutline,
  Clear,
  ChevronRight,
  ChevronLeft,
  Check,
  ArrowDownward,
  AddBox,
} from "@material-ui/icons";
import Header from "../Header/Header";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import {loadProjects,deleteProjects,addProject,updateProject} from '../../redux/ProjectAction'

toast.configure();
const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  AddTask: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

const DataTable = ({ _id }) => {
  // const [data, setData] = useState();
  const columns = [
    {
      title: "Title",
      field: "title",
    },
    {
      title: "Description",
      field: "description",
    },
    {
      title: "StartDate",
      field: "startDate",
      type: "date",
    },
    {
      title: "EndDate",
      field: "endDate",
      type: "date",
    },
  ];
  let dispatch = useDispatch();
  const {projects} = useSelector((state)=>(state.data));
  useEffect(() => {
    dispatch(loadProjects())
 }, []);

  // function refreshPage() {
  //   window.location.reload();
  // }
  console.log(projects,'project');

  const projectDeleted = (id)=>{
    dispatch(deleteProjects(id));
    toast.success("Project deleted successfully");

  }


  const add_project = async (Project) => {
    if (localStorage.getItem("token")) {
      await dispatch(addProject(Project)) 
      toast.success("Project added successfully");
    } else toast.error("Title is required (3)");;
  };

  const update_project= async (id, project) => {
    dispatch(updateProject(id, project));
    toast.success("Project Updated successfully");
  };

  return (
    <>
      <Header />
      <div className="tablediv">
        <h1 className="tabletitle">Project List</h1>
        <div>
          <MaterialTable
            icons={tableIcons}
            title="Project List"
            data={projects.data}
            columns={columns}
            editable={{
              onRowAdd: (newRow) =>
                new Promise((resolve, reject) => {  
                  setTimeout(() => {
                    add_project(newRow);
                    resolve();
                  }, 2000);
                }),
              onRowDelete: (selectedRow) =>
                new Promise((resolve, reject) => {
                  projectDeleted(selectedRow._id);
                  resolve();
                }),
              onRowUpdate: (updatedRow, oldRow) =>
                new Promise((resolve, reject) => {
                  update_project(updatedRow._id, updatedRow);
                  resolve();
                }),
            }}
            options={{
              actionsColumnIndex: -1,
              exportButton: true,
            }}
          />
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
};

export default DataTable;
