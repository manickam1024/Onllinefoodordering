export const Shimmer = () => {
  const cards = []
  for (let index = 0; index < 10; index++) {
    cards.push(
      <div className="card w-[280px] h-[237px] overflow-hidden m-6   rounded-xl hover:scale-[0.9]   bg-slate-100 ">
        {' '}
        <div className="block w-[350px] h-[60px] bg-white trn rotate-[-60deg] relative top-20 animate-shimmer "></div>
      </div>
    )
  }

  return (
    <div
      className="body"
      style={{ fontFamily: "'Montserrat', helvetica, arial, sans-serif" }}
    >
      <div className="search-filter m-9 flex justify-center w-[1200px] ">
        <div className="search-div relative right-44">
          {' '}
          <input
            type="text"
            className="border-soild  mr-10 w-[500px] h-10 rounded-lg bg-gray-100"
          />
          <button className="filter ">search</button>
        </div>
        <button className=" top-rated ">
          <i className="material-icons p-3 inline-block">filter_alt</i>
          <h1 className="inline-block relative top-[-5px]">filter</h1>
        </button>
      </div>
      <button className="btn"> </button>

      <div className="card-container flex flex-wrap  w-[1350px] justify-center  relative left-[100px]  shadow-[0_0px_1px_1px_rgba(0,0,0,0.2)] pt-5 pb-5 rounded-2xl ">
        {cards}
      </div>
    </div>
  )
}
