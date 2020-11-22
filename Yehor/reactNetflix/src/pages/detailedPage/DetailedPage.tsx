import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import DetailedMovie from "../../components/detailedMovie";
import MoviesList from "../../components/moviesList";
import SortByGenrePanel from "../../components/sortBygenre-panel";
import { RouteComponentProps } from "react-router-dom";
import IMovies from "../../interfaces/IMovies";
import IMovie from "../../interfaces/IMovie";

type DetailedPageProps = IMovies & RouteComponentProps<{ id: string }>;

function DetailedPage({ movies, match }: DetailedPageProps) {
  const currentMovie = movies.find(
    (movie) => String(movie.id) === match.params.id
  );
  return (
    <div className="allpageWrapper">
      <div className="wrapper">
        <div className="blur">
          <div className="top-container">
            <Header />
            {currentMovie ? (
              <DetailedMovie movie={currentMovie} />
            ) : (
              <div>There is no movie</div>
            )}
          </div>
        </div>
      </div>
      <div className="main-container">
        <SortByGenrePanel />
      </div>
      <div className="main-container">
        <MoviesList movies={movies} />
      </div>
      <div className="wrapper-footer">
        <div className="main-container">
          <Footer />
        </div>
      </div>
    </div>
  );
}
export default DetailedPage;
