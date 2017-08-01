import React, { Component, PropTypes } from 'react';

import Product from './Product'
export default class ProductList extends Component {
    static propTypes = {
        actions: PropTypes.object,
        products: PropTypes.array,
    };

    constructor(props){
        super(props);
        this.props.actions.getProductsList();
    }

    render() {
        let list = this.props.products.map((item, index) => {
                                    return <Product product={item} key={item.index} />
                    });
        return (
                <div className='product-list'>
            {list}
        </div>
       );
    }
}
