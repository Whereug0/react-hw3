import React, { useState } from "react";
import styles from './style.module.css'


function Input() {
    // const [value, setValue] = useState("")

    

    return (
        <div>
            {/* <h1>{value}</h1> */}
            <div className={styles ["inputBox"]}>
                <input 
                    type="text"
            
                    placeholder="Поиск..."
                />
            </div>
        </div>
    )
}

export default Input