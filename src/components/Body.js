import { useState } from 'react'
import Card from './Card'
import { Shimmer } from '../utils/Shimmer'
import { Link } from 'react-router-dom'
import data from '../utils/useReslist'
import onlinestatus from '../utils/onlinestatus'
import { is_opened } from '../utils/higher-ord-comp'

const Body = () => {
  const [reslist, filterd, setfilterd] = data()

  const status = onlinestatus()
  const hover = '0.9'
  const Opened = is_opened(<Card />)

  if (status == false) {
    return <h1>opps! you are offline</h1>
  }

  const [v, setv] = useState('')

  if (!reslist.length) {
    return <Shimmer />
  }

  return (
    <div
      className="body overflow-x-hidden z-[0]"
      style={{ fontFamily: "'Montserrat', helvetica, arial, sans-serif" }}
    >
      <div className="search-filter m-9 flex justify-center w-[1200px] ">
        <div className="search-div relative right-44">
          {' '}
          <input
            type="text"
            className="border-soild  mr-10 w-[500px] h-10 rounded-lg bg-gray-100 p-5"
            value={v}
            onChange={(x) => setv(x.target.value)}
          />
          <button
            className="filter "
            onClick={() => {
              const result = reslist.filter((res) =>
                res.info.name.toLowerCase().includes(v.toLowerCase())
              )

              setfilterd(result)
            }}
          >
            search
          </button>
        </div>
        <button
          className=" top-rated "
          onClick={function f() {
            const fil = reslist.filter((res) => res.info.avgRating >= 4.5)
            setfilterd(fil)
          }}
        >
          <i className="material-icons p-3 inline-block">filter_alt</i>
          <h1 className="inline-block relative top-[-5px]">Top rated</h1>
        </button>
      </div>

      <div className="card-container flex flex-wrap  w-11/12 justify-center  relative left-[70px]  shadow-[0_0px_1px_1px_rgba(0,0,0,0.2)] pt-5 pb-5 rounded-2xl ">
        {filterd.map((d) => (
          <Link to={'/restuarants/' + d.info.id} key={d.info.id}>
            {d.info ? ( //to just make the on hover work i did this dummy condition or else the condition is(d.info.aggregatedDiscountInfoV3?.header)
              <Opened resdata={d} key={d.info.id} />
            ) : (
              <Card resdata={d} key={d.info.id} />
            )}
          </Link>
        ))}
      </div>
    </div>
  )
}
export default Body

const sum = toString(123499)
console.log(sum)
