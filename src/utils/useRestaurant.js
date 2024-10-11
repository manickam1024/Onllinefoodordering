import React, { useState, useEffect } from 'react'
import { menu } from './srcs'

const useRestaurant = (resid) => {
  const [resInfo, setResInfo] = useState(null)

  useEffect(() => {
    if (resid) {
      fetchData()
    }
  }, [resid]) // Add resid as a dependency

  async function fetchData() {
    try {
      const response = await fetch(
        `${menu}${resid}&catalog_qa=undefined&submitAction=ENTER`
      )
      const json = await response.json()

      setResInfo(json)
    } catch (error) {
      console.error('Error fetching data: ', error)
    }
  }

  return resInfo
}

export default useRestaurant
