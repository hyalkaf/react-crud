export default function staticListsReducer(state = [], action ) {
  switch(action.type) {
    case 'LOAD_STATIC_LISTS':
      return action.staticLists;

    default:
      return state;
  }
}
