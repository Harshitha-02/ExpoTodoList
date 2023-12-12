export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_TASK_COMPLETION = 'TOGGLE_TASK_COMPLETION';
export const REMOVE_TASK = 'REMOVE_TASK';

export interface AddTaskAction {
  type: typeof ADD_TASK;
  payload: {
    text: string;
  };
}

export interface ToggleTaskCompletionAction {
  type: typeof TOGGLE_TASK_COMPLETION;
  payload: {
    index: number;
  };
}

export interface RemoveTaskAction {
  type: typeof REMOVE_TASK;
  payload: {
    index: number;
  };
}

export type TaskAction = AddTaskAction | ToggleTaskCompletionAction | RemoveTaskAction;

export const addTask = (text: string): AddTaskAction => ({
  type: ADD_TASK,
  payload: { text },
});

export const toggleTaskCompletion = (index: number): ToggleTaskCompletionAction => ({
  type: TOGGLE_TASK_COMPLETION,
  payload: { index },
});

export const removeTask = (index: number): RemoveTaskAction => ({
  type: REMOVE_TASK,
  payload: { index },
});
