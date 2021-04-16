import { connect } from 'react-redux';
import { deleteTodo, markTodoAsCompleted } from '../actions';

/*
    {
        id: '123123',
        text: 'Go to the store',
        isCompleted: true,
    }
*/
export const TodoListItemBase = ({ todo, onCompleteClicked, onDeleteClicked }) => (
    <div>
        <h3>{todo.text}</h3>
        {todo.isCompleted && <p>Complete!</p>}
        {todo.isCompleted
            ? <button onClick={() => onDeleteClicked(todo.id)}>Delete</button>
            : <button onClick={() => onCompleteClicked(todo.id)}>Mark as Completed</button>}
    </div>
);

const mapDispatchToProps = dispatch => ({
    onCompleteClicked: (id) => dispatch(markTodoAsCompleted(id)),
    onDeleteClicked: (id) => dispatch(deleteTodo(id)),
});

export const TodoListItem = connect(null, mapDispatchToProps)(TodoListItemBase);