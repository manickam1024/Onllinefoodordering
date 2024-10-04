import React from 'react'

export class Mani extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: props.name,
    }
    console.log(' emp inital' + this.state.data)
  }
  componentDidMount() {
    console.log('emp mout' + this.state.data)
  }

  render() {
    return (
      <div>
        {console.log('emp render' + this.state.data)}
        <button
          onClick={() =>
            this.setState((prevstate) => ({
              data: prevstate.data === 'mani' ? 'ramya' : 'mani',
            }))
          }
        >
          click me daddy
        </button>
        <h1>{this.state.data}</h1>
        <h2>full stack devop</h2>
        <h3>experience-3yrs</h3>
      </div>
    )
  }
}
