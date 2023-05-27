import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Card from './components/Card/Card';
import FormLogin from './components/FormLogin/FormLogin';
import Protected from './components/Protected/Protected';


function App() {
 


  return (

    <div style={{ marginTop: "50px", marginBottom: "50px" }}>
      <Router>

        <Routes>
          <Route path='/books' element={<Protected> <Card /> </Protected>} />
          <Route path="/books/:id" element={<Protected> <Card /> </Protected>} />
          <Route path="/login" element={<FormLogin />} />
          <Route path="/" element={<FormLogin to="/login" />} />

        </Routes>


      </Router>


    </div>


  )


}

export default App;
