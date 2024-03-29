import React from 'react'
import { connect } from 'react-redux'
import buyCake from '../redux/cake/cakeActions'
import buyIceCream from '../redux/iceCream/iceCreamActions'

const ItemContainer = (props) => {
    return (
        <div>
            <h1>Item - {props.item}</h1>
            <button onClick={props.buyItem}>Buy Items</button>
        </div>
    )
}

const mapStateToProps = (state , ownProps)=>{
    const itemState = ownProps.cake ? state.cake.numberOfCakes : state.iceCream.numberOfIceCream;
    return {
        item : itemState
    }
}

const mapDispatchToProps = (dispatch , ownProps)=>{
    const dispatchFunction = ownProps.cake ? ()=>dispatch(buyCake()) : ()=>dispatch(buyIceCream())
    return {
        buyItem : dispatchFunction
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ItemContainer)
