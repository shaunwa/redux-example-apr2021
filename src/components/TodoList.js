import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { TodoListItem } from './TodoListItem';
import { NewTodoForm } from './NewTodoForm';

export const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const createTodo = (text) => {
        setTodos([
            ...todos,
            { id: uuid(), text, isCompleted: false },
        ]);
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    const markTodoAsCompleted = (id) => {
        setTodos([
            ...todos.filter(todo => todo.id !== id),
            { ...todos.find(todo => todo.id === id), isCompleted: true },
        ]);
    }

    return (
        <div>
            <h1>My Todos</h1>
            <NewTodoForm onCreateClicked={createTodo} />
            {todos.map(todo => (
                <TodoListItem
                    key={todo.id}
                    todo={todo}
                    onDeleteClicked={deleteTodo}
                    onCompleteClicked={markTodoAsCompleted} />
            ))}
        </div>
    );
}