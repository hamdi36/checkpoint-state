import React, { Component } from 'react';
import './App.css';
import myphoto from './myphoto.png';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fullName: 'Hamdi ben jemaa',
      bio: 'I am a full stack developer',
      imgSrc: myphoto,
      profession: 'student',
      isVisible: false,
      interval: null,
      timer: 0,
    };
  }
  componentDidMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({ timer: this.state.timer + 1 })
      }, 1000)

    })

  }


  componentWillUnmount() {
    clearInterval(this.state.intervall);
  }


  toggleVisibility = () => { this.setState({ isVisible: !this.state.isVisible }) }


  render() {
    return (
      <div className="App">
        <button style={{ backgroundColor: '#008CBA', color: 'white', height: 30, width: 150 }} onClick={() => this.toggleVisibility()}>{this.state.isVisible ? 'hide' : 'show'} my profile ! </button>
        {this.state.isVisible &&
          <div className="profile">
            <h1 style={{color:"red" , fontFamily:"serif"}} >FullName : {this.state.fullName}</h1>
            <br />
            <img src={this.state.imgSrc} height='200px' width='200px' />
            <br />
            <h2>Bio : {this.state.bio}</h2>
            <br />
            <h2>Profession : {this.state.profession} </h2>
            <br />
            <span> {this.state.timer} </span>
          </div>}

      </div>
    )
  }
}

