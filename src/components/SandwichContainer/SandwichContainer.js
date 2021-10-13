import React, { useState } from 'react'
import { buySandwich } from '../../redux'
import { useSelector, useDispatch } from "react-redux"

const SandwichContainer = () => {
    const numOfSandwich = useSelector(state => state.sandwich.numOfSandwich)
    const dispatch = useDispatch()
    const [quantityOfSandwich, setQuantityOfSandwich] = useState(1)
    console.log("quantityOfSandwich", quantityOfSandwich);
    const buyTheSandwich = () => {
        if (numOfSandwich > 0) {
            if (numOfSandwich - quantityOfSandwich >= 0) {
                dispatch(buySandwich(quantityOfSandwich))
                return
            }
            alert(`Only ${numOfSandwich} ${numOfSandwich > 1 ? "sandwiches are available" : "sandwich is available"} `)
        }
        else {
            alert("Sandwiches have been finished")
        }
    }
    return (
        <div>
            <h2>Number of sandwiches - {numOfSandwich}</h2>
            <label htmlFor="quantity">Number of Sandwiches you wanna buy</label><input id="quantity" type="number" value={quantityOfSandwich} min={1} onChange={(e) => setQuantityOfSandwich(e.target.value)} />
            <div>
                <button onClick={buyTheSandwich}>Buy Sandwich</button>
            </div>
        </div>
    )
}

export default SandwichContainer