import { useState } from 'react'
import Restaurants from '../Restaurant'

const Summary = (props) => {
  const { resinfo } = props
  const RATING =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR94RDNk0qy32zVqAkTeeSnn32U8rLoCL2zO5iGceJYT29Dgcrm5fDCgx78kRz_DgtX2AI&usqp=CAU'

  const time = resinfo.data.cards[2].card.card.info.sla.slaString

  const {
    name,
    areaName,
    costForTwoMessage,
    avgRating,
    totalRatings,
    cuisines,
  } = resinfo.data.cards[2].card.card.info

  return (
    <div className="content flex flex-col mb-12 relative w-[700px] shadow-md h-[200px] top-10">
      <div className="name">
        <h2 className="text-xl font-bold pl-8">{name}</h2>
      </div>

      <div className="sub-content flex flex-col relative top-[30px] pl-12">
        <div className="rating flex text-sm">
          <img src={RATING} className="w-4 h-4 mr-1" alt="Rating" />
          {avgRating} ({totalRatings} ratings)
          <span> </span>
          <p className="costfortwo pb-1 pl-4">{costForTwoMessage}</p>
        </div>
        <div className="cuisines pb-1 text-sm">
          <p>{cuisines.join(', ')}</p>
        </div>

        <div className="area pb-1 text-sm">
          <p>Outlet: {areaName}</p>
        </div>
        <div className="time text-sm">Delivery time: {time}</div>
      </div>
    </div>
  )
}

export default Summary
