import axios from "axios";
import { IMovie } from "../../types";

export const fetchListOfMovies = async(sortByType: string, searchBy?: string, searchValue?: string): Promise<IMovie[]> => {
    let searchByParams = searchBy==="title" ? {search: searchValue } :  {filter: searchValue}
    const result = await axios("https://reactjs-cdp.herokuapp.com/movies", {params: {
        sortBy: sortByType,
        sortOrder: "desc",
        limit:20,
        ...searchBy && searchValue && {
            searchBy: searchBy,
            ...searchByParams
        }
    }}
    ); 
    return result.data.data;
}

export const fetchMovieById = async(id: number): Promise<IMovie> => {
    const result = await axios(`https://reactjs-cdp.herokuapp.com/movies/${id}`); 
    return result.data;
}

