import React, { Suspense } from 'react'
import PricingCart from './PricingCart'

export default function PricingInfo() {
    const pricingInfoPromise = fetch("pricing.json").then(res=>res.json())
    return (
        <div>
            <Suspense fallback={<p>Loading....</p>}>
                <PricingCart pricingInfoPromise={pricingInfoPromise}></PricingCart>
            </Suspense>
        </div>
    )
}
