// redux/actions.ts
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

// Define action interfaces
interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: {
    title: string;
  };
}

interface ToggleTodoAction {
  type: typeof TOGGLE_TODO;
  payload: {
    id: number;
  };
}

interface RemoveTodoAction {
  type: typeof REMOVE_TODO;
  payload: {
    id: number;
  };
}

export const addTodo = (title: string): AddTodoAction => ({
  type: ADD_TODO,
  payload: { title },
});

export const toggleTodo = (id: number): ToggleTodoAction => ({
  type: TOGGLE_TODO,
  payload: { id },
});

export const removeTodo = (id: number): RemoveTodoAction => ({
  type: REMOVE_TODO,
  payload: { id },
});

export type TodoActionTypes = AddTodoAction | ToggleTodoAction | RemoveTodoAction;
