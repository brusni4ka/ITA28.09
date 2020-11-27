import axios from "axios";
import { IMovie } from "../../types";

export const fetchListOfMoviesBySortType = async(sortByType: string, searchBy?: string, searchValue?: string): Promise<[]> => {
    let url = searchBy && searchValue ? `https://reactjs-cdp.herokuapp.com/movies?sortBy=${sortByType}&searchBy=
    ${searchBy}&sortOrder=desc&${searchBy === "title" ? `search=${searchValue}` : `filter=${searchValue}`}&limit=20`
     : `https://reactjs-cdp.herokuapp.com/movies?sortBy=${sortByType}&sortOrder=desc&limit=20`;
    const result = await axios(url); 
    return result.data.data;
}

export const fetchMovieById = async(id: number): Promise<IMovie> => {
    const result = await axios(`https://reactjs-cdp.herokuapp.com/movies/${id}`); 
    return result.data;
}

