import Shimmer from './Shimmer'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import userestaurant from '../utils/useRestaurant'
import { RATING } from '../utils/srcs'

const Restaurants = () => {
  const [isvisible, setisvisble] = useState(false)
  const [position, setposition] = useState(0)
  const [pp, setp] = useState(0)

  console.log(pp)

  const resid = useParams().resid

  const resinfo = userestaurant(resid)

  if (!resinfo) {
    return <Shimmer />
  }

  const {
    name,
    areaName,
    costForTwoMessage,
    avgRating,
    totalRatings,
    cuisines,
  } = resinfo.data.cards[2].card.card.info

  const time = resinfo.data.cards[2].card.card.info.sla.slaString
  const offers =
    resinfo.data.cards[3].card.card.gridElements.infoWithStyle.offers

  const toppicks =
    resinfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
      .carousel

  const menu = resinfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards
  const img =
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/'

  function forward() {
    setposition((prev) => prev + 150)
  }

  function backward() {
    setposition((prev) => prev - 150)
  }
  function forwards() {
    {
      setp((prev) => prev + 100)
    }
  }

  function backwards() {
    setp((prev) => prev - 100)
  }

  return (
    <div
      className="restuarant w-[1000px] relative left-[280px] shadow-lg top-11 flex-col items-center  flex"
      style={{ fontFamily: "'Montserrat', helvetica, arial, sans-serif" }}
    >
      <div className="content flex flex-col mb-12 relative  w-[700px] shadow-md h-[200px]  top-10">
        <div className="name ">
          <h2 className="text-xl font-bold pl-8">{name}</h2>
        </div>

        <div
          className="sub-content flex flex-col relative top-[30px] pl-12
         "
        >
          <div className="rating flex  text-sm">
            <img src={RATING} className="w-4 h-4 mr-1" />
            {avgRating}({totalRatings} ratings) <span> </span>
            <p className="costfortwo  pb-1 pl-4">{costForTwoMessage}</p>
          </div>
          <div className="cuisines pb-1 text-sm">
            <p>{cuisines.join(',')}</p>
          </div>

          <div className="area pb-1 text-sm">
            <p>outlet: {areaName}</p>
          </div>
          <div className="time text-sm">delivarytime: {time}</div>
        </div>
      </div>
      <div className="text-xl font-bold mb-5 mt-12 ">
        <h2>Deals for u </h2>
      </div>
      <div className="deal-container w-[700px] flex overflow-hidden ">
        <div className="deals flex justify-between my-8">
          {' '}
          {offers.map((m) => (
            <div
              className="sub-deals w-[200px] h-[50px] shadow-md px-6 mx-4 relative "
              style={{ right: `${pp}px` }}
              key={m.info.offerIds[0]}
            >
              <h4>{m.info.header}</h4>
            </div>
          ))}
        </div>
      </div>
      <div
        className="forwards relative right-[-400px] top-[-75px]"
        onClick={forwards}
      >
        {' '}
        <i className="material-icons">arrow_forward_ios</i>
      </div>
      <div
        className="backwards relative right-[400px] top-[-105px]"
        onClick={backwards}
      >
        {' '}
        <i className="material-icons">arrow_back_ios</i>
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
      {toppicks && (
        <>
          <div className=" w-[900px] overflow-hidden">
            <div className="flex w-max">
              {' '}
              {toppicks.map((m) => (
                <div
                  className="sub-toppick  
              "
                  style={{ right: `${position}px` }}
                  key={m.bannerId}
                >
                  {' '}
                  <img
                    src={img + m.creativeId}
                    alt=""
                    className=" h-[300px] w-[300px] mx-7  "
                  />
                </div>
              ))}
            </div>
          </div>

          <div
            className="forward relative right-[-480px] top-[-170px]"
            onClick={forward}
          >
            {' '}
            <i className="material-icons">arrow_forward_ios</i>
          </div>
          <div
            className="backward relative right-[460px] top-[-200px]"
            onClick={backward}
          >
            {' '}
            <i className="material-icons">arrow_back_ios</i>
          </div>

          <div className="divider"></div>
        </>
      )}

      <div className="menu ">
        {menu.map((m, index) => (
          <>
            {m.card.card.itemCards && (
              <div key={m.card.card.title || index}>
                <div
                  className="recom-head h-[70px] w-[800px] shadow-md mb-10 p-5 font-semibold"
                  onClick={() => {
                    isvisible ? setisvisble(false) : setisvisble(true)
                  }}
                >
                  <div className="menu_head w-[800px]">
                    <h3>{m.card.card.title}</h3>
                  </div>
                </div>
                <div>
                  {isvisible &&
                    m.card.card.itemCards.map((m) => (
                      <div className="recom" key={m.card.info.id}>
                        {m.card.info.name}
                      </div>
                    ))}
                </div>
                <div className="divider"></div>
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  )
}

export default Restaurants
