import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ITodo } from '../Components/interfaces';
import { addTodo, toggleTodo, removeTodo } from '../redux/reducer';
import { TodoList } from '../Components/TodoList';
import { ToDoForm } from '../Components/ToDoForm';

declare var confirm: (question: string) => boolean;

export const TodosPage: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const todosRedux: ITodo[] = useSelector((state: { todos: ITodo[] }) => state.todos);
  const dispatch = useDispatch();

    console.log('Todos in the Redux store:', todosRedux);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];
    if (savedTodos.length > 0) {
      dispatch({ type: 'SET_TODOS', payload: savedTodos });
    }
  }, [dispatch]);

  const addHandler = (title: string) => {
    if (title.trim() !== '') {
      dispatch(addTodo(title));
    }
  };

  const toggleHandler = (id: number) => {
    dispatch(toggleTodo(id));
  };

  const removeHandler = (id: number) => {
    const shouldRemove = confirm('Are you sure?');
    if (shouldRemove) {
      dispatch(removeTodo(id));
    }
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todosRedux));
  }, [todosRedux]);

  return (
      <React.Fragment>
        <ToDoForm onAdd={addHandler}/>
        <div>
          <div>
            <button onClick={() => setFilter('all')}>All</button>
            <button onClick={() => setFilter('completed')}>Completed</button>
            <button onClick={() => setFilter('current')}>Current</button>
          </div>
        </div>
        <TodoList todos={todosRedux} onToggle={toggleHandler} onRemove={removeHandler} filter={filter}/>
      </React.Fragment>
  );
};
