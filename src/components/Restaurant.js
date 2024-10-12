import { Shimmer_res } from '../utils/Shimmer_res'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import userestaurant from '../utils/useRestaurant'
import Toppicks from './res-utils.js/Toppicks'
import Offers from './res-utils.js/Offers'
import Summary from './res-utils.js/Res-summary'
import Menu from './menu'

import Itemlist from './res-utils.js/Itemlist'
const Restaurants = () => {
  const resid = useParams().resid
  const [veg, setveg] = useState(true)

  const resinfo = userestaurant(resid)

  if (!resinfo) {
    return <Shimmer_res />
  }

  const toppicks =
    resinfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
      .carousel

  return (
    <div>
      <div
        className="restaurant w-[1000px] relative left-[280px] shadow-lg top-11 flex-col items-center flex overflow-x-hidden"
        style={{ fontFamily: "'Montserrat', helvetica, arial, sans-serif" }}
      >
        <Summary resinfo={resinfo} />
        <div className="text-xl font-bold mb-5 mt-12 ">
          <h2>Deals for u </h2>
        </div>

        <div>
          {' '}
          <Offers resinfo={resinfo} />
        </div>

        <div className="deal-heading text-xl font-bold mb-8 ">
          <h2>Menu </h2>
        </div>
        <div className="search pb-7">
          <input
            type="text"
            placeholder="search for dishes"
            className="border-soild  mr-10 w-[500px] h-10 rounded-lg bg-gray-100"
          />
          <button className="text-l font-bold mb-5">Search</button>
        </div>

        <div className="text-xl font-bold mb-8">
          <h3>top pick</h3>
        </div>
        {toppicks && <Toppicks resinfo={resinfo} />}

        <div className="flex w-2/12 justify-between">
          <div className="flex justify-between w-16 ">
            {' '}
            <input
              type="radio"
              className=" size-6 accent-green-600"
              onClick={() => setveg(true)}
              name="btn"
            />
            veg
          </div>
          <div className="flex justify-between w-[90px] ">
            <input
              type="radio"
              className=" size-6 accent-red-500 mr-2"
              name="btn"
              onClick={() => setveg(false)}
            />{' '}
            non veg
          </div>
        </div>
        <div className="menu">
          <Menu resinfo={resinfo} veg={veg} />
        </div>
      </div>
    </div>
  )
}

export default Restaurants
