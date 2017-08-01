
import React, { Component, PropTypes } from 'react';


export default class Product extends Component {
    static propTypes = {
        actions: PropTypes.object,
        products: PropTypes.array,
    };

    constructor(props){
        super(props);
    }



    render() {
        const {product} = this.props;
        let imgSrc = 'Products/'+ product.productImage;
        return (
            <div className='product'>
                <img src={imgSrc} />
                <div className='price-box'>
            <p className='name'><strong>{product.productName}</strong></p>
            <p className='price'><strong>{product.price}</strong></p></div>
        {product.isSale && <button className='sale'>Sale</button>}
        {product.isExclusive && <button className='exclusive'>Exclusive</button>}
            </div>
        );
    }
}
