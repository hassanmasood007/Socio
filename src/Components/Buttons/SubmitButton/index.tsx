import { FunctionComponent } from "react";

interface IProps {
    type: string
    name: string
    value : string
    className: string
}

const Button:FunctionComponent<IProps> = ({type,name,value,className}) => {
    return(
        <div >
            <input className={className} type={type} name={name} value={value}></input>

        </div>  
    )
}

export default Button;