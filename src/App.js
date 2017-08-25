import React, { Component } from 'react';
import './App.css';
import List from './components/List'
import AddTodo from './components/AddTodo'
import Hello from './components/Hello'

class App extends Component {
  
  constructor(props){
    super(props)

    this.state = {
      todos: []

    }

    this.addTodo = this.addTodo.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
  }

  addTodo(text){
    console.log(text)

    const todo = {
      id: Math.random(),
      text
    }

    this.state.todos.push(todo)

    this.setState({todos: this.state.todos})
  }

  deleteTodo(id){
    console.log(id)

    const todos = this.state.todos.filter(todo => todo.id !== id)

    this.setState({todos})

  }

  render() {
    
    return (
      <div className="App">

      <Hello />
      <AddTodo addTodo={this.addTodo} />
      <List deleteTodo={this.deleteTodo} todos={this.state.todos} />
        
      </div>
    );
  }
}

export default App;
