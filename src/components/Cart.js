import { useSelector } from 'react-redux'
import { card } from '../utils/srcs'

const Cart = () => {
  // Accessing the cart items from the Redux store
  const read = useSelector((store) => store.cart.items)

  return read.map((m) => (
    <div
      className="recom flex overflow-hidden h-40 border-b-2 pb-5 mt-7 pt-2 pl-3 items-center w-6/12 relative left-[400px]"
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
          ₹{' '}
          {m?.card?.info?.price
            ? m?.card?.info?.price / 100
            : m?.card?.info?.defaultPrice / 100}{' '}
        </div>
        <div className="text-sm pr-2">{m?.card?.info?.description}</div>
      </div>
      <div className="w-[120px] flex justify-center ">
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

export default Cart
