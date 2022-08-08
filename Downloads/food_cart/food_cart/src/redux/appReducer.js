import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "./cart/cart.Reducer";

const persistconfig = {
    key:'food-shop',
    storage,
    whitelist:["cart"]

}
const appReducer = combineReducers({
    cart:cartReducer,
})
export default persistReducer(persistconfig , appReducer)