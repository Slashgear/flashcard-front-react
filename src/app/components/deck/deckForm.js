import React, {Component, PropTypes} from 'react';
import {Link, browserHistory} from 'react-router';
import toastr from "toastr";

export class DeckForm extends Component {
  static propTypes = {
    params: PropTypes.shape({
      deckId: PropTypes.string
    }),
    route: PropTypes.shape({
      action: PropTypes.string.isRequired
    }),
    decks: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleName = this.handleName.bind(this);
    this.state = {
      deck: {
        name: ''
      }
    };
    if (this.props.params.deckId) {
      const deck = this.props.decks.find(deck => Number(this.props.params.deckId) === deck.id);
      console.log('deck', deck);
      this.state = {deck};
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    switch (this.props.route.action) {
      case 'CREATE':
        this.props.actions.createDeck(this.state.deck);
        toastr.success('Deck saved');
        browserHistory.push('/');
        break;
      case 'UPDATE':
        this.props.actions.updateDeck(this.state.deck);
        toastr.success('Deck saved');
        break;
      default:
        console.log(`Unknown action: ${this.props.route.action}`);
        break;
    }
  }

  handleName(e) {
    const deck = this.state.deck;
    deck.name = e.target.value;
    this.setState(deck);
  }

  render() {
    return (
      <div className="row">
        <h1>Deck {this.state.deck.name}</h1>
        <form
          name="updateDeck"
          onSubmit={this.handleSubmit}
          >
          <div className="form-group">
            <label className="control-label" htmlFor="deckName">Name: </label>
            <input
              id="deckName"
              type="text"
              className="form-control"
              value={this.state.deck.name}
              name="deckName"
              onChange={this.handleName}
              />
          </div>
          <button type="submit" className="btn">Save</button>
          &nbsp;
          <Link to="/" className="btn btn-default">Cancel</Link>
        </form>
      </div>
    );
  }
}

