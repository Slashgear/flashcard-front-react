import * as types from '../constants/actionTypes';
import {DeckService} from "../components/deck/deckService";

export function loadDecks() {
  return dispatch => {
    return DeckService.getAll().subscribe(response => dispatch({type: types.LOAD_DECKS, decks: response.data}));
  };
}

export function deleteDeck(id) {
  return dispatch => {
    return DeckService.deleteDeck(id).subscribe(() => dispatch({type: types.DELETE_DECK, id}));
  };
}

export function updateDeck(deck) {
  return dispatch => {
    return DeckService.updateDeck(deck).subscribe(deck => dispatch({type: types.UPDATE_DECK, id: deck.id, deck}));
  };
}

export function createDeck(deck) {
  return dispatch => {
    return DeckService.createDeck(deck).subscribe(deck => dispatch({type: types.ADD_DECK, deck}));
  };
}
