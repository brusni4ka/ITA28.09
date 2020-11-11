import React from "react";
import "./index.scss";

const Loader = ({ isLoading }: { isLoading: boolean }) => (
  <>
    {isLoading && (
      <div className="loader">
        <p>Loading...</p>
      </div>
    )}
  </>
);

export default Loader;
