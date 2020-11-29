import {createSelector} from "reselect"

const selectMovies = (state: any) => state.movies

const selectAllMovies = createSelector(
    [selectMovies],
    select => select.movies

)