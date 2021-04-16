import { createStore, combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { todos } from './reducers';

/*
    {
        todos: [{ id: '123', text: 'do something', isCompleted: true }]
    }

    { type: 'DELETE_TODO', payload: { id: '123' } }
*/
// const todos = (state, action) => {
//     if (action.type === 'DELETE_TODO') {
//         return state.filter(todo => todo.id !== action.payload.id);
//     }
// }

const reducers = {
    todos,
};

const rootReducer = combineReducers(reducers);

const persistedReducer = persistReducer({
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2,
}, rootReducer);

export const configureStore = () => createStore(
    persistedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__(),
);
