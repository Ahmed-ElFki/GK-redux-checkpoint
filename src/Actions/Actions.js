import {
  ADD_TODO,
  FILTER_TODO,
  EDIT_TODO_DATA,
  EDIT_TODO_STATUS,
} from "../Constants/Constants";

function AddTaskAction(data) {
  return {
    type: ADD_TODO,
    payload: {
      data,
    },
  };
}

function EditTaskDataAction(data) {
  return {
    type: EDIT_TODO_DATA,
    payload: {
      data,
    },
  };
}

function EditTaskStatusAction(data) {
  return {
    type: EDIT_TODO_STATUS,
    payload: {
      data,
    },
  };
}

function FilterTaskAction(data) {
  return {
    type: FILTER_TODO,
    payload: {
      data,
    },
  };
}

export default {
  AddTaskAction,
  EditTaskDataAction,
  EditTaskStatusAction,
  FilterTaskAction,
};
