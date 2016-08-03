import {ADD_DECK, DELETE_DECK, LOAD_DECKS, UPDATE_DECK} from '../constants/actionTypes';
import * as _ from 'lodash';

const decks = (state = [], action) => {
  switch (action.type) {
    case ADD_DECK:
      return [action.deck, ...state];
    case DELETE_DECK: {
      return _.filter(state, y => y.id !== action.id);
    }
    case LOAD_DECKS:
      return action.decks;
    case UPDATE_DECK:
      return [action.deck, ...state.slice(state.findIndex(deck => deck.id === action.id), 1)];
    default:
      return state;
  }
};

export default decks;
