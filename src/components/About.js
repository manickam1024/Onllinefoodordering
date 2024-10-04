import { Mani } from './Employee'

import React from 'react'
class About extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      userInfo: {
        name: 'dummy',
        bio: 'xyz',
      },
    }
  }

  async componentDidMount() {
    const api = await fetch(' https://api.github.com/users/manickam1024')
    const json = await api.json()
    setTimeout(() => {
      console.log('hello')
    }, 1000)

    this.setState({ userInfo: json })
  }
  render() {
    return (
      <div>
        <div>
          <h1>About Us</h1>
          <p>
            React is a food delivery app built using React.js and Material-UI.
            It provides a list of restaurants, their menus, and customer
            reviews.
          </p>
        </div>

        <div>
          {/* <Mani name={'mani'} />
          <Mani name={'ramya'} /> */}

          <div> {this.state.userInfo.name}</div>
          <div> {this.state.userInfo.bio}</div>
        </div>
      </div>
    )
  }
}

export default About
