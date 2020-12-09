export const ON_REQUEST_MOVIE = "ON_REQUEST_MOVIE"

export const onRequestMovieAction = (id: string) => {
   return {
        type: ON_REQUEST_MOVIE,
        payload: {
            id
        }
    }
}
