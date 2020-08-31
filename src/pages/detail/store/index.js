import axios from "../../../axios";

export const GET_DETAIL_DATA = "GET_DETAIL_DATA";

// 获取文章详情
export const getDetailData = (id) => {
  return (dispatch) => {
    axios.get("api/detailData.json?id=" + id).then((res) => {
      if(res.success){
        dispatch({
          type: GET_DETAIL_DATA,
          data: res.data
        })
      }
    }).catch((e) => {
      console.log("网络错误请稍后再试!")
    })
  }
}
