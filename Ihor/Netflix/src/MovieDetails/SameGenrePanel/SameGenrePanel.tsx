import React from "react";

import "./SameGenrePanel.css";

interface ISameGenrePanelProps {
  genre: string;
}

const SameGenrePanel = ({ genre }: ISameGenrePanelProps) => {
  return (
    <div className="same_genre_panel">
      <p className="same_genre_panel_text">Films by {genre} genre</p>
    </div>
  );
};

export default SameGenrePanel;
