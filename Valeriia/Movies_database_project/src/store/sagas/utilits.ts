import axios from "axios";

export const fetchListOfMovies = async(): Promise<[]> => {
    const result = await axios("https://reactjs-cdp.herokuapp.com/movies?sortOrder=desc&limit=20");
    return result.data.data;
}

export const fetchListOfMoviesByTitle = async(searchTerm: string): Promise<[]> => {
    const result = await axios(`https://reactjs-cdp.herokuapp.com/movies?sortOrder=desc&search=${searchTerm}&searchBy=title&limit=20`);
    return result.data.data;
}

export const fetchListOfMoviesByGenre = async(searchTerm: string): Promise<[]> => {
    const result = await axios(`https://reactjs-cdp.herokuapp.com/movies?sortOrder=desc&searchBy=genres&filter=${searchTerm}&limit=20`);
    return result.data.data;
}

