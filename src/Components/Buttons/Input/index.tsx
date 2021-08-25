import { FunctionComponent } from "react";
import classes from "./index.module.css"

interface IProps {
    type: string
    placeholder: string
    name: string
}

const Input:FunctionComponent<IProps> = ({type,placeholder,name}) => {
    return(
        <div className={classes.box}>
            <input type={type} placeholder={placeholder} name={name} required />
        </div>  
    )
}

export default Input;