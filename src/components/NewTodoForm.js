import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createTodo } from '../actions';

export const NewTodoForm = () => {
    const [inputText, setInputText] = useState('');

    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    return (
        <div>
            <input
                value={inputText}
                onChange={e => setInputText(e.target.value)} />
            <button
                disabled={todos.some(todo => todo.text === inputText)}
                onClick={() => {
                    dispatch(createTodo(inputText));
                    setInputText('');
                }}>Create Todo</button>
        </div>
    );
}