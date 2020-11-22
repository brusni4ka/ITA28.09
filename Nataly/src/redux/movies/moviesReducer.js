import {moviesTypes} from "./movies.types"

const INITIAL_STATE = {
    moviesDefault: [],
    isFatching: false,
    errorMesage: "",
}


const moviesReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case moviesTypes.FETCH_REQUESTED: return {
            ...state, 
            isFatching: true,
        }
        case moviesTypes.MOVIESDEFAULT: return {
            ...state, 
            isFatching: false,
            moviesDefault: [...state.moviesDefault , action.payload]
        }
        case moviesTypes.FETCH_FAILED : return {
            ...state, 
            isFatching: false,
            errorMesage: action.error
        }
        default: return state;
    }
} 

export default  moviesReducer


// import {IMovies, MoviesFetchTypesActions} from "./movies.actions"

 
// interface InitialState {
//     moviesDefault: IMovies[],
//     isFatching: boolean,
//     errorMesage: any,
    
// }

// const INITIAL_STATE: InitialState = {
//     moviesDefault: [],
//     isFatching: false,
//     errorMesage: "",

// }

//  const moviesReducer = (state = INITIAL_STATE, action: MoviesFetchTypesActions) => {

//     switch (action.type) {
//         case moviesTypes.FETCH_REQUESTED: return {
//             ...state, 
//             isFatching: true
//         }
//         case moviesTypes.MOVIESDEFAULT: return {
//             ...state, 
//             isFatching: false,
//             moviesDefault: action.type
//         }
//         case moviesTypes.FETCH_FAILED : return {
//             ...state, 
//             isFatching: false,
//             errorMesage: action.type
//         }
//         default: return state;
//     }
// } 

// export default  moviesReducer


// interface InitialState {
//     moviesDefault: IMovies[],
//     isFatching: boolean,
//     errorMesage: any,
    
// }
// import {MoviesFetchTypesActions} from "./movies.actions"


