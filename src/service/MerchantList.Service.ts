import { URL_PATHS,URL_PATHS_API } from "../config/Api.Url";
import { post,fetch,put,deletes } from "../helper/axios/Api.Helper";
const MerchantListService=()=>{
    let instance: any;
    function Init(){
        return{
            getMerchantList: async () => {
                return await fetch(URL_PATHS_API.GET_MERCHAN_LIST, null, true)
            },
            getAllMerchantListFromDatabase: async () => {
                return await fetch(URL_PATHS_API.GET_ALL_MERCHANT_LIST_FROM_DATABASE, null, true)
            },
            getMerchantByLoginName: async (loginName:string) => {
                return await fetch(URL_PATHS_API.GET_MERCHANT_BY_LOGIN_NAME_FROM_DATABASE + "?loginName=" + loginName, null, true)
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
export default MerchantListService