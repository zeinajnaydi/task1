import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoForm} from './components/todo'
import {addTodo,generateId,addInput} from './lib/todoHelpers'

class App extends React.Component {
 state = {
    todos: [
    {id:1,name :'learn php',isComplete:true},
     {id:2,name :'learn java',isComplete:false},
      {id:3,name :'learn vb',isComplete:false}
    ],
   checkboxState: false,
     
  
    currentTodo :'',
    inputs :'',

    //checkbox
   
  }



   

    
    handleSubmit = (evt)=>{
     
    evt.preventDefault()
  
      const newId = generateId()
      const newTodo = {id :newId, name :this.state.currentTodo,isComplete:false}
     const updatedTodos = addTodo(this.state.todos,newTodo)

  // const newInput = {myInput :this.state.currentTodo}
  // const updatedInput = addInput(newInput)

   this.setState ({
     todos :updatedTodos,
     currentTodo:'',

     inputs:this.state.currentTodo
    
   })
    }

    handleInputChange= (evt)=>{
    this.setState({
    currentTodo :evt.target.value
    })
    }

    //checkboox
    onSubmit = (evt)=>{
    const checkedOrNot = [];
    evt.preventDefault();
  }
  toggle = (evt)=>{
    this.setState({
      checkboxState: !this.state.checkboxState
    });
  }



  render() {

//checkbox
const checkbox = (<span><input type="checkbox" onClick={this.toggle}/></span>);


 const checkedOrNot = [];

 checkedOrNot.push(<p key={checkedOrNot.toString()} >{
         
         this.state.checkboxState ? 
          (
       <input  value={this.state.inputs}  style={{color: 'red'}}   />
      ) : (
       <input  value={this.state.inputs}   />
      ) }</p>);


    return (
  <div>
  
  <div>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
      <div className="Todo-App">
      <TodoForm  handleInputChange = {this.handleInputChange}
      currentTodo = {this.state.currentTodo}
      handleSubmit = {this.handleSubmit}/>
     
      
    </div>
    
        
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          {checkbox}
         
        
        </form>
        {checkedOrNot}
      </div>
       </div>
</div>
    </div>
    );
  }
}

export default App;
