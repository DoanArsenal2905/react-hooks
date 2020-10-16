import React, { useState } from 'react';
import './App.scss';
import ColorBox from './components/ColorBox';
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
  }

  return (
    <div className="app">
      <h1>Doan Arsenal</h1>
      <ColorBox />
      <TodoList todos={todoList} onTodoClick={handleTodoClick} />
    </div>
  );
}

export default App;