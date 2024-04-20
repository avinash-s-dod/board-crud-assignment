import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { boardReducer } from "./reducers";

// redux store states configuration
const persistConfig = {
  key: "root",
  storage,
};

const boardConfig = {
  key: "boards",
  storage,
};

const rootReducer = combineReducers({
  boards: persistReducer(boardConfig, boardReducer),
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
export default persistedReducer;
