import { useEffect, useState, useContext } from 'react'
import { IMG_LOGO } from '../utils/srcs'
import { Link } from 'react-router-dom'
import context from '../utils/context'
import { useSelector } from 'react-redux'
const Header = () => {
  const [s, news] = useState('login')

  const d = useContext(context)
  const read = useSelector((store) => store.cart.items)

  return (
    <div
      className="flex justify-between items-center shadow-sm absoulte top-0 z-[2] bg-white"
      style={{ fontFamily: "'Montserrat', helvetica, arial, sans-serif" }}
    >
      <div className="flex items-center relative left-3">
        {' '}
        <img src={IMG_LOGO} className="logo h-[100px] relative  top-1" />
        <div
          className="name relative  text-xl  top-1 "
          style={{ fontFamily: "'Montserrat', helvetica, arial, sans-serif" }}
        >
          <h1 className="font-bold">food ordering app</h1>
        </div>
      </div>

      <div className="nav-items relative right-140">
        <ul className="flex justify-between m-3 p-4 font-semibold ">
          <li className="px-10">
            <i className="material-icons material-icons relative top-1.5 right-1">
              home
            </i>
            <Link to="/">Home</Link>
          </li>

          <li className="px-10">
            <i className="material-icons material-icons relative top-1.5 right-1">
              arrow_back_ios
            </i>

            <Link to="/about">About us</Link>
          </li>
          <li className="px-10">
            <i className="material-icons material-icons relative top-1.5 right-1">
              {' '}
              shopping_cart
            </i>
            <Link to="/Cart">cart</Link>
            <span className="pl-3 text-orange-950">{read.length}</span>
          </li>

          <li className="pt-[6px] text-blue-600">Welcome {d.username}!</li>
        </ul>
      </div>
    </div>
  )
}

export default Header
