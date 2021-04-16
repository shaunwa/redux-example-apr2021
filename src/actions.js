export const CREATE_TODO = 'CREATE_TODO';
export const createTodo = text => ({
    type: CREATE_TODO,
    payload: { text },
});

export const DELETE_TODO = 'DELETE_TODO';
export const deleteTodo = id => ({
    type: DELETE_TODO,
    payload: { id },
});

export const MARK_TODO_AS_COMPLETED = 'MARK_TODO_AS_COMPLETED';
export const markTodoAsCompleted = id => ({
    type: MARK_TODO_AS_COMPLETED,
    payload: { id },
});