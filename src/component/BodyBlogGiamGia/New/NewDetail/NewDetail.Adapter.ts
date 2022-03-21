import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import NewService from '../../../../service/New.Service'
import { IParam } from '../../../../interface/Param'
import { INew } from '../../../../interface/New'

const NewDetailAdapter = () => {
    const dispatch = useDispatch();
    const [news, setNews] = useState<INew>();

    useEffect(() => {
        
    }, []);
    
    const getNewById = (id:number) => {
        (async () => {
            const datas= await NewService().getInstance().getNewById(id);   

            if (datas!=null && datas.StatusCode==0 && datas.Data!=null && datas.Data.length>0){
                setNews(datas.Data); 
            }         
        })();
    }

    const getNewByCode = (code:string) => {
        (async () => {
            const datas= await NewService().getInstance().getNewByCode(code);   
            if (datas!=null && datas.StatusCode==0 && datas.Data!=null){
                setNews(datas.Data); 
            }         
        })();
    }
    
    return {
        news, setNews,
        getNewById:getNewById,
        getNewByCode:getNewByCode
    }
}

export default NewDetailAdapter