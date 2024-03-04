import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {ITodo} from "./interfaces";

export const Navbar: React.FunctionComponent = () => {
    const todosRedux = useSelector((state: { todos: ITodo[] }) => state.todos);

    const completedTodos = todosRedux.filter((todo) => todo.completed).length;
    const uncompletedTodos = todosRedux.length - completedTodos;

    return (
        <nav>
            <div className='nav-wrapper accent-3 px1'>
                <a href="/" className="brand-logo">Todo List</a>
                <ul className="right hide-on-med-and-down">
                    <li>
                        <NavLink to="/">List</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">Info</NavLink>
                    </li>
                    <div style={{display: 'flex', alignItems: 'center', marginLeft: '0px', justifyContent: 'space-evenly'}}>
                        <li>
                            Completed Todos: {completedTodos}
                        </li>
                        <li>
                            Uncompleted Todos: {uncompletedTodos}
                        </li>
                    </div>
                </ul>
            </div>
        </nav>
    );
};
