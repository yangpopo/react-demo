import axios from "../../../axios";

export const SEARCH_INPUT_ANIMATION = "SEARCH_INPUT_ANIMATION";
export const GET_HEAT_DATA_API = "GET_HEAT_DATA_API";
export const HEAT_MOUSE_STATUS = "HEAT_MOUSE_STATUS";
export const HEAT_PAGE_CLICK = "HEAT_PAGE_CLICK";

// 热门菜单显示
export const searchInputAnimation = () => {
    return{
        type: SEARCH_INPUT_ANIMATION
    }
}

// 获取热门数据
export const getHeatDataApi = () =>{
    return (dispatch) => {
        axios.get("/api/heatList.json").then((res) => {
            if(res.success){
                dispatch({
                    type: GET_HEAT_DATA_API,
                    heatList: res.data
                })
            }
        }).catch((e) => {

        })
    }
}

// 鼠标移上或移开
export const heatMouseStatus = () => {
    return{
        type: HEAT_MOUSE_STATUS
    }
}

// 热门标签翻页
export const heatPageClick = () => {
    return{
        type: HEAT_PAGE_CLICK
    }
}