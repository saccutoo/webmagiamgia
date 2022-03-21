import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import {IParam} from '../../../../interface/Param'
import NewService from '../../../../service/New.Service'

const NewPromotionAdapter = () => {
    const dispatch = useDispatch();
    const [newPromotions, setNewPromotions] = useState<any>();
    const [param, setParam] = useState<IParam>();
    
    useEffect(() => {
        getTopNewByType("1");
    }, []);
    

    const getTopNewByType = (type:string) => {
        (async () => {
            const datas= await NewService().getInstance().getTopNewByType(type);   
            if (datas!=null && datas.StatusCode==0 && datas.Data!=null){
                setNewPromotions(datas.Data); 
            }         
        })();
    }

    return {
        newPromotions, setNewPromotions
    }
}

export default NewPromotionAdapter;