import React from "react"
import "./sort-details.styles.scss"

import {IPreviewMoviesProps} from "../../interfaces/interfaces"


const SortDetails = ({handleChangSortValue, number_of_films, colorActiveSort } : IPreviewMoviesProps) => (
    <div className="sortDetails__wrapper">
        {
            number_of_films === 0 ? 
            
            <div className="empty__result"></div> 
            : 
            
            <div className="sort__result-wrapper">
            <div className="sort__result-count">
                <p>{number_of_films} movies found</p>
            </div>
            <div className="sort__result">
                <button 
                className="sort__result-btn" 
                onClick={() => handleChangSortValue}>
                    Sort by
                </button>
                <button 
                className={`sort__result-span ${colorActiveSort ? "" : "sort__result-active"} `}  
                // onClick={() => handleChangSortValue()}
                >
                    release date
                </button>
                <button 
                className={`sort__result-span ${colorActiveSort ? "sort__result-active" : ""}`}  
                // onClick={() => handleChangSortValue()}
                >
                    rating
                </button>
            </div>
        </div>
        }
       
    </div>
   
)

export default  SortDetails