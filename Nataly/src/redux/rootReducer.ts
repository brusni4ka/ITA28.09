import {combineReducers} from "redux"
import {moviesReducer} from "./movies/moviesReducer"


const  rootReducer = combineReducers({
  movies: moviesReducer
})

export type RootState = ReturnType<typeof rootReducer>
// {posts: PostsState, comments: CommentsState, users: UsersState}

export default rootReducer