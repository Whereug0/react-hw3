import React from "react";
import styles from './style.module.css'


function Button(props) {
    return (
        <div className={styles ["btnBox"]}>
            <button className="btnAdd">{props.title}</button>
        </div>
    )
}


export default Button

