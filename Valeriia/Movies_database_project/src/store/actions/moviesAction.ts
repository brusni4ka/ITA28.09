export const ON_REQUEST_MOVIES = "ON_REQUEST_MOVIES"

export const onRequestMoviesAction = (sortByType: string, searchBy?: string, searchValue?: string, offset?: number, isLazyLoading?: boolean) => {
   return {
        type: ON_REQUEST_MOVIES,
        payload: {
            sortByType,
            searchBy,
            searchValue,
            offset,
            isLazyLoading
        }
    }
}
    
  
