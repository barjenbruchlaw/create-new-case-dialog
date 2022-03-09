import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import Addcase from './pages/addcase'
import AddCasePage2 from './pages/addCasePages/addCasePage2'
import AddCasePage3 from './pages/addCasePages/addCasePage3'
import AddRPCasePage4 from './pages/addCasePages/addRPCasePage4'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='addcase' element={<Addcase />} />
        <Route path='addCasePage2' element={<AddCasePage2 />} />
        <Route path='addCasePage3' element={<AddCasePage3 />} />
        <Route path='addRPCasePage4' element={<AddRPCasePage4 />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
