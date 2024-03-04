import React from 'react';
import { ITodo } from './interfaces';

type TodoListProps = {
    todos: ITodo[];
    onToggle(id: number): void;
    onRemove(id: number): void;
    filter: string;
};

export const TodoList: React.FC<TodoListProps> = ({ todos, onRemove, onToggle, filter }) => {
    const filteredTodos = filter === 'completed' ? todos.filter((todo) => todo.completed) :
        filter === 'current' ? todos.filter((todo) => !todo.completed) :
            todos;

    if (filteredTodos.length === 0) {
        return <p className="center">No quests matching the filter</p>;
    }

    const removeHandler = (event: React.MouseEvent, id: number) => {
        event.preventDefault();
        onRemove(id);
    };

    return (
        <ul>
            {filteredTodos.map((todo) => {
                const classes = ['todo'];
                if (todo.completed) {
                    classes.push('completed');
                }
                return (
                    <li className={classes.join(' ')} key={todo.id}>
                        <label>
                            <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)} />
                            <span>{todo.title}</span>
                            <i
                                className="material-icons red-text"
                                onClick={(event) => removeHandler(event, todo.id)}
                            >
                                delete
                            </i>
                        </label>
                    </li>
                );
            })}
        </ul>
    );
};
