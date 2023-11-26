import React, { useState } from "react";
import styles from './style.module.css'
import Button from "../button/index";

function Card(props) {

    const [showCard, setShowCard] = useState(true);
    const deleteCard =() => {
        setShowCard(false);
    }

    return (
        
        <div className="container">
         {showCard && (
            <div className="cardItem">
                
                <div className="poster">
                    <img  src={props.poster} className={styles.poster}></img>
                </div>
                <div className={styles ["info"]}>
                    <div className={styles.title} >{props.title}</div>
                    <div className={styles ["raiting"]}>Raitin: {props.raiting}</div>
                </div>
                <Button title="Buy for 10$"/>
                <button onClick={deleteCard}>Delete</button>
            </div>
            )  } 
        </div>
    )
}

export default Card