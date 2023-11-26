import React from "react";
import styles from './style.module.css'


function Input() {
    return (
        <div className={styles ["inputBox"]}>
            <input type="text" />
        </div>
    )
}

export default Input