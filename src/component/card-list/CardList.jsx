import React from 'react'
import Card from '../card/card'
import './card-list.styles.css'

const CardList = (props) => {
    

    let display = <li> Unloaded </li>
    if(props.champions != null){
        display = Object.keys(props.champions).map((each, index)=>{
            return (
                <Card key={index} champion={props.champions[each]}>
                    {each}
                </Card>
            )
        })
    }
    return(
        <div className="card-list">
            {display}
        </div>
    )
}
export default CardList;