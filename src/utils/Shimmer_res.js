export const Shimmer_res = () => (
  <div
    className="restuarant w-[1000px] relative left-[280px] shadow-lg top-11 flex-col items-center  flex"
    style={{ fontFamily: "'Montserrat', helvetica, arial, sans-serif" }}
  >
    <div className="content flex flex-col mb-12 relative  w-[700px]  h-[200px]  top-10  bg-slate-100 overflow-hidden ">
      <div className="block w-[550px] h-[60px] bg-white trn rotate-[-60deg] relative top-20 animate-shimmer opacity-60 "></div>

      <div className="name ">
        <h2 className="text-xl font-bold pl-8"></h2>
      </div>

      <div
        className="sub-content flex flex-col relative top-[30px] pl-12
       "
      >
        <div className="rating flex  text-sm">
          <div className="w-4 h-4 mr-1" />
          <span> </span>
          <p className="costfortwo  pb-1 pl-4"></p>
        </div>
        <div className="cuisines pb-1 text-sm"></div>

        <div className="area pb-1 text-sm">
          <p> </p>
        </div>
        <div className="time text-sm"></div>
      </div>
    </div>
    <div className="text-xl font-bold mb-5 mt-12 ">
      <div className="h-5 w-26 bg-slate-100"></div>
    </div>
    <div className="deal-container w-[700px] flex overflow-hidden ">
      <div className="deals flex justify-between my-8">
        <div className="sub-deals w-[200px] h-[50px]  px-6 mx-4 relative  bg-slate-100 ">
          {' '}
          <div className="block w-[350px] h-[60px] bg-white trn rotate-[-60deg] relative top-20 animate-shimmer opacity-60"></div>
        </div>
        <div className="sub-deals w-[200px] h-[50px]  px-6 mx-4 relative  bg-slate-100">
          {' '}
          <div className="block w-[350px] h-[60px] bg-white trn rotate-[-60deg] relative top-20 animate-shimmer opacity-60"></div>
        </div>
        <div className="sub-deals w-[200px] h-[50px]  px-6 mx-4 relative  bg-slate-100">
          {' '}
          <div className="block w-[350px] h-[60px] bg-white trn rotate-[-60deg] relative top-20 animate-shimmer opacity-60 "></div>
        </div>
      </div>
    </div>

    <div className="m-22"></div>

    <div className="deal-heading text-xl font-bold mb-8  bg-slate-100">
      <div></div>
    </div>
    <div className="search pb-7">
      <input
        type="text"
        placeholder=""
        className="border-soild  mr-10 w-[500px] h-10 rounded-lg bg-gray-100"
      />

      <button className="text-l font-bold mb-5 bg-slate-100"></button>
    </div>

    <div className="text-xl font-bold mb-8">
      <h3></h3>
    </div>

    <div className=" w-[900px] overflow-hidden">
      <div className="flex w-max">
        <div
          className="sub-toppick  relative flex
            "
        >
          {' '}
          <div className=" h-[300px] w-[300px] mx-7 bg-slate-100 overflow-hidden">
            {' '}
            <div className="block w-[550px] h-[60px] bg-white trn rotate-[-60deg] relative top-20 animate-shimmer opacity-60 "></div>
          </div>
          <div className=" h-[300px] w-[300px] mx-7 bg-slate-100 overflow-hidden">
            {' '}
            <div className="block w-[550px] h-[60px] bg-white trn rotate-[-60deg] relative top-20 animate-shimmer opacity-60 "></div>
          </div>{' '}
          <div className=" h-[300px] w-[300px] mx-7 bg-slate-100 overflow-hidden">
            {' '}
            <div className="block w-[550px] h-[60px] bg-white trn rotate-[-60deg] relative top-20 animate-shimmer opacity-60 "></div>
          </div>{' '}
          <div className=" h-[300px] w-[300px] mx-7 bg-slate-100 overflow-hidden">
            {' '}
            <div className="block w-[550px] h-[60px] bg-white trn rotate-[-60deg] relative top-20 animate-shimmer opacity-60 "></div>
          </div>
        </div>
      </div>
    </div>

    <div className="forward relative right-[-480px] top-[-170px]">
      {' '}
      <i className="material-icons">arrow_forward_ios</i>
    </div>
    <div className="backward relative right-[460px] top-[-200px]">
      {' '}
      <i className="material-icons">arrow_back_ios</i>
    </div>

    <div className="divider"></div>

    <div className="menu ">
      <div>
        <div className="recom-head h-[70px] w-[800px] shadow-md mb-10 p-5 font-semibold">
          <div className="menu_head w-[800px] ">
            <h3></h3>
          </div>
        </div>
        <div>
          <div className="recom"></div>
        </div>
        <div className="divider"></div>
      </div>
    </div>
  </div>
)
