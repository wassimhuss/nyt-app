const INITIAL_STATE = {
  docs: null,
  error: true,
};
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'GET_NEWS':
      // console.warn(action.payload)
      return { ...state, ...action.payload };
    default:
      return state;
  }
}



