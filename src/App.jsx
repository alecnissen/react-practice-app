// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

// import Student from "./Student"

// import Classprops from "./Classprops" 

// import Functionprop from "./Functionprop"

// function App() {

  // return (
  //   <>
  //   <Student name="spongebob" age={30} isStudent={true}> </Student>
  //   <Student name="Patrick" age={42} isStudent={false} > </Student>
  //   <Student name="squidward" age={50} isStudent={false}></Student>
  //   <Student name="sandy" age={27} isStudent={true}></Student>
  //   <Student></Student>
  //   </>
  // )
// return ( 
//   <div> 
//   <Functionprop name="Alec" place="placeA" age="29"> </Functionprop>
//   </div>
// )

// }

// export default App 

import './App.css'
import React from 'react';
import NewComp from './Components/NewComp';

class App extends React.Component { 
  styles = { 
    fontStyle: 'bold',
    color: 'teal'
  };
  render() { 
    return ( 
      <div className='App'> 
      <h1 style={this.styles}>Welcome</h1>
      <NewComp></NewComp>
      </div>
    );
  }
}
 
export default App;