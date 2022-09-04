import {
  ADD_TODO,
  FILTER_TODO,
  EDIT_TODO_STATUS,
} from "../Constants/Constants";

const initialState = [
  {
    id: 1,
    description: "React State",
    isDone: true,
  },
  {
    id: 2,
    description: "React Hooks",
    isDone: true,
  },
  {
    id: 3,
    description: "Redux Hooks",
    isDone: false,
  },
];

function compare(a, b) {
  if (a.id > b.id) return 1;
  if (a.id < b.id) return -1;
}

function Reducers(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload].sort(compare);
    case FILTER_TODO:
      console.log(state);
      return [...state.filter((task) => task.isDone === action.payload)].sort(
        compare
      );
    case EDIT_TODO_STATUS:
      return [
        ...state.filter((task) => task.id !== action.payload.id),
        action.payload,
      ].sort(compare);
    default:
      return state.sort(compare);
  }
}

export default Reducers;
