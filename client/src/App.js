import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import Home from "./pages/home/Home";
import List from "./pages/List/List";
import Hotel from "./pages/hotel/Hotel";
import Login from './components/firebase-auth/src/components/Login/Login';
import Signup from './components/firebase-auth/src/components/Signup/Signup';
function App() {
  return (
    <BrowserRouter>
       <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/hotels" element={<List/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
         <Route path="/hotels/:id" element={<Hotel/>}/>
       </Routes>
    </BrowserRouter>
  )
}
export default App



