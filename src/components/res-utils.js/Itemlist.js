import { card } from '../../utils/srcs'
import { useState, useEffect } from 'react'

const Itemlist = (props) => {
  const { m, veg } = props

  const [itemcards, setitemcards] = useState([])

  useEffect(() => {
    const vegfilter = m?.card?.card?.itemCards?.filter((f) => {
      return f?.card?.info?.itemAttribute?.vegClassifier === 'VEG'
    })

    const nonvegfilter = m?.card?.card?.itemCards?.filter((f) => {
      return f?.card?.info?.itemAttribute?.vegClassifier === 'NONVEG'
    })

    setitemcards(veg ? vegfilter : nonvegfilter)
  }, [veg, m])

  return itemcards.map((m) => (
    <div
      className="recom flex overflow-hidden h-40 border-b-2 pb-10 mt-7 pt-10 items-center"
      key={m?.card?.info?.id}
    >
      <div className="w-10/12">
        <div>
          {m?.card?.info?.itemAttribute?.vegClassifier === 'NONVEG'
            ? '🔴'
            : '🟢'}
        </div>
        <div className="font-semibold text-md">{m?.card?.info?.name}</div>
        <div className="font-normal text-sm">
          ₹ {m?.card?.info?.price / 100}
        </div>
        <div className="text-sm">{m?.card?.info?.description}</div>
      </div>
      <div className="w-[120px]">
        <img
          className="rounded-lg"
          src={
            m?.card?.info?.imageid
              ? card + m?.card?.info?.imageid
              : card + m?.card?.info?.imageId
          }
          alt=""
        />
      </div>
    </div>
  ))
}

export default Itemlist
