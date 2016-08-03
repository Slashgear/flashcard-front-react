import React, {Component, PropTypes} from 'react';
import {DeckItem} from './deckItem';
import {Link} from 'react-router';

export class DeckList extends Component {
  static propTypes = {
    decks: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  }
  componentDidMount() {
    this.props.actions.loadDecks();
  }

  render() {
    return (
      <div className="row">
        <h1>Availables Decks <Link to="/deckCreate" className="glyphicon glyphicon-plus text-success pull-right"/></h1>
        <ul className="list-group">
          {this.props.decks.map((deck, index) =>
            <li key={index} className="list-group-item">
              <DeckItem key={index} deck={deck} index={index + 1} actions={this.props.actions}/>
            </li>
          )}
        </ul>
      </div>
    );
  }
}
