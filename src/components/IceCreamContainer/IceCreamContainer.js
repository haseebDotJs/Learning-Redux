import React from 'react'
import { buyIceCream } from '../../redux'
import { connect } from "react-redux"

const CakeContainer = ({ numOfIceCreams, buyIceCream }) => {
    console.log("numOfIcecreams", numOfIceCreams);

    const buyTheIceCream = () => {
        if (numOfIceCreams > 0) {
            buyIceCream()
            return
        }
        alert("Ice creams have been finished")

    }
    return (
        <div>
            <h2>Number of ice creams - {numOfIceCreams}</h2>
            <button onClick={buyTheIceCream}>Buy Ice cream</button>
        </div>
    )
}

const mapStateToProps = state => {
    console.log('state', state);
    return {
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CakeContainer)