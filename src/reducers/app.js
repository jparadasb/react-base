function getInitialState () {
  return {
    state: ''
  }
}

export default function AppReducer (state = getInitialState(), action) {
  switch (action.type) {
    default:
      return state
  }
}
