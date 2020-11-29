import React from "react";
import {
  BrowserRouter as Router,
  Route,
  RouteComponentProps,
} from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homePage";
import DetailedPage from "./pages/detailedPage";
import { moveEmitHelpers } from "typescript";
import IMovies from "./interfaces/IMovies";

// import { LoadData ,ILoadData} from "./redux/actions/moviesActions";
// import {connect,ConnectedProps} from 'react-redux';

// interface RootState {
//   movies: any;
// }

// const mapStateToProps = (state: RootState) => ({
//   movies: state.movies.movies,
// })

// const mapDispatchToProps = (dispatch:(arg: ILoadData) => (ILoadData)) => ({ 
//   LoadData: () => dispatch(LoadData("Data is loading"))
// }) 

// const connector = connect(mapStateToProps, mapDispatchToProps)
// type PropsFromRedux = ConnectedProps<typeof connector>

class App extends React.Component<{}, {}> {

  // componentDidMount(){
  //   this.props.LoadData();
  // }
  
  render() {
    // const { movies } = this.props;
    
    return (
      <Router>
        <Route
          path="/"
          exact
          component={HomePage}
        />
        <Route
          path="/DetailedPage/:id"
          component={DetailedPage}
        />
      </Router>
    );
  }
}

export default App;
