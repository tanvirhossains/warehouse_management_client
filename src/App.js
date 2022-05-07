import logo from './logo.svg';
import './App.css';
import pic from '../src/Components/images/mobile-pic.jpg'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Header from '../src/Components/pages/Header/Header.js'
import Home from './Components/pages/Home/Home';
import NotFound from './Components/pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <div className='banner'>
        <h2>Image using</h2>
      </div>
      <h1>connected</h1>



      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>

        <Route path=''></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
