import * as types from '../constants/ActionTypes';
const initialState = {
    products: [],
    totalProducts: []
};

export default function searchPhotos(state = initialState, action) {
    switch (action.type) {
    case types.FETCH_PRODUCTS:
    return {
        ...state,
        products:[...action.products],
        totalProducts: [...action.products]
    };
    case types.SHOW_ALL:
    return {
        ...state,
        products:[...action.products]
    }
    case types.FILTER_BY_SIZE:
    return {
        ...state,
        products:[...action.products]
    }
    default:
    return state;
}
}
