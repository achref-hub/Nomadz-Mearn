import Project from './Pages/Project';
import Card from './Pages/card'
import CardValid from './Pages/cardvalid';
import Details from './Pages/Details'
import { Routes ,Route,Navigate  } from 'react-router-dom';

function App() {
  return (
    <div>
    <Routes>
      <Route exact path='/Project' element = {<Project/>} />
      <Route exact path='/CardValid' element = {<CardValid/>} />
      <Route exact path='/Details:id' element = {<Details/>} />
      {/* <Route path="*" element={<Navigate to="Project" />} /> */}
    </Routes>
   
    </div>  
           
  );
}

export default App;
