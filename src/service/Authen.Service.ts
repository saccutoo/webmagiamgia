import { URL_PATHS,URL_PATHS_API } from "../config/Api.Url";
import { post,fetch,put,deletes } from "../helper/axios/Api.Helper";

const AuthenService=()=>{
    let instance: any;
    function Init(){
        return{
            loginWeb: async () => {
                return await post(URL_PATHS_API.GET_AUTH_LOGIN_WEB + "?userName="+process.env.REACT_APP_BASE_DEFUALT_USERNAME + "&passWord="+process.env.REACT_APP_BASE_DEFUALT_PASSWORD, null, false)
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
export default AuthenService