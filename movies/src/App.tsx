import React from 'react';

import "./reset.Default.styles.scss"
import "./variables.scss" 
import './App.css';

import CapitalPage from './pages/capital-page/capitalPage.page';

import ParticularFilm from "./pages/particular-film/particularFilm.page"
import ErrorEmptyResults from './components/error-empty-results/error-empty-results.component';


function App() {
  return (
    <div className="App">
      {/* <ErrorEmptyResults> */}
        <CapitalPage />
      {/* </ErrorEmptyResults> */}
    </div>
  );
}

export default App;
