import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {ITodo} from "../Components/interfaces";

interface TodosState extends Array<ITodo> {}

const initialState: TodosState = [];

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            const newTodo: ITodo = {
                title: action.payload,
                id: Date.now(),
                completed: false,
            };
            state.push(newTodo);
        },
        toggleTodo: (state, action: PayloadAction<number>) => {
            const todo = state.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        removeTodo: (state, action: PayloadAction<number>) => {
            const index = state.findIndex((todo) => todo.id === action.payload);
            if (index !== -1) {
                state.splice(index, 1);
            }
        },
    },
});

export const { addTodo, toggleTodo, removeTodo } = todosSlice.actions;
export default todosSlice.reducer;
