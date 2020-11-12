import React from 'react';
import Home from './Components/Home/Home'
// import FilmPage from './Components/FilmPage/FilmPage'
import './scss/main.scss';

export default function App() {
  return (
    <div className="app">
      <Home />
      {/* <FilmPage /> */}
    </div>
  );
}