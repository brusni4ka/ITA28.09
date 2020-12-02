import  {moviesTypes} from "./movies.types"
////////////////////////////////////
export interface IMovies {
    moviesDefault: any
}

export  interface ImoviesFetchStartAction {
    type: typeof moviesTypes.FETCH_REQUESTED,
    sortByType?: string,
    searchBy?: string,
    searchValue?: string
    
}

export  interface ImoviesFetchDataAction {
    type: typeof moviesTypes.MOVIES_DEFAULT,
    payload: IMovies
}


export interface ImoviesFetchDataFaile  {
    type: typeof moviesTypes.FETCH_FAILED,
    error: any
}

export  const moviesFetchStartAction = (sortByType?: string, searchBy?: string, searchValue?: string): ImoviesFetchStartAction  => ({
    type:  moviesTypes.FETCH_REQUESTED,
    sortByType,
    searchBy,
    searchValue
})

export const moviesFetchDataActionSuccess = (moviesDefault: IMovies): ImoviesFetchDataAction => ({
    type:  moviesTypes.MOVIES_DEFAULT,
    payload: moviesDefault
})

export const moviesFetchDataActionFaile = (error: any): ImoviesFetchDataFaile => ({
    type:  moviesTypes.FETCH_FAILED,
    error: error
})
//////////////////////////////////////////////////////
// export interface IchangSortParamByTitleStart  {
//     type: typeof moviesTypes.ACTIVE_SEARCH_BY_TITLE_BUTTON_START
//     value: any
// }

// export interface IchangSortParamByTitleSuccess  {
//     type: typeof moviesTypes.ACTIVE_SEARCH_BY_TITLE_BUTTON_SUCCESS,
//     payload: any
// }

// export interface IchangSortParamByTitleFaile  {
//     type: typeof moviesTypes.ACTIVE_SEARCH_BY_TITLE_BUTTON_FAILE,
//     error: any
// }


// export const   changSortParamByTitleStart = (value: any): IchangSortParamByTitleStart => ({
//     type: moviesTypes.ACTIVE_SEARCH_BY_TITLE_BUTTON_START,
//     value: value
    
// })

// export const changSortParamByTitleSuccess = (moviesByTitle: any):  IchangSortParamByTitleSuccess => ({
//     type: moviesTypes.ACTIVE_SEARCH_BY_TITLE_BUTTON_SUCCESS,
//     payload: moviesByTitle
// })


// export const changSortParamByTitleFaile = (error: any): IchangSortParamByTitleFaile => ({
//     type: moviesTypes.ACTIVE_SEARCH_BY_TITLE_BUTTON_FAILE,
//     error: error
// })

// //////////////////////////////////////////////////////////////////////////////////////
// export interface ImoviesFetchByGenresStart {
//     type: typeof moviesTypes.ACTIVE_SEARCH_BY_GENRE_BUTTON_START,
//     value: any
// }

// export interface IchangSortParamByGenresStart {
//     type: typeof moviesTypes.ACTIVE_SEARCH_BY_GENRE_BUTTON_SUCCESS,
//     payload: any
// }

// export interface IchangSortParamByGenresFaile {
//     type: typeof moviesTypes.ACTIVE_SEARCH_BY_GENRE_BUTTON_FAILE,
//     error: any
// }

// export  const changSortParamByGenresStart = (value: any): ImoviesFetchByGenresStart => ({
//     type:  moviesTypes.ACTIVE_SEARCH_BY_GENRE_BUTTON_START,
//     value: value
// })

// export const changSortParamByGenresSuccess = (moviesbyGanre: any): IchangSortParamByGenresStart => 
//  ({
//     type: moviesTypes.ACTIVE_SEARCH_BY_GENRE_BUTTON_SUCCESS,
//     payload: moviesbyGanre
//  })

//  export const changSortParamByGenresFaile = (error: any): IchangSortParamByGenresFaile => ({
//     type:  moviesTypes.ACTIVE_SEARCH_BY_GENRE_BUTTON_FAILE,
//     error: error
//  })
//  ///////////////////////////////////////////////////////

//  export interface IgetValueFromForm {
//     type: typeof moviesTypes.GET_VALUE_FROM_FORM,
//     payload: any
// }


///////////////////////////////////////


export type  MoviesFetchTypesActions = 
ImoviesFetchStartAction |  
ImoviesFetchDataAction  | 
ImoviesFetchDataFaile 

// IchangSortParamByTitleStart |
// IchangSortParamByTitleSuccess |
// IchangSortParamByTitleFaile |

// ImoviesFetchByGenresStart | 
// IchangSortParamByGenresStart |
// IchangSortParamByGenresFaile | 

// IgetValueFromForm


