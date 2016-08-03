import * as FlashCardActions from '../actions/index';
import {DeckList} from '../components/deck/deckList';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

function mapStateToProps(state) {
  return {
    decks: state.decks
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(FlashCardActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckList);
