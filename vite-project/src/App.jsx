import React from "react";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";
import './App.css'

export default function App() {
  return (
    <div className="container">
      <Navbar />
      <Main />
    </div>
  )
}