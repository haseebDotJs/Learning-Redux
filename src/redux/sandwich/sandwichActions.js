import { BUY_SANDWICH } from "./sandwichTypes"

export const buySandwich = (quantity) => {
    console.log("quanity ", quantity);
    return {
        type: BUY_SANDWICH,
        payload: quantity
    }
}