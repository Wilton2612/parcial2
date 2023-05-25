import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Card from './components/Card/Card';
import FormLogin from './components/FormLogin/FormLogin';
import CardDetail from './components/CardDetail/CardDetail';

function App() {

  return (

    <div>
    <Router>

<Routes>
<Route path="/books" element={<Card />} />
<Route path="/books/:id" element={<CardDetail />} />
<Route path="/login" element={<FormLogin />} />
<Route path="/" element={<FormLogin to="/login" />} />

</Routes>


</Router>


  </div>
  

  )
   

}

export default App;
