import React from "react";
import "./NotFoundErrorBlock.css"
import { Link } from "react-router-dom";
import HomePage from "../../pages/homePage";

function NotFoundErrorBlock() {
    return (
        <>
        <Link to="/"><p className="error_return">Return to Home</p></Link>
        <div className="error"><h1>Error 404</h1></div>
        </>
    )
}
export default NotFoundErrorBlock