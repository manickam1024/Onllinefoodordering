import Card from '../components/Card'

export const is_opened = () => {
  const OpenedComponent = (props) => {
    const header = props?.resdata?.info?.aggregatedDiscountInfoV3?.header
    const subheader = props?.resdata?.info?.aggregatedDiscountInfoV3?.subHeader // inside return we cant declare a variable because return is used to immediately exit a function and give back a value.

    return (
      <div
        className="card w-[280px] h-[237px] overflow-hidden m-6  rounded-xl   shadow-[0_0px_1px_1px_rgba(0,0,0,0.2)]  hover:scale-[0.96]  "
        style={{
          fontFamily: "'Montserrat', helvetica, arial, sans-serif",
        }}
      >
        {' '}
        <label className=" absolute  bg-black text-white text-xs z-0 px-2 rounded-r-lg">
          {header}
          {subheader}
        </label>
        <Card {...props} />
      </div>
    )
  }

  return OpenedComponent
}
