import React from "react";
import "./sortPanel.css";
import { parse } from "query-string";
import * as H from "history";

interface ISortPanelProps {
  handleSortChange(sortBy: string): void;
  moviesCount: number;
  location: H.Location;
}

interface ISortPanelState {
  sortBy: IsortBy;
}
enum IsortBy {
  date = "release_date",
  rating = "vote_average",
}
class SortPanel extends React.Component<ISortPanelProps, ISortPanelState> {
  state: ISortPanelState = {
    sortBy: IsortBy.date,
  };

  componentDidMount() {
    const query = parse(this.props.location.search) as { sortBy: string };
    let { sortBy } = query;
    if (sortBy) {
      if (sortBy === IsortBy.date) {
        this.setState({ sortBy: IsortBy.date });
      } else {
        this.setState({ sortBy: IsortBy.rating });
      }
    } else {
      this.setState({ sortBy: IsortBy.date });
    }
  }

  handleSortParams = (value: IsortBy) => {
    this.setState({ sortBy: value }, () => {
      this.props.handleSortChange(this.state.sortBy);
    });
  };

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
              this.state.sortBy === IsortBy.date
                ? "sort_date_active"
                : "sort_date"
            }
            onClick={() => this.handleSortParams(IsortBy.date)}
          >
            release date
          </button>
          <button
            name="ratingsort"
            className={
              this.state.sortBy === IsortBy.rating
                ? "sort_rating_active"
                : "sort_rating"
            }
            onClick={() => this.handleSortParams(IsortBy.rating)}
          >
            rating
          </button>
        </div>
      </div>
    );
  }
}

export default SortPanel;
