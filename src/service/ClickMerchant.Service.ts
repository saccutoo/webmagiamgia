import { URL_PATHS,URL_PATHS_API, } from "../config/Api.Url";
import { post,fetch,put,deletes } from "../helper/axios/Api.Helper";

const ClickMerchantService=()=>{
    let instance: any;
    function Init(){
        return{
            addClickMerchant: async (data:any) => {
                return await post(URL_PATHS_API.ADD_CLICK_MERCHANT, data, true)
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
export default ClickMerchantService