import * as types from '../constants/ActionTypes';
import getJSONData from '../Api/getJsonData';



export function getProductsList() {
    return (dispatch) => {
        getJSONData( (data) => {
            dispatch({
                type: types.FETCH_PRODUCTS,
                products: data
            })
        });
    }
}

export function showAllProducts(){
    return (dispatch, getState) => {
        let products = getState().data.totalProducts;

        dispatch({
            type: types.SHOW_ALL,
            products: products
        })
    }
}

export function filterProductsBySize(size) {
    return (dispatch, getState) => {
        let currentState = getState().data;
        let filteredArray = currentState.totalProducts.filter((obj) => {
                if( obj.size.indexOf(size) > -1 ){
                    return obj;
                }
            });
        dispatch({
            type: types.FILTER_BY_SIZE,
            products: filteredArray
        })
    }
}