import { DELETE_BY_ID_REQUEST, DELETE_BY_ID_SUCCESS, FIND_PRODUCT_BY_FAILURE, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCT_BY_REQUEST, FIND_PRODUCT_BY_SUCCESS } from "./ActionType";

const initialState = {
    products: [],
    product: null,
    loading:false,
    error:null
}

export const customerProductReducer = (state = initialState, action) => {

    switch (action.type) {
        case FIND_PRODUCT_BY_REQUEST:
        case FIND_PRODUCT_BY_ID_REQUEST:
            return {...state, loading: true, error:null}
        case DELETE_BY_ID_REQUEST:
            return {...state, loading: true, error:null, deletedProduct: null}

        case FIND_PRODUCT_BY_SUCCESS:
            return {...state, loading: false, error: null, products: action.payload}
        
        case FIND_PRODUCT_BY_ID_SUCCESS:
            return {...state, loading: false, error: null, product:action.payload};
        case DELETE_BY_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                product: action.payload, // Track deleted product
            };

        case FIND_PRODUCT_BY_FAILURE:
        case FIND_PRODUCT_BY_ID_FAILURE:
            return {...state, loading: false, error: action.payload}
        default:
            return state;
    }
}