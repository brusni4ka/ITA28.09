import  {moviesTypes} from "./movies.types"

export  const moviesAction = (movies: any) => ({
    type:  moviesTypes.MOVIESDEFAULT,
    payload: movies
})