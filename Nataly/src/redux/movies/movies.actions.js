import  {moviesTypes} from "./movies.types"


// export interface IMovies {
//      moviesDefault: any
// }

//  interface ImoviesFetchStartAction {
//     type: typeof moviesTypes.FETCH_REQUESTED,
// }

// interface ImoviesFetchDataAction {
//     type: typeof moviesTypes.MOVIESDEFAULT,
//     payload: IMovies
// }


// interface ImoviesFetchDataFail  {
//     type: typeof moviesTypes.FETCH_FAILED,
//     error: any
  
// }

// export type  MoviesFetchTypesActions = 
// ImoviesFetchStartAction |  
// ImoviesFetchDataAction  | 
// ImoviesFetchDataFail




// export  const moviesFetchStartAction = (): ImoviesFetchStartAction  => ({
//     type: typeof moviesTypes.FETCH_REQUESTED,
// })

// export const moviesFetchDataAction = (moviesDefault: IMovies): ImoviesFetchDataAction => ({
//     type: typeof moviesTypes.MOVIESDEFAULT,
//     payload: moviesDefault
// })

// export const moviesFetchDataFail = (error: any): ImoviesFetchDataFail => ({
//     type: typeof moviesTypes.FETCH_FAILED,
//     error: error

// })
////////////////////////////////////////////////////////////////////////
import {fetchMovies} from "../utilits"

export  const moviesFetchStartAction = ()  => ({
    type: moviesTypes.FETCH_REQUESTED,

})

export const moviesFetchDataActionSuccess = (data) => ({
    type:  moviesTypes.MOVIES_DEFAULT,
    payload: data
})

export const moviesFetchDataActionFail = (error) => ({
    type:  moviesTypes.FETCH_FAILED,
    payload: error.errorMesage

})