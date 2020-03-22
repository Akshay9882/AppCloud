

const initialState = {
  buckets: [],
  selectedBucket: 1,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "DATA_LOADED":
      return { ...state, buckets: action.payload }
    case "CHANGE_SELECTED_BUCKET":
      return { ...state, selectedBucket: action.payload }
    default:
      break;
  }
  return state;
}

export default rootReducer;