import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import tempDataReducer from "./temp_data/temp_data.reducer";

export const persistConfig = {
  key: "authentication-form",
  storage,
  whitelist: [],
  blacklist: [],
};

const topReducer = combineReducers({
  temp_data: tempDataReducer,
});

const rootReducer = (state: any, action: any) => {
  // when RESET action is dispatched it will reset redux state
  // if (action.type === authTypes.LOGOUT) {
  //   state = undefined;
  // }
  return topReducer(state, action);
};

export default persistReducer(persistConfig, rootReducer);
