import { useSelector } from 'react-redux';
import { TodoListItem } from './TodoListItem';
import { NewTodoForm } from './NewTodoForm';

export const TodoList = () => {
    const todos = useSelector(state => state.todos);

    return (
        <div>
            <h1>My Todos</h1>
            <NewTodoForm />
            {todos.length === 0
                ? <p>No todos yet!</p>
                : todos.map(todo => (
                    <TodoListItem
                        key={todo.id}
                        todo={todo} />
                ))}
        </div>
    );
}