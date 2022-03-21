import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
import AuthenService from './service/Authen.Service'
import { IUser } from "./interface/User";

const AppAdapter = () => {
    const dispatch = useDispatch();
    const [cookiesUser, setCookieUser] = useCookies(['user']);
    const [userName, setUserName] = useState<any>();
    useEffect(() => {   
      if(!cookiesUser || !cookiesUser?.user){
        (async () => {
            const data= await AuthenService().getInstance().loginWeb(); 
            if (data!=null && data.StatusCode==0 && data.Data!=null){
                    let date = new Date();
                    date.setMinutes(date.getMinutes() + 30);
                    setCookieUser('user', data.Data, { path: '/',expires:date });
                    localStorage.setItem("token",data.Data.token)
                    localStorage.setItem("user_name",data.Data.user_name);
                    setUserName(data.Data.user_name);
            }         
        })();
      }
      else{
        setUserName(cookiesUser?.user.user_name);
      }  
    }, []);

    

    return {
        cookiesUser, setCookieUser,
        userName, setUserName
    }
}

export default AppAdapter;