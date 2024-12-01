import { api } from "../../config/apiConfig";
import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS, REMOVE_CART_ITEM_FAILURE, REMOVE_CART_ITEM_REQUEST, REMOVE_CART_ITEM_SUCCESS, UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS } from "./ActionType"

export const getCart = () => async (dispatch) => {
    dispatch({type: GET_CART_REQUEST});

    try {
        const {data} = await api.get(`/api/cart/`);
        console.log("Cart Data",data)
        dispatch({type: GET_CART_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: GET_CART_FAILURE, payload: error.message})
    }
}

export const addItemToCart = (requestData) =>async (dispatch) => {
    dispatch({type: ADD_ITEM_TO_CART_REQUEST});

    try {
        const {data} = await api.post("/api/cart/addItemToCart", requestData);
        console.log("Data: ",data);
        dispatch({type: ADD_ITEM_TO_CART_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: ADD_ITEM_TO_CART_FAILURE, payload: error.message})
    }
}

export const removeItemToCart = (cartItemId) =>async (dispatch) => {
    dispatch({ type: REMOVE_CART_ITEM_REQUEST });

    try {
        await api.delete(`/api/cart/removeCartItem/${cartItemId}`);
        dispatch({ type: REMOVE_CART_ITEM_SUCCESS, payload: cartItemId });
    } catch (error) {
        console.error("Error removing item from cart:", error);
        dispatch({
            type: REMOVE_CART_ITEM_FAILURE,
            payload: error.response?.data?.message || error.message,
        });
    }
}

export const updateItemToCart = (requestData) =>async (dispatch) => {
    dispatch({ type: UPDATE_CART_ITEM_REQUEST });

    try {
        const { data } = await api.put(
            `/api/cart/updateCartItem/${requestData.cartItemId}`,
            requestData.data
        );
        console.log("Updated Cart Item:", data);
        dispatch({ type: UPDATE_CART_ITEM_SUCCESS, payload: data });
    } catch (error) {
        console.error("Error updating cart item:", error);
        dispatch({
            type: UPDATE_CART_ITEM_FAILURE,
            payload: error.response?.data?.message || error.message,
        });
    }
}