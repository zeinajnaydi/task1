import React from 'react'

export const TodoInput = (props) => {
	return (
  <div className="Todo-Input">
 

    <div><input type="checkbox" onClick={props.toggle}/></div>

     <input type="text" value={props.inputs}  style={{color: 'blue'}}/>
  </div>
	)
}



   