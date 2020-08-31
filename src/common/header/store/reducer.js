import { SEARCH_INPUT_ANIMATION, GET_HEAT_DATA_API, HEAT_MOUSE_STATUS, HEAT_PAGE_CLICK } from "./index";
import { fromJS } from "immutable";

const defaultState = fromJS({
    focused: false,
    mouseStatus: false, // 鼠标移入状态
    heatList: [], // 热门数据
    heatListPage: {
        total: 0,
        page: 1,
        pageSize: 5
    }
});

export default (state = defaultState, action) => {
    if(action.type === SEARCH_INPUT_ANIMATION){
        return state.set("focused", !state.get("focused"));
    }

    if(action.type === GET_HEAT_DATA_API){
        const heatListPage = state.get("heatListPage").toJS();
        heatListPage.total = Math.ceil(action.heatList.length / 5);
        return state.merge({
            "heatList": fromJS(action.heatList),
            "heatListPage": fromJS(heatListPage)
        })
    }

    if(action.type === HEAT_MOUSE_STATUS){
        return state.set("mouseStatus", !state.get("mouseStatus"));
    }

    if(action.type === HEAT_PAGE_CLICK){
        const heatListPage = state.get("heatListPage").toJS();
        if(state.get("heatListPage").get("page") < state.get("heatListPage").get("total")){
            heatListPage.page++;
            return state.merge({
                "heatListPage": fromJS(heatListPage)
            })
        }else{
            heatListPage.page = 1;
            return state.merge({
                "heatListPage": fromJS(heatListPage)
            })
        }
    }

    return state;
}