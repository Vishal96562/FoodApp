import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './screen/Home'
import "bootstrap/dist/css/bootstrap.min.css"
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap.min.css';

import { Outlet } from 'react-router-dom'
import { CardProvider } from './components/ContextReducer.jsx'
function App() {

  return (
    <>
      <CardProvider>
        <Outlet />
      </CardProvider>
    </>
  )
}

export default App
