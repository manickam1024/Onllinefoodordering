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
            className="recom-head h-[auto] w-[800px] shadow-md mb-10 p-5 cursor-pointer"
            onClick={Handle}
          >
            <span className=" font-semibold pb-3">{m.card?.card?.title}</span>
            {isvisible && <Itemlist m={m} veg={veg} />}
          </div>
        </>
      )}
    </div>
  )
}

export default Visibility
