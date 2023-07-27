import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Container } from '@mui/material';
import Header from './components/Header';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import WeatherPage from './views/WeatherPage';
import FavoritesPage from './views/FavoritesPage';

export const API = "http://dataservice.accuweather.com"
export const API_KEY= "3vMphpay81AU2hjh6QZXGlketl9M62WJ"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<WeatherPage/>}/>
      <Route path='/favorites' element={<FavoritesPage/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
