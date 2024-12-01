
import { api } from "../../config/apiConfig";
import { FIND_PRODUCT_BY_FAILURE, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCT_BY_REQUEST, FIND_PRODUCT_BY_SUCCESS } from "./ActionType";


export const findProducts = (requestData) => async (dispatch) => {
    dispatch({type: FIND_PRODUCT_BY_REQUEST})
    const {
        colors, sizes, minPrice, maxPrice, minDiscount, category, stock, sort, pageNumber, pageSize
    } = requestData;
    try {
        const {data} = await api.get(`api/products?color=${colors}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`)
        dispatch({type: FIND_PRODUCT_BY_SUCCESS, payload: data})
        console.log(data);
    } catch (error) {
        dispatch({type: FIND_PRODUCT_BY_FAILURE, payload: error.payload})
    }
}

 export const findProductsById = (requestData) => async (dispatch) => {
    dispatch({type: FIND_PRODUCT_BY_ID_REQUEST})
    const {productId} = requestData;
    try {
        const {data} = await api.get(`api/products/id/${productId}`)
        dispatch({type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.payload})
    }
}