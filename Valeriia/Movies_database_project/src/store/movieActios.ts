export enum MovieActionTypes{
    ON_INIT_MOVIE= 'ON_INIT_MOVIE',
    ON_UPDATE_MOVIE= 'ON_UPDATE_MOVIE'
}

interface IInitMovie{
    type:MovieActionTypes.ON_INIT_MOVIE;
    filmId:string
}

interface IUpdateMovie{
    type:MovieActionTypes.ON_UPDATE_MOVIE;
    id: number
    
}

export const onInitMovie = (filmId: string): IInitMovie => ({
    type: MovieActionTypes.ON_INIT_MOVIE,
    filmId

});

export const onUpdateMovie = (id: number): IUpdateMovie => ({
    type: MovieActionTypes.ON_UPDATE_MOVIE,
    id
});

export type MovieAction = IInitMovie | IUpdateMovie