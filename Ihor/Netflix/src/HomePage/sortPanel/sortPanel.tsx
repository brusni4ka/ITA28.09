import React from "react";
import "./sortPanel.css";
import { parse } from "query-string";
import * as H from "history";

interface ISortPanelProps {
  handleSortChange(sortBy: any): void;
  moviesCount: number;
  location: H.Location;
}

interface ISortPanelState {
  sortBy: string;
}
class SortPanel extends React.Component<ISortPanelProps, ISortPanelState> {
  state: ISortPanelState = {
    sortBy: "date",
  };

  componentDidMount() {
    const query = parse(this.props.location.search) as { sortBy: string };
    let { sortBy } = query;
    sortBy ? this.setState({ sortBy: sortBy }) : (sortBy = "date");
  }

  handleSortParams(value: string) {
    this.setState({ sortBy: value }, () => {
      return this.props.handleSortChange({
        sortBy: value,
      });
    });
  }

  render() {
    const { moviesCount } = this.props;
    return (
      <div className="sort_panel">
        <p className="movies_found">
          <span>{moviesCount}</span> movies found
        </p>
        <div className="sort">
          <span className="sort_by">Sort by</span>
          <button
            name="datesort"
            className={
              this.state.sortBy === "date" ? "sort_date_active" : "sort_date"
            }
            onClick={() => this.handleSortParams("date")}
          >
            release date
          </button>
          <button
            name="ratingsort"
            className={
              this.state.sortBy === "rating"
                ? "sort_rating_active"
                : "sort_rating"
            }
            onClick={() => this.handleSortParams("rating")}
          >
            rating
          </button>
        </div>
      </div>
    );
  }
}

export default SortPanel;
