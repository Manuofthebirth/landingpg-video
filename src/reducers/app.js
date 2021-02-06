export default function (state = {
  menuOpen: false,
  loading: false,
}, action) {
  switch (action.type) {
    case 'CHANGE_USERMENU_STATUS':
      return { ...state, menuOpen: action.payload }
    case 'CHANGE_LOADING_STATUS':
      return { ...state, loading: action.payload }
    default:
      return state
  }
}
