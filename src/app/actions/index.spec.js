import * as actions from './index';

describe('Deck actions', () => {
  it('createDeck should create ADD_DECK action', () => {
    expect(typeof actions.createDeck({name: 'toto'})).toEqual('function');
  });

  it('deleteDeck should create DELETE_DECK action', () => {
    expect(typeof actions.deleteDeck(1)).toEqual('function');
  });

  it('updateDeck should create UPDATE_DECK action', () => {
    expect(typeof actions.updateDeck({id: 1, name: 'toto'})).toEqual('function');
  });

  it('loadDecks should create LOAD_DECKS action', () => {
    expect(typeof actions.loadDecks()).toEqual('function');
  });
});

