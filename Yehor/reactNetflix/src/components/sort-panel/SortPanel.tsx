import React, { useEffect, useState } from "react";
import "./SortPanel.css";
import Button from "../button";
import { parse } from "query-string";
import * as History from "history";

interface ISortPanelProps {
  moviesLength: number;
  handlerSortChange(sortBy: string): void;
  location: History.Location;
}
interface ISortPanelState {
  sortBy: SortBy;
}
enum SortBy {
  Date = "release_date",
  Rating = "vote_average",
}

const SortPanel = (props: ISortPanelProps) => {
  const [sortBy, setSortBy] = useState(SortBy.Date);

  useEffect(() => {
    const querySrch = parse(props.location.search) as { sortBy: string };
    checkSetSortby(querySrch.sortBy);
  }, [props.location]);

  const checkSetSortby = (sortByvalue: string) => {
    setSortBy(sortByvalue === SortBy.Rating ? SortBy.Rating : SortBy.Date);
  };

  const sortByDate = () => {
    setSortBy(SortBy.Date);
    props.handlerSortChange(SortBy.Date);
  };
  const sortByRate = () => {
    setSortBy(SortBy.Rating);
    props.handlerSortChange(SortBy.Rating);
  };

  const { moviesLength } = props;
  return (
    <div className="sort-panel">
      <div className="amount">{moviesLength} movies found</div>
      <div className="sort">
        <p>Sort by</p>
        <Button
          content={"release date"}
          styleClass={sortBy === SortBy.Date ? "on" : "off"}
          handler={sortByDate}
        />
        <Button
          content={"rating"}
          styleClass={sortBy === SortBy.Rating ? "on" : "off"}
          handler={sortByRate}
        />
      </div>
    </div>
  );
};

export default SortPanel;
