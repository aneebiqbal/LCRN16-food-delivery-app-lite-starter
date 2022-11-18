import { combineReducers } from "redux";

import tabReducer from "./tab/tabReducer";

let rootReducer = combineReducers({
    tabReducer
});

export default rootReducer;