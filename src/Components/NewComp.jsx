import React, { Component } from 'react'
import bellA from "./BellA.png"
import bellB from "./BellB.png"

export class NewComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "Subscribe to Simplilearn",
         sub: "Subscribe",
         imageURL: bellA
      };
    } 
    styles = { 
        fontStyle: 'italic',
        color: 'purple'
      };

    Buttonchange = () => { 
        this.setState({
            message: "Hit the bell icon to never miss an update",
            sub: "Subscribed"
        })
    } 

    imageChange = () => { 
        this.setState({
            imageURL: bellB,
            message: "Thank you! Happy reacting!"
        })
    }
    
  render() {
    return (
      <div className='App'>
     <h3 style={this.styles}>{this.state.message}</h3>
     <button onClick={this.Buttonchange}>{this.state.sub}</button>
     <p /> 
     <img style ={{width: "30px", height: "30px"}}src={this.state.imageURL} alt="" 
     onClick={this.imageChange}
     />
      </div>
    )
  }
}

export default NewComp
