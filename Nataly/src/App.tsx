import React, {lazy, Suspense} from 'react';

import "./reset.Default.styles.scss"
import "./variables.scss" 
import './App.css';

import {Switch, Route, Redirect} from "react-router-dom"

import CapitalPage from './pages/capital-page/capitalPage.page';

import ParticularFilm from "./pages/particular-film/particularFilm.page"
import ErrorEmptyResults from './components/error-empty-results/error-empty-results.component';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';



const  App: React.FC = () => (
      <div className="App">
        <Header />

        <Switch>

          <Route exact path="/" component={CapitalPage} />

          <Route exact path={`/particularpage/:id`}  >
            <Suspense fallback={<div>Загрузка...</div>}>
              <ParticularFilm/>
            </Suspense>
          </Route>

          <Redirect from="/particularpage" to="/" />
        
        </Switch>
        <Footer />
      </div>
    );
  


export default App;
