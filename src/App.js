import logo from './logo.svg';
import './App.css';
import pic from '../src/Components/images/mobile-pic.jpg'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Header from '../src/Components/pages/Header/Header.js'
import Home from './Components/pages/Home/Home';
import NotFound from './Components/pages/NotFound/NotFound';
import SocialLogIn from './Components/pages/SignInOut/SocialLogin/SocialLogIn';
import SignIn from './Components/pages/SignInOut/SignIn/SignIn';
import SignUp from './Components/pages/SignInOut/SignUp/SignUp';
import AddItem from './Components/pages/Items/AddItem/AddItem';
import ManageItem from './Components/pages/Items/ManageItem/ManageItem';
import Blogs from './Components/pages/Blogs/Blogs';

function App() {
  return (
    <div className="App">
      <Header></Header>

      

      <h1>connected</h1>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/socialLogin' element={<SocialLogIn></SocialLogIn>}></Route>
        <Route path='/signin' element={<SignIn></SignIn>}></Route>
        <Route path='/sighUp' element={<SignUp></SignUp>}></Route>
        <Route path='/addItem' element={<AddItem></AddItem>}></Route>
        <Route path='/manageItem' element={<ManageItem></ManageItem>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        

        <Route path=''></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
