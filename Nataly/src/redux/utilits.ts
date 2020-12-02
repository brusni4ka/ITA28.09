
export  const fetchMovies  =  async(): Promise<any> => {
    const  getMovies = await fetch("https://reactjs-cdp.herokuapp.com/movies?sortOrder=desc")
    const movies = await getMovies.json()
    return movies.data
}

export const fetchListOfMovies = async(
    sortByType: any, 
    searchBy?: any, 
    searchValue?: any): Promise<[]> => {

    let url = searchBy && searchValue 

    ?

    `https://reactjs-cdp.herokuapp.com/movies?sortBy=${sortByType}&searchBy=
    ${searchBy}&sortOrder=desc&${searchBy === "title" ? `search=${searchValue}` 
    
    : 

    `filter=${searchValue}`}&limit=20`
    : `https://reactjs-cdp.herokuapp.com/movies?sortBy=${sortByType}&sortOrder=desc&limit=20`;
    const result = await fetch(url); 
    const data = await result.json()

    return data.data
}


export const fetchMovieById = async(id: number): Promise<any> => {
    const result = await fetch(`https://reactjs-cdp.herokuapp.com/movies/${id}`); 
    const data = result.json()
    return data
}







