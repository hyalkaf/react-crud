const initialState = [
  { title: 'nada' }
];

export default function courseReducer(state = initialState, action ) {
  switch(action.type) {
    case 'LOAD_COURSES_SUCCESS':
      return action.courses;

    case 'CREATE_COURSE':
      return [
        ...state,
        Object.assign({}, action.course, { id: state.length + 1 + ''})
      ];

    case 'UPDATE_COURSE':
      return [
        ...state.filter(course => course.id !== action.course.id),
        Object.assign({}, action.course)
      ];

    case 'REMOVE_COURSE':
      return [
        ...state.filter(course => course.id !== action.courseId),
      ];

    default:
      return state;
  }
}
