import { BUY_SANDWICH } from "./sandwichTypes";

const initialState = {
   numOfSandwich: 10
}
const sandwichReducer = (state = initialState, action) => {
          switch (action.type) {
              case BUY_SANDWICH:
                 return {
                     ...state, numOfSandwich: state.numOfSandwich - (action.payload ? action.payload : 1 )
                 }
              default:
                return state
          }
}

export default sandwichReducer