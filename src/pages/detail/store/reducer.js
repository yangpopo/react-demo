import { GET_DETAIL_DATA } from "./index";
import { fromJS } from "immutable";

const defaultState = fromJS({
    "detilData": {}, // 首详情数据

});

export default (state = defaultState, action) => {
    // 设置详情数据
    if(action.type === GET_DETAIL_DATA){
        return state.set("detilData", fromJS(action.data));
    }
    return state;
}