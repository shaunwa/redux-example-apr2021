import { useState } from 'react';

export const NewTodoForm = ({ onCreateClicked }) => {
    const [inputText, setInputText] = useState('');

    return (
        <div>
            <input
                value={inputText}
                onChange={e => setInputText(e.target.value)} />
            <button onClick={() => {
                onCreateClicked(inputText);
                setInputText('');
            }}>Create Todo</button>
        </div>
    )
}