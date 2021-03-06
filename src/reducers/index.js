import { INCREMENT, DECREMENT } from '../actions';
import { Object } from 'core-js';

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
const initialState = {
  count: 0
}
export default (state = initialState, action) => {
  console.log(action.type)
  switch (action.type) {
    case INCREMENT:
    return Object.assign({}, state, { count: state.count + 1 });
    // Fill in the body of this case
    case DECREMENT:
    return Object.assign({}, state, { count: state.count - 1});
    // Fill in the body of this case
    default:
    return state;
  }
};
