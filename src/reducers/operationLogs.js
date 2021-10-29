import { ADD_OPERATION_LOG, DELETE_ALL_OPERATION_LOG } from '../actions';

const operationLogs = (state = [], action) => {
  switch (action.type) {
    case ADD_OPERATION_LOG:
      const operationLog = {
        description: action.description,
        operated_at: action.operated_at,
      };

      return [operationLog, ...state];
    case DELETE_ALL_OPERATION_LOG:
      return [];
    default:
      return state;
  }
};

export default operationLogs;
