import axios from "axios";

export const fetchListOfMovies = async(): Promise<[]> => {
    const result = await axios("https://reactjs-cdp.herokuapp.com/movies?sortOrder=desc&limit=20")
    return result.data.data;
}

export const fetchListOfMoviesByTitle = async(value: string): Promise<[]> => {
    const result = await axios(`https://reactjs-cdp.herokuapp.com/movies?sortOrder=desc&search=${value}&searchBy=title&limit=20`);
    return result.data.data;
   
}

export const fetchListOfMoviesByGenre = async(value: string): Promise<[]> => {
    const result = await axios(`https://reactjs-cdp.herokuapp.com/movies?sortOrder=desc&search=${value}&searchBy=genres&limit=20`);
    return result.data.data;
}

