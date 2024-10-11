import { useState } from 'react'

const Offers = (props) => {
  const { resinfo } = props
  const [pp, setp] = useState(0)

  const offers =
    resinfo.data.cards[3].card.card.gridElements.infoWithStyle.offers

  function forwards() {
    {
      setp((prev) => prev + 100)
    }
  }

  function backwards() {
    setp((prev) => prev - 100)
  }
  return (
    <>
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
        className="forwards relative right-[-760px] top-[-75px]"
        onClick={forwards}
      >
        {' '}
        <i className="material-icons">arrow_forward_ios</i>
      </div>
      <div
        className="backwards relative right-[80px] top-[-105px]"
        onClick={backwards}
      >
        {' '}
        <i className="material-icons">arrow_back_ios</i>
      </div>
    </>
  )
}

export default Offers
