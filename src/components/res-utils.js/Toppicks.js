import { useState } from 'react'

const Toppicks = (props) => {
  const [position, setposition] = useState(0)

  const { resinfo } = props

  const toppicks =
    resinfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
      .carousel

  const img =
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/'

  function forward() {
    setposition((prev) => prev + 150)
  }

  function backward() {
    setposition((prev) => prev - 150)
  }

  return (
    <>
      <div className=" w-[900px] overflow-hidden">
        <div className="flex w-max">
          {' '}
          {toppicks.map((m) => (
            <div
              className="sub-toppick  relative
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
  )
}
export default Toppicks
