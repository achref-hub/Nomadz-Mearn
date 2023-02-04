import { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignInSide from "./components/Login/Login";
import Register from "./components/Register/Register";
import Footer from "./components/Footer/Footer";
import DataTable from "./components/DataTable/DataTable";
import TaskData from "./components/TaskData/TaskData";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <>
      <Router>
        <Fragment>
          <Routes>
            <Route exact path="/" element={<SignInSide />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/Project" element={<DataTable />} />
            <Route exact path="/Task" element={<TaskData />} />
          </Routes>
        </Fragment>
      </Router>
      <Footer />
    </>
  );
}

export default App;
