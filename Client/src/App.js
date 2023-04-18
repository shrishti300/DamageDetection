import './App.css';
import React from "react";
import "tailwindcss/tailwind.css";
import Homepage from "./Pages/Homepage";
import Result from "./Pages/Result";
import Test from "./Pages/Test";
import { Routes,
  Route,
  BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Homepage/>} />
        <Route path="/result" element={<Result />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
  );
}

export default App;
