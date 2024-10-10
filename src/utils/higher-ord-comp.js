import Card from '../components/Card'

export const is_opened = () => {
  const OpenedComponent = (props) => {
    const header = props.resdata.info.aggregatedDiscountInfoV3?.header
    const subheader = props.resdata.info.aggregatedDiscountInfoV3?.subHeader // inside return we cant declare a variable because return is used to immediately exit a function and give back a value.
    const hover = '0'

    return (
      <div>
        <div>
          <div className="flex flex-wrap hover:scale-[0.9]">
            {' '}
            <label className=" absolute ml-6 mt-6 bg-black text-white text-sm z-0">
              {header}
              {subheader}
            </label>
            <Card {...props} hover={hover} />
          </div>
        </div>
      </div>
    )
  }

  return OpenedComponent
}
