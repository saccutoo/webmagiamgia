import { URL_PATHS,URL_PATHS_API } from "../config/Api.Url";
import { post,fetch,put,deletes } from "../helper/axios/Api.Helper";

const NewService=()=>{
    let instance: any;
    function Init(){
        return{
            getTopNewByType: async (type:string) => {
                return await fetch(URL_PATHS_API.GET_TOP_NEW_BY_TYPE + "?type="+type, null, true)
            },
            getNewById: async (id:number) => {
                return await fetch(URL_PATHS_API.GET_NEW_BY_ID + "?id ="+ id.toString(), null, true)
            },
            getNewByCode: async (code:string) => {
                return await fetch(URL_PATHS_API.GET_NEW_BY_CODE + "?code="+ code, null, true)
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
export default NewService