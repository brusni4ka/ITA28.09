import React from "react";
import "./Loader.css";



const NoMoviesFound = ({ loading }: { loading: boolean }) => (
    <>
    {loading &&(
        <div className="loader">
            <p>Loading...</p>
        </div>)
    }
    </>
    
)
    


export default NoMoviesFound;

