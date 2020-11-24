export enum MoviesActionTypes{
    ON_SEARCH = 'ON_SEARCH',
    ON_INIT_PAGE= 'ON_INIT_PAGE',
    ON_LOADING= 'ON_LOADING',
    ON_SORT= 'ON_SORT'
}

interface ISearchAction{
    type:MoviesActionTypes.ON_SEARCH;
    filterBy:string;
    searchTerm:string;

}

interface IInitPage{
    type:MoviesActionTypes.ON_INIT_PAGE;
    filterBy:string;
    searchTerm:string;
    sortBy:string;
}

interface ILoading{
    type:MoviesActionTypes.ON_LOADING;
}

interface ISort{
    type:MoviesActionTypes.ON_SORT;
    sortByType:string
}

export const onSearch = (filterBy:string, searchTerm:string): ISearchAction => ({
    type: MoviesActionTypes.ON_SEARCH,
    filterBy,
    searchTerm,

});

export const onInitPage = (filterBy:string, searchTerm:string,sortBy: string): IInitPage => ({
    type: MoviesActionTypes.ON_INIT_PAGE,
    filterBy,
    searchTerm,
    sortBy
});

export const onLoading = (): ILoading => ({
    type: MoviesActionTypes.ON_LOADING
});

export const onSort = (sortByType:string): ISort => ({
    type: MoviesActionTypes.ON_SORT,
    sortByType
});

export type MoviesAction = ISearchAction | IInitPage | ILoading | ISort;