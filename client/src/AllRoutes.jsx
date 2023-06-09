import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Auth from './Pages/Auth/Auth';
import Home from './Pages/Home/Home';
import Questions from './Pages/Questions/Questions';
import AskQuestion from './Pages/AskQuestion/AskQuestion';
import DisplayQuestion from './Pages/Questions/DisplayQuestion';

const AllRoutes = () => {
  return (
    <div>
        <Routes>
       
           <Route  path='/' element={<Home/>} />
           <Route  path='/Auth' element={<Auth/>} />
           <Route  path='/Questions' element={<Questions/>} />
           <Route  path='/AskQuestion' element={<AskQuestion/>} />
           <Route  path='/Questions/:id' element={<DisplayQuestion/>} />
         
         
        </Routes>
    </div>
  )
}

export default AllRoutes