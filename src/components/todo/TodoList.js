import React from 'react'
import {TodoItem} from './TodoItem'

export const TodoList = (props) => {
	return (
     <div className="Todo-List">
      {props.todos.map(todo =><TodoItem key ={todo.id} {...todo}/>)}
       </div>
	)
}

TodoList.propTypes = {
	todos : React.PropTypes.array.isRequired
}