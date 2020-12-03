import React, { useEffect } from "react";
import Movie from "../../components/Movie";
import { RouteComponentProps } from "react-router";
import Movies from "../../components/Movies";
import "./MovieDetails.scss";
import Header from "../../components/Header";
import { MovieConnectProps } from "./index";
import InfiniteScroll from "react-infinite-scroll-component";
import { IMovie } from "../../types";

interface IRouteInfo {
  id: string;
}

type MovieProps = MovieConnectProps & RouteComponentProps<IRouteInfo>;

const MovieDetails = (props: MovieProps) => {
  const fetchData = (
    offset: number = 0,
    isLazyLoading: boolean = false,
    movie: IMovie
  ) => {
    props.onRequestMovies(
      "genres",
      "release_date",
      movie.genres.join(","),
      offset,
      isLazyLoading
    );
  };

  useEffect(() => {
    const filmId = Number(props.match.params.id);
    props.onRequestMovie(filmId);
    window.scrollTo(0, 0);
  }, [props.match.params.id]);

  return (
    <>
      <Header isLinkToShow={true} />
      <div className="movieDetails">
        {props.movie ? (
          <Movie movie={props.movie!} isLoading={props.isLoading} />
        ) : (
          <div>
            <p>The film by this id is not exist</p>
          </div>
        )}
      </div>
      <InfiniteScroll
        dataLength={props.movies.length}
        next={() => fetchData(props.movies.length + 10, true, props.movie!)}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        <Movies
          movies={props.movies}
          isLoading={props.isLoading}
          isError={props.isError}
        />
      </InfiniteScroll>
    </>
  );
};

export default MovieDetails;
