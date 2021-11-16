import React, { useEffect, useState } from 'react';

import { ITodo } from '../interfaces';
import { TodoFrom } from "../components/TodoForm";
import { TodoList } from "../components/TodoList";

// declare var confirm: (q: string) => boolean;

export const TodosPage: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];

    setTodos(saved);
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false
    }
    // setTodos([newTodo, ...todos]);
    setTodos(prev => [newTodo, ...prev])
  }

  const toggleHandler = (id: number) => {
    setTodos(prev =>
      prev.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo
    }))
  }

  const removeHandler = (id: number) => {
    const shoudRemove = window.confirm('Are you want to delete current task?');
    if(shoudRemove){
      setTodos(prev => prev.filter(todo => todo.id !== id))
    }
  }

    return <>
        <TodoFrom onAdd={addHandler} />
        <TodoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler}/>
    </>
}