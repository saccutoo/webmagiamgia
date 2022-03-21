import { URL_PATHS,URL_PATHS_API } from "../config/Api.Url";
import { post,fetch,put,deletes } from "../helper/axios/Api.Helper";

const NewService=()=>{
    let instance: any;
    function Init(){
        return{
            getAllTypeNew: async (type:string) => {
                return await fetch(URL_PATHS_API.GET_ALL_TYPE_NEW, null, true)
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