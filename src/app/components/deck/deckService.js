import Rx from 'rx';
import * as axios from 'axios';

export class DeckService {
  static API = 'http://localhost:8080/api/deck';

  static getAll() {
    return Rx.Observable.fromPromise(axios.get(this.API));
  }

  static createDeck(deck) {
    return Rx.Observable.fromPromise(axios.post(this.API, deck));
  }

  static getDeck(id) {
    return Rx.Observable.fromPromise(axios.get(`${this.API}/${id}`));
  }

  static updateDeck(deck) {
    return Rx.Observable.fromPromise(axios.put(`${this.API}/${deck.id}`, deck));
  }

  static deleteDeck(id) {
    return Rx.Observable.fromPromise(axios.delete(`${this.API}/${id}`));
  }
}
