import React from "react"



function Card(props){
    
    let badgeText
    if(props.openspots===0){
        badgeText="SOLD OUT"
    }
    else if (props.location === 'Online'){
        badgeText="ONLINE"
    }
    return(
        
    <div className="card">
        {badgeText && <div className="card-badge">{badgeText}</div>}
        <img src={props.img} alt="" 
    className="card--image" />
    <div className="card--stats">
    <img src="images/star.png" alt="" 
    className="card--star" />
    <span>{props.rating}</span>
    <span>{props.reviewCount} • </span>
    <span>{props.country}</span>
    </div>
    <p>{props.title}</p>
    <p className="price">From {props.price} / person</p>
    </div>
    )
}

export default Card