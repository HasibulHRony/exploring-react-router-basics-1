import React from 'react'

export default function Pricing({eachInfo}) {
    const { planName, duration, price, features } = eachInfo;
    console.log(planName, duration, price, features)
  return (
    <div>
        <p>{planName}</p>
        <small>{price}</small>
        <p>{duration}</p>
        <ul>
            {
                features.map((feature, index)=><li key={index}>{feature}</li>)
            }
        </ul>
    </div>
  )
}
