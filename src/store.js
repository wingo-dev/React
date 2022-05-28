import { createStore } from "redux";
import rotateReducer from "./reducers/rotateReducer";

function configureStore() {
    //  console.log("store:::"+ createStore(rotateReducer));
    return createStore(rotateReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}
export default configureStore;