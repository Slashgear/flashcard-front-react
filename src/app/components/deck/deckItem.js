import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

export class DeckItem extends Component {
  static propTypes = {
    deck: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    actions: PropTypes.object.isRequired
  };

  constructor(props, context) {
    super(props, context);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.actions.deleteDeck(this.props.deck.id);
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-3">#{this.props.index}</div>
        <Link to={`/deck/${this.props.deck.id}`} className="col-md-6">{this.props.deck.name}</Link>
        <Link className="text-info" to={`/deck/${this.props.deck.id}`}>Edit </Link>
        <span onClick={this.handleDelete} className="text-danger">Delete</span>
      </div>
    );
  }
}
