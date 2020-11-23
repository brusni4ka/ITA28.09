import {createSelector} from "reselect"

const selectMovies = state => state.movies

const selectAllMovies = createSelector(
    [selectMovies],
    select => select.movies

)