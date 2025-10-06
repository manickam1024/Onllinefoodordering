import { card } from '../../utils/srcs'

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
    cloudinaryImageId,
  } = resinfo.data.cards[2].card.card.info

  console.log(resinfo.data.cards[2].card.card.info)
  return (
    <div className="content flex flex-col mb-12 relative w-[700px] shadow-lg  h-[250px] top-10 rounded-3xl">
      <div className="name m-5 ">
        <h2 className="text-xl font-bold pl-8 z-[1] relative top-9">{name}</h2>
      </div>

      <div className="sub-content flex flex-col relative pl-12 top-9 ">
        <div className="rating flex text-sm">
          <img src={RATING} className="w-4 h-4 mr-1" alt="Rating" />
          {avgRating} ({totalRatings} ratings)
          <span> </span>
        </div>
        <div className="cuisines pb-1 text-sm">
          <p>{cuisines.join(', ')}</p>
        </div>

        <div className="area pb-1 text-sm">
          <p>Outlet: {areaName}</p>
        </div>
        <div className="time text-sm">Delivery time: {time}</div>
      </div>
      <div className=" absolute  right-0 ">
        <div className="h-[250px] w-[420px] bg-gradient-to-r from-white to to-transparent  absolute left-0 z-0  "></div>

        <img
          src={card + cloudinaryImageId}
          alt=""
          className="h-[250px] w-[370px] object-cover rounded-lg "
        />
      </div>
    </div>
  )
}

export default Summary
