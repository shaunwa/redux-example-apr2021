import { CREATE_TODO, DELETE_TODO, MARK_TODO_AS_COMPLETED } from './actions';
import { v4 as uuid } from 'uuid';

/*
    {
        todos: [{ ... }, { ... }, ...]
    }
*/

export const todos = (state = [], action) => {
    const { type, payload } = action;

    switch(type) {
        case CREATE_TODO: {
            const newTodo = {
                id: uuid(),
                text: payload.text,
                isCompleted: false,
            }
            return [...state, newTodo];
        }
        case DELETE_TODO: {
            return state.filter(todo => todo.id !== payload.id)
        }
        case MARK_TODO_AS_COMPLETED: {
            return state.map(todo => {
                if (todo.id !== payload.id) {
                    return todo;
                }
                return { ...todo, isCompleted: true };
            });
        }
        default:
            return state;
    }
}