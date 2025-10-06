import { useDispatch, useSelector } from 'react-redux'
import { card } from '../../utils/srcs'
import { useState, useEffect } from 'react'
import { additem } from '../../redux/slice'

const Itemlist = (props) => {
  const { m, veg, r } = props

  const [itemcards, setitemcards] = useState([])

  const dispatch = useDispatch()
  const read = useSelector((store) => store.cart.items)

  console.log('read' + read)

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
      className="recom flex h-40 border-b-2 pb-8 mt-7  pt-2 pl-3 items-center"
      key={m?.card?.info?.id}
    >
      {console.log(m)}
      <div className="w-10/12">
        <span className="pr-1">
          {m?.card?.info?.itemAttribute?.vegClassifier === 'NONVEG'
            ? '🔴'
            : '🟢'}
        </span>
        <span className="font-semibold text-md ">{m?.card?.info?.name}</span>
        <div className="font-normal text-sm pl-5 pt-2">
          ₹{' '}
          {m?.card?.info?.price
            ? m?.card?.info?.price / 100
            : m?.card?.info?.defaultPrice / 100}
        </div>
        <div
          className="text-sm pr-2  pl-5 
        "
        >
          {m?.card?.info?.description}
        </div>
      </div>
      <div className="w-[120px] flex justify-center ">
        <button
          className="absolute w-[80px] h-[30px] bg-white text-black rounded-lg text-sm items-center flex justify-center m-[100px] shadow-md hover:scale-[0.9] font-bold cursor-pointer "
          onClick={(event) => {
            event.stopPropagation()
            dispatch(additem(m))
          }}
        >
          ADD{' '}
          {read.filter((k) => k?.card?.info?.id === m?.card?.info?.id).length ||
            '+'}
        </button>
        <div>
          <img
            className="rounded-lg h-[120px] w-[100px] object-cover "
            src={
              m?.card?.info?.imageid
                ? card + m?.card?.info?.imageid
                : card + m?.card?.info?.imageId
            }
            alt=""
          />
        </div>
      </div>
    </div>
  ))
}

export default Itemlist
