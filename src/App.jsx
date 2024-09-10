import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Component/Lay-out/Nav'
import Section1 from './Section1'

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <>
      <Nav/>
      <Section1/>
      <ToastContainer autoClose={750} />
    </>
  )
}

export default App
