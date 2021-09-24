import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import CharacterReducer from './reducer/CharacterReducer';


export const store = createStore(
    CharacterReducer,
    applyMiddleware(thunk)
);