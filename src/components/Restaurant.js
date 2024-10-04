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
    <div className="restuarant">
      <div className="content">
        <div className="name">
          <h2>{name}</h2>
        </div>

        <div className="sub-content">
          <div className="rating">
            <img src={RATING} />
            {avgRating}({totalRatings} ratings) <span> </span>
            <p className="costfortwo">{costForTwoMessage}</p>
          </div>
          <div className="cuisines">
            <p>{cuisines.join(',')}</p>
          </div>

          <div className="area">
            <p>outlet: {areaName}</p>
          </div>
          <div className="time">delivarytime: {time}</div>
        </div>
      </div>
      <div className="deal-heading">
        <h2>Deals for u </h2>
      </div>
      <div className="deal-container">
        <div className="deals">
          {' '}
          {offers.map((m) => (
            <div
              className="sub-deals"
              style={{ right: `${pp}px` }}
              key={m.info.offerIds[0]}
            >
              <h4>{m.info.header}</h4>
            </div>
          ))}
        </div>
        <div className="forwards" onClick={forwards}>
          {' '}
          <i className="material-icons">arrow_forward_ios</i>
        </div>
        <div className="backwards" onClick={backwards}>
          {' '}
          <i className="material-icons">arrow_back_ios</i>
        </div>
      </div>

      <div className="deal-heading">
        <h2>Menu </h2>
      </div>
      <div className="search">
        <input type="text" placeholder="search for dishes" />
        <button>click</button>
      </div>

      <div>
        <h2>top pick</h2>
      </div>
      <div>
        <h3>top pick</h3>
      </div>
      {toppicks && (
        <>
          <div className="toppick-container">
            <div className="toppick">
              {toppicks.map((m) => (
                <div
                  className="sub-toppick"
                  style={{ right: `${position}px` }}
                  key={m.bannerId}
                >
                  <img src={img + m.creativeId} alt="" />
                </div>
              ))}
            </div>
            <div className="forward" onClick={forward}>
              {' '}
              <i className="material-icons">arrow_forward_ios</i>
            </div>
            <div className="backward" onClick={backward}>
              {' '}
              <i className="material-icons">arrow_back_ios</i>
            </div>
          </div>

          <div className="divider"></div>
        </>
      )}

      <div className="menu">
        {menu.map((m, index) => (
          <>
            {m.card.card.itemCards && (
              <div key={m.card.card.title || index}>
                <div
                  className="recom-head"
                  onClick={() => {
                    isvisible ? setisvisble(false) : setisvisble(true)
                  }}
                >
                  <div className="menu_head">
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
