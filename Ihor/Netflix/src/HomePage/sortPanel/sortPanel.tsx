
import React,{useState,useEffect} from "react";
import "./sortPanel.css";
import { parse } from "query-string";
import { useLocation } from 'react-router-dom';


interface ISortPanelProps {
  handleSortChange(sortBy: string): void;
  moviesCount: number;
}


enum IsortBy {
  date = "release_date",
  rating = "vote_average",
}

const SortPanel = (props:ISortPanelProps) => {

  const [sortBy,setSortBy] = useState(IsortBy.date);
  let location = useLocation();
  
  useEffect(()=>{
    const query = parse(location.search) as { sortBy: string };
    let { sortBy } = query;
    if(sortBy){
      setSortBy(sortBy === IsortBy.date ? IsortBy.date : IsortBy.rating)
    }
  },[location.search]);


  const handleSortParams = (value: IsortBy) => {
    setSortBy(value)
    props.handleSortChange(value)
  };

    return (
      <div className="sort_panel">
        <p className="movies_found">
          <span>{props.moviesCount}</span> movies found

        </p>
        <div className="sort">
          <span className="sort_by">Sort by</span>
          <button
            name="datesort"
            className={

              sortBy === IsortBy.date
                ? "sort_date_active"
                : "sort_date"
            }
            onClick={() => handleSortParams(IsortBy.date)}

          >
            release date
          </button>
          <button
            name="ratingsort"
            className={

              sortBy === IsortBy.rating
                ? "sort_rating_active"
                : "sort_rating"
            }
            onClick={() => handleSortParams(IsortBy.rating)}

          >
            rating
          </button>
        </div>
      </div>
    );

}



export default SortPanel;
