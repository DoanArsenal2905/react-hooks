import React, { useState } from 'react';
import './App.scss';
import ColorBox from './components/ColorBox';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todoList, setTodoList] = useState([
    {id: 1, title: 'Doan Arsenal'},
    {id: 2, title: 'Thu Huyen'},
    {id: 3, title: 'Ahahahaa'}
  ]);

  const handleTodoClick = (todo) => {
    console.log(todo);
    const index = todoList.findIndex(x => x.id === todo.id);
    if (index < 0) return;
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };

  const handleTodoFormSubmit = formValues => {
    console.log('Form Submit', formValues);
    const newTodo = {
      id: todoList.length + 1, //dung tam thoi, se co truong hop gap loi
      ...formValues
    };
    const newTodoList = [...todoList];
    newTodoList.push(newTodo)
    setTodoList(newTodoList)
  };

  return (
    <div className="app">
      <h1>Doan Arsenal</h1>
      <ColorBox />
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todos={todoList} onTodoClick={handleTodoClick} />
    </div>
  );
}

export default App;