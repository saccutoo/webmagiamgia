import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import NewService from "../../../service/New.Service"
import {INew} from "../../../interface/New"
import {
    updatePromotion
} from "../../../redux/actions/Promotion.Action";
const PromotionAdapter = () => {
    const dispatch = useDispatch();
    const [promotions, setPromotions] = useState<INew[]>([]);
    
    // useEffect(() => {
    //     runAuto();
    // }, []);
    
    const runAuto=()=>{
        (async () => {
            const datas= await NewService().getInstance().getTopNewByType("2");  
            if (datas!=null && datas.StatusCode==0 && datas.Data!=null && datas.Data.length>0){
                 setPromotions(datas.Data);     
                 dispatch(updatePromotion(datas.Data));  
          
            }         
     })();
    }

    return {
        promotions, setPromotions,
        runAuto:runAuto
    }
}

export default PromotionAdapter;