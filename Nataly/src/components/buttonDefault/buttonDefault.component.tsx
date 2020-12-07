import React  from "react"
import "./buttonDefault.styles.scss"

interface ButtonProps extends  React.HTMLAttributes<HTMLButtonElement> {
    className: any,
    type: "submit" | "button",
    onClick: (e: React.MouseEvent) => void,
}

const ButtonDefault: React.FC<ButtonProps> = (props) => {

    return (
    <button 
    className={props.className}
    type={props.type}
    onClick={props.onClick}
    // style={}
    >
        {props.children}
    </button>
    )
}


export default ButtonDefault