import React from "react";
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
  Date = "release date",
  Rating = "rating",
}

class SortPanel extends React.Component<ISortPanelProps, ISortPanelState> {
  state = {
    sortBy: SortBy.Date,
  };

  sortByDate = () => {
    this.setState({
      sortBy: SortBy.Date,
    });
    this.props.handlerSortChange("release date");
  };
  sortByRate = () => {
    this.setState({
      sortBy: SortBy.Rating,
    });
    this.props.handlerSortChange("rating");
  };
  componentDidMount() {
    const querySrch = parse(this.props.location.search) as { sortBy: string };
    console.log(querySrch);

    const { sortBy } = querySrch;
    if (sortBy) {
      if (sortBy === "release date") {
        this.setState({ sortBy: SortBy.Date });
      } else {
        this.setState({ sortBy: SortBy.Rating });
      }
    }
  }

  render() {
    const { moviesLength } = this.props;
    return (
      <div className="sort-panel">
        <div className="amount">{moviesLength} movies found</div>
        <div className="sort">
          <p>Sort by</p>
          <Button
            content={"release date"}
            styleClass={this.state.sortBy === SortBy.Date ? "on" : "off"}
            handler={this.sortByDate}
          />
          <Button
            content={"rating"}
            styleClass={this.state.sortBy === SortBy.Rating ? "on" : "off"}
            handler={this.sortByRate}
          />
        </div>
      </div>
    );
  }
}

export default SortPanel;
