import IMovie from "../../interfaces/IMovie";

export enum MoviesTypes {
  LoadData = "LoadData",
  ReceivedData = "ReceivedData",
  Error = "Error",
  DataOffsetIncrement = "DataOffsetIncrement",
  ReceivedDataMore = "ReceivedDataMore",
  DataOffsetDecrement = "DataOffsetDecrement"
}

export interface ILoadData {
  type: MoviesTypes;
  movies: IMovie[];
  status: string;
  sortBy?: string;
  searchBy?: string;
  search?: string;
  offset?: number
}

export const loadData = (
  status: string,
  sortBy?: string,
  searchBy?: string,
  search?: string,
  offset?: number
): ILoadData => ({
  type: MoviesTypes.LoadData,
  movies: [],
  status,
  sortBy,
  searchBy,
  search,
  offset
});

export interface IReceivedData {
  type: MoviesTypes;
  status: string;
  movies: IMovie[];
  offset?: number;
}

export const receivedData = (
  status: string,
  movies: IMovie[]
): IReceivedData => ({
  type: MoviesTypes.ReceivedData,
  status: status,
  movies: movies,
});

export interface IError {
  type: MoviesTypes;
  movies: IMovie[];
  status: string;
  offset?: number;
}

export const error = (status: string): IError => ({
  type: MoviesTypes.Error,
  movies: [],
  status: status,
});

export interface IDataOffsetIncrement {
  type: MoviesTypes;
  movies?: IMovie[];
  status?: string;
  offset?: number;
}

export const dataOffsetIncrement = (): IDataOffsetIncrement => ({
  type: MoviesTypes.DataOffsetIncrement
})

export interface IDataOffsetDecrement {
  type: MoviesTypes;
  movies?: IMovie[];
  status?: string;
  offset?: number;
}

export const dataOffsetDecrement = (): IDataOffsetDecrement => ({
  type: MoviesTypes.DataOffsetDecrement
})



export type IMoviesAction = ILoadData | IReceivedData | IError | IDataOffsetIncrement | IDataOffsetDecrement;
