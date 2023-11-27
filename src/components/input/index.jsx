import React, { useState } from "react";
import styles from './style.module.css'


function Input() {
    // const [value, setValue] = useState("")

    const [searchQuery, setSerchQuery] = useState("")

    return (
        <div>
            {/* <h1>{value}</h1> */}
            <div className={styles ["inputBox"]}>
                <input 
                    type="text"
                    value={searchQuery}
                    onChange={event => setSerchQuery(event.target.value)}
                    placeholder="Поиск..."
                />
            </div>
        </div>
    )
}

export default Input