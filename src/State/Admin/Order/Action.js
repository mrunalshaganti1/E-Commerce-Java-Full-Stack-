import { api } from "../../../config/apiConfig";
import { CANCEL_ORDERS_FAILURE, CANCEL_ORDERS_REQUEST, CANCEL_ORDERS_SUCCESS, CONFIRMED_ORDERS_FAILURE, CONFIRMED_ORDERS_REQUEST, CONFIRMED_ORDERS_SUCCESS, DELETE_ORDERS_FAILURE, DELETE_ORDERS_REQUEST, DELETE_ORDERS_SUCCESS, DELIVERED_ORDERS_FAILURE, DELIVERED_ORDERS_REQUEST, DELIVERED_ORDERS_SUCCESS, GET_ORDERS_FAILURE, GET_ORDERS_REQUEST, GET_ORDERS_SUCCESS, PLACED_ORDERS_FAILURE, PLACED_ORDERS_REQUEST, PLACED_ORDERS_SUCCESS, SHIP_ORDERS_FAILURE, SHIP_ORDERS_REQUEST, SHIP_ORDERS_SUCCESS } from "./ActionType";


export const getOrders = () => async (dispatch) =>{
    console.log("Get All Orders");
    
    try {
        dispatch({type: GET_ORDERS_REQUEST});
        const response = await api.get(`/api/admin/orders/`);
        console.log("Get All Orders: ", response.data);

        dispatch({type: GET_ORDERS_SUCCESS, payload: response.data})
    } catch (error) {
        dispatch({type: GET_ORDERS_FAILURE, error: error.message})
    }  
}

export const confirmOrders = (orderId) => async (dispatch) =>{
    
    try {
        dispatch({type: CONFIRMED_ORDERS_REQUEST});
        const response = await api.put(`/api/admin/orders/${orderId}/confirmed`);
        console.log("Confirmed Order: ", response.data);

        dispatch({type: CONFIRMED_ORDERS_SUCCESS, payload: response.data})
    } catch (error) {
        dispatch({type: CONFIRMED_ORDERS_FAILURE, payload: error.message})
    }  
}

export const placedOrders = (orderId) => async (dispatch) =>{
    
    try {
        dispatch({type: PLACED_ORDERS_REQUEST});
        const response = await api.put(`/api/admin/orders/${orderId}/placed`);
        console.log("PLaced Orders: ", response.data);

        dispatch({type: PLACED_ORDERS_SUCCESS, payload: response.data})
    } catch (error) {
        dispatch({type: PLACED_ORDERS_FAILURE, payload: error.message})
    }  
}

export const shipOrders = (orderId) => async (dispatch) =>{

    try {
        dispatch({type: SHIP_ORDERS_REQUEST});
        const response = await api.put(`/api/admin/orders/${orderId}/shippedOrder`);
        console.log("Shipped Orders: ", response.data);

        dispatch({type: SHIP_ORDERS_SUCCESS, payload: response.data})
    } catch (error) {
        dispatch({type: SHIP_ORDERS_FAILURE, payload: error.message})
    }  
}

export const deliveredOrders = (orderId) => async (dispatch) =>{
    
    try {
        dispatch({type: DELIVERED_ORDERS_REQUEST});
        const response = await api.put(`/api/admin/orders/${orderId}/deliveredOrder`);
        console.log("Delivered Orders: ", response.data);

        dispatch({type: DELIVERED_ORDERS_SUCCESS, payload: response.data})
    } catch (error) {
        dispatch({type: DELIVERED_ORDERS_FAILURE, payload: error.message})
    }  
}

export const cancelOrders = (orderId) => async (dispatch) =>{
    
    try {
        dispatch({type: CANCEL_ORDERS_REQUEST});
        const response = await api.put(`/api/admin/orders/${orderId}/cancledOrder`);
        console.log("Canceled Orders: ", response.data);

        dispatch({type: CANCEL_ORDERS_SUCCESS, payload: response.data})
    } catch (error) {
        dispatch({type: CANCEL_ORDERS_FAILURE, payload: error.message})
    }  
}

export const deleteOrders = (orderId) => async (dispatch) =>{

    try {
        dispatch({type: DELETE_ORDERS_REQUEST});
        const response = await api.delete(`/api/admin/orders/${orderId}/delete`);
        console.log("Deleted Order: ", response.data);

        dispatch({type: DELETE_ORDERS_SUCCESS, payload: response.data})
    } catch (error) {
        dispatch({type: DELETE_ORDERS_FAILURE, payload: error.message})
    }  
}