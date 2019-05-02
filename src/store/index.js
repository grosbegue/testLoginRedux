import { createStore } from "redux";

import reducer from "../reducers";

const initialState = { userName: "" };

export const store = createStore(reducer, initialState);
