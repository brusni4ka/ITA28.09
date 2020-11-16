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


interface IApp {
  moviesDefault: any // [] дает ошибку!!!!
}

class App extends React.Component<{}, IApp> {

  state: IApp = {
    moviesDefault: [],
}

componentDidMount() {

  setTimeout(() => {
      fetch('http://reactjs-cdp.herokuapp.com/movies')
      .then(res => res.json())
      .then(res => 
          this.setState({moviesDefault: res.data}))
  }, 1000)
  
}


render () {
  const { 
    moviesDefault,
  } = this.state

    return (
      <div className="App">
        <Header />

        <Switch>

          <Route exact path="/">
            <CapitalPage 
              moviesDefault={moviesDefault}
            />
          </Route>

          <Route exact path={`/particularpage/:id`}  >
            <Suspense fallback={<div>Загрузка...</div>}>
              <ParticularFilm
                moviesDefault={moviesDefault} 
              />
            </Suspense>
          </Route>

          <Redirect from="/particularpage" to="/" />
        
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
