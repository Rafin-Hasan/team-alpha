
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Forget from './Pages/Forget'
import LayoutOne from './Layout/LayoutOne'
import AllVideos from './Pages/AllVideos'
import NotFound from './Pages/NotFound'
import WatchLang from './Pages/WatchLang'
import WacthNow from './Pages/WacthNow'
import app from './firebase.config'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const shanto = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<LayoutOne/>}>
        <Route index element={<Home/>}/>
        <Route path='/allvideos' element={<AllVideos/>}/>
        <Route path='/watchlanding' element={<WatchLang/>}/>
        <Route path='/watchnow' element={<WacthNow/>}/>
        <Route path='/forget' element={<Forget/>}/>
        <Route path='*' element={<NotFound/>}/>
        </Route>

        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        
      </Route>
    )
  )


  return (
    <>

    <RouterProvider router={shanto}/>
    <ToastContainer />

      
    </>
  )
}

export default App
