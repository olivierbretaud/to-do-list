import React, { Component } from 'react';
// import {Route, Switch } from 'react-router'
import AddTodo from './Components/AddTodo';
import VisibleTodoList from './Components/VisibleTodoList';
import Footer from './Components/Footer';
import './styles/css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    );
  }
}

export default App;
