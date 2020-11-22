import React from "react"
import "./sort-details.styles.scss"


export  interface IPreviewMoviesProps {
    handleChangSortParam?: any,
    handleChangSortValue?: any,
    colorActiveSort?: boolean,
    movies: []
}

const SortDetails = ({handleChangSortParam, handleChangSortValue, movies, colorActiveSort } : IPreviewMoviesProps) => (
    <div className="sortDetails__wrapper">
        {
            movies.length === 0 ? 
            
            <div className="empty__result"></div> 

            : 
            
            <div className="sort__result-wrapper">
            <div className="sort__result-count">
                <p>{movies.length} movies found</p>
            </div>
            <div className="sort__result">
                <button 
                className="sort__result-btn" 
                onClick={() => handleChangSortParam()}>
                    Sort by
                </button>
                <button 
                className={`sort__result-span ${colorActiveSort ? "" : "sort__result-active"} `}  
                onClick={() => handleChangSortValue()}
                >
                    release date
                </button>
                <button 
                className={`sort__result-span ${colorActiveSort ? "sort__result-active" : ""}`}  
                onClick={() => handleChangSortValue()}
                >
                    rating
                </button>
            </div>
        </div>
        }
    </div>
)

export default  SortDetails