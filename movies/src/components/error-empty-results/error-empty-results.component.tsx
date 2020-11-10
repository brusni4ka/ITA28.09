import React from "react"
import "./error-empty-results.styles.scss"

import {IErrorEmptyResultsProps} from "../../interfaces/interfaces"


const ErrorEmptyResults:  React.FC<IErrorEmptyResultsProps> = () => (
        <div>
            <div className="error__empty__results">
                <p>No films found</p>
            </div> 
        </div>
)


export default ErrorEmptyResults