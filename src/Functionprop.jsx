import React from 'react' 

function Functionprop(props) { 
    return (
    <> 
    <h3>This is functional component!</h3>
    <h3>Hello {props.name} from {props.place}, I am {props.age} years old! </h3>
    </>
    ) 
} 

export default Functionprop