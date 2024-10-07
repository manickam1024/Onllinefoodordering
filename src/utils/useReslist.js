import { useEffect, useState } from 'react'

const data = () => {
  const [reslist, setreslist] = useState([]) //soo here we was passing our mock data to the reslist as inital state soo if i click on the button the reslist is filterd and  at card-container  the resslist var is used
  const [filterd, setfilterd] = useState([])

  useEffect(() => {
    after()
  }, [])

  async function after() {
    try {
      const newdata = await fetch(
        'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
      )
      const json = await newdata.json()

      setreslist(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      )
      setfilterd(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      )
    } catch (e) {
      console.log('failed to fetch')
    }
  }

  return [reslist, filterd, setfilterd]
}

export default data
