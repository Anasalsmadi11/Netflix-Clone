import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import {Route, Routes} from 'react-router-dom'
// import Father from './components/Father';
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    {/* <Father/> */}
    
    </>
  );
}

export default App;