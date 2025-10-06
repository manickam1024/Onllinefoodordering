import Itemlist from './Itemlist'

const Visibility = (props) => {
  const { m, veg, isvisible, showindex } = props

  function Handle() {
    showindex()
  }

  return (
    <div>
      {' '}
      {m.card.card.itemCards && (
        <>
          <div
            className="recom-head h-[auto] w-[840px] shadow-md mb-10 p-5 cursor-pointer sh"
            onClick={Handle}
          >
            <span className=" font-semibold  ">{m.card?.card?.title}</span>
            <div className="recom-head h-[auto] w-[800px]  cursor-pointer ">
              {' '}
              {isvisible && <Itemlist m={m} veg={veg} />}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Visibility
