import React from 'react'

export default function Card({img,rating,reviewCount,price,title,country,openSpots}){
    let status
    if(!openSpots) status="SOLD OUT"
    else status="ONLINE"
    return(
        <div className='card'>
            <div className='imgHolder'>
                <img src={`/Images/${img}`} className='card--img'/>
                <rect>{status}</rect>
            </div>
            <div className='stats'>
                <img src={process.env.PUBLIC_URL + "/Images/star.png"}/>
                <span> {rating}</span>
                <span className='card--grey'> ({reviewCount}) </span>
                <span className='card--grey'> &middot;{country}</span>
            </div>
            <p className='card--title'>{title}</p>
            <p className='card--price'><b>From ${price}</b>/ person</p>
        </div>
    )
}