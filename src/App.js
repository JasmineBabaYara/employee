import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nav from "./components/Nav";
import Dashboard from "./components/Navscreens/Dashboard";
import Project from "./components/Navscreens/Project";
import Events from "./components/Navscreens/Events";
import Activities from "./components/Navscreens/Activities";


function App() {
  return (
    <div >
      <Nav />
      <Routes>
      <Route path='/activities' element={<Activities />} />
      <Route path='/events' element={<Events />} />
      <Route path='/project' element={<Project />} />
        <Route path='/' element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
