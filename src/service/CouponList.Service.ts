import { URL_PATHS,URL_PATHS_API } from "../config/Api.Url";
import { post,fetch,put,deletes } from "../helper/axios/Api.Helper";
const CouponListService=()=>{
    let instance: any;
    function Init(){
        return{
            getCouponListByMerchant: async (is_next_day_coupon:boolean,keyword:string,merchant:string,limit:number,page:number,marchant:string) => {
                const url=URL_PATHS_API.GET_COUPON_LIST + "?is_next_day_coupon=" + is_next_day_coupon + "&keyword=" + keyword 
                + "&merchant=" + merchant + "&limit=" + limit+ "&page=" + page +"&marchant=" + marchant
                return await fetch(url, null, true)
            },
           
        }
    }
    return {
        getInstance: () => {
          if (!instance) instance = Init();
          return instance;
        }
    };
}
export default CouponListService