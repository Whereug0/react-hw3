import React, { useState } from "react";
import styles from './style.module.css'
import Button from "../button/index";


function Card(props) {





    const [showCard, setShowCard] = useState(true);
    const deleteCard =() => {
        setShowCard(false);
    }

    const [likes, setLikes] = useState(0)

    function increment() {
        setLikes(likes + 1)
    }

    function decrement() {
        setLikes(likes - 1)

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
                <p className={styles ["likes"]}>{likes}</p>
                <div className={styles ["btnsBox"]}>
                    <button className={styles ["btnDelete"]} onClick={deleteCard}>Delete</button>
                    <div className={styles ["likeBox"]}>
                        <button className="btnLike" onClick={increment}>like</button>
                        <button className="btnDisLike" onClick={decrement}>dislike</button>
                    </div>
                </div>

            </div>
            )  } 
        </div>
    )
}

export default Card