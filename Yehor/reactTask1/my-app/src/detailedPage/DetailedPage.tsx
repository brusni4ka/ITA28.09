import React, { ReactComponentElement } from 'react';
import Header from '../components/headerDetailedPage';
import Footer from '../components/footer';
import DetailedMovie from '../components/detailedMovie';
import Main from '../components/main'
import SortByGenrePanel from '../components/sortBygenre-panel'
import { RouteComponentProps } from 'react-router-dom';

interface IMovie {
    id: number,
    title: string,
    tagline: string,
    vote_average: number,
    vote_count: number,
    release_date: string,
    poster_path: string,
    overview: string,
    budget: number,
    revenue: number,
    genres: string[],
    runtime: number
}

interface IAppProps {
    movies: IMovie[];
}
type DetailedPageProps = IAppProps & RouteComponentProps<{ id: string }>

function DetailedPage({ movies, match }: DetailedPageProps) {
    return (
        <div className="allpageWrapper">
            <div className="wrapper">
                <div className="blur">
                    <div className="top-container">
                        <Header />
                        {movies
                            .filter(movie => String(movie.id) === match.params.id)
                            .map(oneMovie => <DetailedMovie movie={oneMovie} key={oneMovie.id} />)}
                    </div>
                </div>
            </div>
            <div className="main-container">
                <SortByGenrePanel />
            </div>
            <div className="main-container">
                <Main movies={movies} />
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