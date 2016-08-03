import {combineReducers} from 'redux';
import decks from "./decks";

const flashcardApp = combineReducers({
  decks
});

export default flashcardApp;
