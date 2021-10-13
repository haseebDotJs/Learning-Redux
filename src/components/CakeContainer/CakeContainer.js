import React from 'react'
import { buyCake } from '../../redux'
import { connect } from "react-redux"

const CakeContainer = ({ numOfCakes, buyCake }) => {
    console.log("numOfCakes", numOfCakes);

    const buyTheCake = () => {
        if (numOfCakes > 0) {
            buyCake()
            return
        }
        alert("Cakes have been finished")

    }
    return (
        <div>
            <h2>Number of cakes - {numOfCakes}</h2>
            <button onClick={buyTheCake}>Buy cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    console.log('state', state);
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CakeContainer)