import './App.css';
import ListTask from './ListTask';
import { Routes,Route,Link } from 'react-router-dom';
import Add from './Add';
import Edit from './Edit';
import Search from './Search';



function App() {
  return (
    <div className="App">
    <Routes>
    <Route  path='/' element={<div><Search/><Link to={"/Add"}>add</Link><ListTask/></div>}/>
    <Route  path='Add' element={<Add/>}/>
    <Route  path='Edit' element={<Edit/>}/>
   </Routes>
    </div>
  );
}

export default App;
