
import { api, API_BASEURL } from "../../config/apiConfig";
import { CREATE_PRODUCT_FAILURE, CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS, DELETE_BY_ID_FAILURE, DELETE_BY_ID_REQUEST, DELETE_BY_ID_SUCCESS, FIND_PRODUCT_BY_FAILURE, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCT_BY_REQUEST, FIND_PRODUCT_BY_SUCCESS } from "./ActionType";


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

export const createProduct = (product) => async (dispatch) => {
    dispatch({type: CREATE_PRODUCT_REQUEST});

    try {
        const {data} = await api.post(`/api/admin/products`, product.data);
        dispatch({type: CREATE_PRODUCT_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: CREATE_PRODUCT_FAILURE, payload: error.message})
    }
}

export const deleteProduct = (productId) => async (dispatch) => {
    dispatch({type: DELETE_BY_ID_REQUEST});

    try {
        const {data} = await api.get(`${API_BASEURL}/admin/id/${productId}`);
        console.log("Products Data", data)
        dispatch({type: DELETE_BY_ID_SUCCESS, payload: productId})
    } catch (error) {
        dispatch({type: DELETE_BY_ID_FAILURE, payload: error.message})
    }
} 