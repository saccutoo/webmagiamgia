import { URL_PATHS } from "../config/Api.Url";
import { post,fetch,put,deletes } from "../helper/axios/Api.Helper";
import { ITest,IListTest } from "../interface/Test";

const TestService=()=>{
    let instance: any;
    function Init(){
        return{
            getTest: async () => {
                const datas= [{key:"1",value:"1"}]
                return datas;
                //return await fetch(URL_PATHS.GET_TEST, null, true)
            },
            addTest: async (data: any) => {
                return await post(URL_PATHS.POST_TEST, data, true)
            },
            updateTest: async (data: any) => {
                return await put(URL_PATHS.PUT_TEST, data, true)
            },
            deleteTest: async (data: any) => {
                return await deletes(URL_PATHS.DELETE_TEST, data, true)
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
export default TestService