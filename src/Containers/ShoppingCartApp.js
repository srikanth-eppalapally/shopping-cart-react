import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as action from '../Actions/actions';
import ProductList from '../Components/ProductList'
import SelectByFilter from  '../Components/SelectByFilter';
@connect(state => ({
    products: state.data.products
}))

export default class ShoppingCartApp extends Component {
    static propTypes = {
        products: PropTypes.array,
        dispatch: PropTypes.func.isRequired,
    }

    render() {
        const actions = bindActionCreators(action, this.props.dispatch);
        return (
            <div className='content'>
                <div className='header'>
                <h1>Products List</h1>
           <SelectByFilter actions={actions}/>
                </div>
        <ProductList actions={actions} products={this.props.products} />
            </div>
        );
    }
}

