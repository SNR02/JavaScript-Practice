
/* ---------Redux--------- */

// Action Types
const INCREMENT = "INCREMENT";

// Action Creators
const increment = () => ({ type: INCREMENT });

// Reducer
const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    default:
      return state;
  }
};

// Store
import { createStore } from "redux";
const store = createStore(counterReducer);