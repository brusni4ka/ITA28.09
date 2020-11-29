import React, {lazy, Suspense} from 'react';

import "./reset.Default.styles.scss"
import "./variables.scss" 
import './App.css';

import {Switch, Route, Redirect} from "react-router-dom"

// import CapitalPage from './pages/capital-page/capitalPage.page';

import ParticularFilm from "./pages/particular-film/particularFilm.page"
import ErrorEmptyResults from './components/error-empty-results/error-empty-results.component';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

const CapitalPage = React.lazy(() => import('./pages/capital-page/capitalPage.page'))

const  App: React.FC = () => (
      <div className="App">
        <ParticularFilm />
        <Header />

        <Switch>

          <Suspense fallback={<div>Загрузка...</div>}>
            <Route exact path="/" component={CapitalPage} />
          </Suspense>  

          <Route  path={`/particularpage/:id`} component={ParticularFilm} />
           
          <Redirect from="/particularpage" to="/" />
        
        </Switch>
        <Footer />
      </div>
    );
  


export default App;
