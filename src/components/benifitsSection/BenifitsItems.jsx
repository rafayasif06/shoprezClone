import React from 'react'
import  Brands from "../../assets/benifitsSection/Brands.svg"
import FreeDelivery from "../../assets/benifitsSection/FreeDelivery.svg"
import Guarantee from "../../assets/benifitsSection/Guarantee.svg"
import RatePaying from "../../assets/benifitsSection/RatePaying.svg"
import Payment from "../../assets/benifitsSection/Payment.svg"

export const benifitsItemsData=[
  {
    svg: Guarantee,
    line1:"Guarantee",
    line2:"24 Months",
  },
  {
    svg: RatePaying,
    line1:"Rate Paying",
    line2:"4 - 12 Months",
  },
  {
    svg: Payment,
    line1:"Payments",
    line2:"Secured",
  },
  {
    svg: FreeDelivery,
    line1:"Free Delivery",
    line2:"from $100",
  },
  {
    svg: Brands,
    line1:"Brands",
    line2:"Top Brands",
  },
];




const BenifitsItems = () => {
  return (
    <div>BenifitsItems</div>
  )
}

export default BenifitsItems