import React from "react";
import "./Container.css";
import cat from "./cat.jpg";

const Container = ({children}) => {

    return(
        <div className="style-container container-sm">
            {children}
        </div>
    )
}

export default Container