import React from 'react'
import '../card/card.css'

const Card = (props) => {
    return(
        <div className="card-container">
            <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${props.champion.id}_0.jpg`}/>
            <h3>
                {props.champion.name}
            </h3>
        </div>
    )
}
export default Card;