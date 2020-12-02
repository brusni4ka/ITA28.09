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

export const LoadData = (
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

export const ReceivedData = (
  status: string,
  movies: IMovie[]
): IReceivedData => ({
  type: MoviesTypes.ReceivedData,
  status: status,
  movies: movies,
});

export interface IReceivedDataMore {
  type: MoviesTypes;
  status: string;
  movies: IMovie[];
  offset?: number;
}

export const ReceivedDataMore = (
  status: string,
  movies: IMovie[]
): IReceivedDataMore => ({
  type: MoviesTypes.ReceivedData,
  status: status,
  movies: movies,
})

export interface IError {
  type: MoviesTypes;
  movies: IMovie[];
  status: string;
  offset?: number;
}

export const Error = (status: string): IError => ({
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

export const DataOffsetIncrement = (): IDataOffsetIncrement => ({
  type: MoviesTypes.DataOffsetIncrement
})

export interface IDataOffsetDecrement {
  type: MoviesTypes;
  movies?: IMovie[];
  status?: string;
  offset?: number;
}

export const DataOffsetDecrement = (): IDataOffsetDecrement => ({
  type: MoviesTypes.DataOffsetDecrement
})



export type IMoviesAction = ILoadData | IReceivedData | IError | IReceivedDataMore;
