import React from "react";
import Card from "./Card.jsx";
import data from "../data/data.js";

const list = data.map(item=> <Card key={item.id} item={item} />); 

const CardContainer = () => {
    return (
        <section className='card-container'>
            {list}
        </section>
    )
}


export default CardContainer;