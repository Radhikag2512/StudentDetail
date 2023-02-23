import React from 'react';
import login from './components/login/loginForm';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' component={login}/>
      </Routes>
    </div>
  )
}

export default App