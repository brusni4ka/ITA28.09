import React from "react";
import "./SortByGenrePanel.css";

interface ISortByGenrePanelProps {
  genre: string
}

function SortByGenrePanel({genre}:ISortByGenrePanelProps) {
  return <div className="sort-panel">Sort by {genre}</div>;
}

export default SortByGenrePanel;
