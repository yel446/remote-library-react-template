import { TempDataAction } from "./temp_data.actions";
import temp_dataTypes from "./temp_data.types";

interface ISidebarReducerState {
  email: string;
  token: string;
}

const INITIAL_STATE = {
  email: "",
  token: "",
};

const tempDataReducer = (
  state: ISidebarReducerState = INITIAL_STATE,
  action: TempDataAction
): ISidebarReducerState => {
  switch (action.type) {
    case temp_dataTypes.UPDATE_EMAIL:
      return {
        ...state,
        email: action.payload,
      };

    case temp_dataTypes.GET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };

    default:
      return state;
  }
};

export default tempDataReducer;
