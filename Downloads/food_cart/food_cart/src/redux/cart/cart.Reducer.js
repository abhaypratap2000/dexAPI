import {CartActionstypes} from "./cart.ActionTypes";
import{addItemToCart , removeItemToCart } from "./cart.utils"


const INITIAL_STATE = {
    cartItems:[]
};
const cartReducer = (state = INITIAL_STATE , action)=>{
    switch(action.type){
        case CartActionstypes.CART_ADD_ITEM: 
        return{
            ...state,
            cartItems:addItemToCart(state.cartItems,action.payload)
        }

        case CartActionstypes.CART_REMOVE_ITEM: 
        return{
            ...state,
            cartItems:removeItemToCart(state.cartItems,action.payload)
        }
        default:
            return state;
            
    }

}
export default cartReducer;