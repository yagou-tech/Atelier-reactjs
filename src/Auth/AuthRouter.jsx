import React from 'react';
import { Routes, Route }from 'react-router-dom';
import Login from '../components/login';

const AuthRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </div>
  )
}

export default AuthRouter
