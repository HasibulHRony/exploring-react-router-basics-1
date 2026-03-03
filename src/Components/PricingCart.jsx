import React, { use } from 'react'
import Pricing from './pricing'

export default function PricingCart({ pricingInfoPromise }) {
    const pricingInfo = use(pricingInfoPromise)
    return (
        <div>
            {
                pricingInfo.map((eachInfo, index) => <Pricing key={index} eachInfo={eachInfo}></Pricing>)
            }
        </div>
    )
}
