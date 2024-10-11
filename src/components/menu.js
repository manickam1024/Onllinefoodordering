import Visibility from './res-utils.js/Visibility'
import { useState } from 'react'
const Menu = (props) => {
  const { resinfo, veg } = props
  const [showindex, setshowindex] = useState(null)
  const menu = resinfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards
  return (
    <div className="menu ">
      {menu.map((m, index) => {
        return (
          <Visibility
            m={m}
            veg={veg}
            isvisible={index === showindex ? true : false}
            showindex={() => {
              setshowindex(index == showindex ? 0 : index)
            }}
            key={index}
          />
        )
      })}
    </div>
  )
}

export default Menu
