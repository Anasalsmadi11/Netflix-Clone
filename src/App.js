
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home'
import Navbar from './components/Navbar';
import {Route, Routes} from 'react-router-dom'
import FavList from './components/FavList'
function App() {
  return (
    <>
   <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/favlist' element={<FavList/>}/>
    </Routes>
  
    
    </>
  );
}

export default App;