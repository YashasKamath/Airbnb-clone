import React from 'react'

export default function(){
    return(
        <section className='hero'>
            <img src={process.env.PUBLIC_URL + "/Images/images.png"} />
            <h1>Online experiences</h1>
            <p>
                Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </section>
    )
}