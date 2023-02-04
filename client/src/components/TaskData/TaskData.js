import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import "bootstrap/dist/css/bootstrap.min.css";
import { getTask, addTask ,updateTask,deleteTask} from "../../services/Task";
import { forwardRef } from "react";
import "./TaskData.css";
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

const TaskData = ({ user }) => {
  const [data, setData] = useState();

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
      title: "dueDate",
      field: "dueDate",
      type: "date",
    },

  ];
  useEffect(() => {
    getData();
  }, []);


  function refreshPage() {
    window.location.reload();
  }

  const getData = async () => {
    await getTask.then((response) => {
      setData(response.data);
    });
  };

  const delete_Task = async (id) => {
    await deleteTask(id);
    refreshPage();
  };

  const add_Task = async (Project) => {
    if (localStorage.getItem("token")) {
      await addTask(Project).then((res) => {
        if (res) {
          toast.success("Project added successfully");
        } else toast.error("Title is required ");
      });
    } else return false;
  };

  const update_Task= async (id, updated) => {
    await updateTask(id, updated);
    refreshPage();
  };

  return (
    <>
      <Header />
      <div className="tablediv">
        <h1 className="tabletitle">Task List</h1>
        <div>
          <MaterialTable
            icons={tableIcons}
            title="Task List"
            data={data}
            columns={columns}
            editable={{
              onRowAdd: (newRow) =>
                new Promise((resolve, reject) => {  
                  setTimeout(() => {
                    add_Task(newRow);
                    resolve();
                  }, 1000);
                }),
              onRowDelete: (selectedRow) =>
                new Promise((resolve, reject) => {
                 delete_Task(selectedRow._id);
                  resolve();
                }),
              onRowUpdate: (updatedRow, oldRow) =>
                new Promise((resolve, reject) => {
                  update_Task(updatedRow._id, updatedRow);
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

export default TaskData;
