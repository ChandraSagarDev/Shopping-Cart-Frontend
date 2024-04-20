import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import AddProducts from './components/AddProducts';
import SearchProducts from './components/SearchProducts';
import ViewProducts from './components/ViewProducts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<ViewProducts/>} />
        <Route path='/search' element={<SearchProducts/>}/>
        <Route path='/add' element={<AddProducts/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
