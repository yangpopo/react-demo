import { combineReducers } from "redux-immutable";
import headerReducer from "../common/header/store/reducer";
import home from "../pages/home/store/reducer";
import detail from "../pages/detail/store/reducer";
import UserInfoLoginStatus from "../common/login/store/reducer";

export default combineReducers({
    headerReducer,
    home,
    detail,
    UserInfoLoginStatus
})