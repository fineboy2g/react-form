import React, { Component } from 'react'

 class ManageState extends Component {
      
  constructor(){

    super();
        this.state={
            name:"strongman",
            age:"40",
            power:"2000",
        };
    
  };

  changedata =()=>{
      this.setState({
          name:"superman",
          age:"50",
          power:"5000"
      })


  };


  render() {
    return (
      <div>
        <h1>Managing State in Class Components</h1>

        <h2>Name:{this.state.name}</h2>
        <h2>Age:{this.state.age}</h2>
        <h2>Power:{this.state.power}</h2>

          <button onClick={this.changedata}>Change Data</button>
      </div>
    )
  }
}

export default ManageState
