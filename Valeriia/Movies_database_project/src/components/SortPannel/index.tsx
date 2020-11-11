import React from "react";
import Button from "../Button";
import "./index.scss";

interface ISortPannelProps {
  moviesCount: number;
  onClickSortBy(sortByType: string): void;
  sortBy: string;
}

const SortPannel = ({
  moviesCount,
  onClickSortBy,
  sortBy,
}: ISortPannelProps) => (
  <div className="sortPannel">
    <div className="sortPannel__wrapper">
      {moviesCount ? (
        <>
          <div>
            <p>{moviesCount} movies found</p>
          </div>
          <div className="sortPannel__buttons">
            <span className="sortPannel__sortBy">Sort by </span>
            <Button
              onClick={() => onClickSortBy("date")}
              buttonName="release date"
              className={sortBy === "date" ? "active" : "sortButton"}
            />
            <Button
              onClick={() => onClickSortBy("vote_average")}
              buttonName="rating"
              className={sortBy === "vote_average" ? "active" : "sortButton"}
            />
          </div>
        </>
      ) : null}
    </div>
  </div>
);

export default SortPannel;
