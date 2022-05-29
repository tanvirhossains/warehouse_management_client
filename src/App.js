import './App.css';
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
import Footer from './Components/pages/Footer/Footer';
import Inventory from './Components/pages/Inventory/Inventory';
import RequireAuth from './Components/pages/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Header></Header>



      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/socialLogin' element={<SocialLogIn></SocialLogIn>}></Route>
        <Route path='/signin' element={<SignIn></SignIn>}></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
        <Route path='/addItem' element={<AddItem></AddItem>}></Route>

        <Route path='/manageItem' element={
          <RequireAuth>
            <ManageItem></ManageItem>
          </RequireAuth>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>

        <Route path='/inventory/:itemId' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>

        <Route path=''></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
