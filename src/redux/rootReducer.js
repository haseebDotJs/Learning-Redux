import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from './icecream/iceCreamReducer'
import sandwichReducer from "./sandwich/sandwichReducer";

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    sandwich: sandwichReducer
})

export default rootReducer
