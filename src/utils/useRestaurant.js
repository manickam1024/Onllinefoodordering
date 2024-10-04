import { useState, useEffect } from 'react'
import { menu } from './srcs'

const userestaurant = (resid) => {
  const [resinfo, setresinfo] = useState(null)

  useEffect(() => {
    data()
  }, [])

  async function data() {
    const data = await fetch(
      menu + resid + '&catalog_qa=undefined&submitAction=ENTER'
    )

    const json = await data.json()

    setresinfo(json)
  }

  return resinfo
}

export default userestaurant
