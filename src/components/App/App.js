import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import Details from '../Details/Details'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/details/:id" element={<Details/>}/>
    </Routes>
  );
}

export default App;
