import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_ORDER_BY_ID_FAILURE, GET_ORDER_BY_ID_REQUEST, GET_ORDER_BY_ID_SUCCESS } from "./ActionType"
import { api } from "../../config/apiConfig";

export const createOrder = (requestData) => async (dispatch) =>{
    console.log("Request Data",requestData);
    dispatch({type: CREATE_ORDER_REQUEST})
    try {
        
        const {data} = await api.post(`/api/orders/createOrder`, requestData.address);
        if(data.id){
            requestData.navigate({search: `step=3&order_id=${data.id}`})
        }
        console.log("Created Order:", data)
        dispatch({type: CREATE_ORDER_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: CREATE_ORDER_FAILURE, 
                  payload: error.response && error.response.data.message ? error.response.data.message : error.message})
    }
};

export const getOrderById = (orderId) => async (dispatch) => {
    console.log("Get Order Id: ", );
    dispatch({type: GET_ORDER_BY_ID_REQUEST});
    try {
        const {data} = await api.get(`/api/orders/${orderId}`)
        dispatch({type: GET_ORDER_BY_ID_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: GET_ORDER_BY_ID_FAILURE, payload: error.message});
    }
}