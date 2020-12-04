import React from "react"
import "./error-empty-results.styles.scss"

// export  interface IErrorEmptyResultsProps {
//     number_of_films: number
// }


const ErrorEmptyResults:  React.FC = () => (
        <div>
            <div className="error__empty__results">
                <p>No films found</p>
            </div> 
        </div>
)


export default ErrorEmptyResults