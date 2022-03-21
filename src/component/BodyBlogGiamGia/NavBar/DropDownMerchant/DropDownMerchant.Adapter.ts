import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import MerchantListService from "../../../../service/MerchantList.Service"
import {getMerchantListDatabase,updateMerchantListDatabase,addMerchantListDatabase} from "../../../../redux/actions/MerchantListDatabase.Actionts";

const DropDownMerchantAdapter = () => {
    const dispatch = useDispatch();
    const [merchantList, setMerchantList] = useState<any>([]);
    
    useEffect(() => {
        (async () => {
               const datas= await MerchantListService().getInstance().getAllMerchantListFromDatabase();  
               if (datas!=null && datas.StatusCode==0 && datas.Data!=null && datas.Data.length>0){
                    setMerchantList(datas.Data);
                    dispatch(addMerchantListDatabase(datas.Data));  
               }         
        })();
    }, []);
    

    return {
        merchantList, setMerchantList,
    }
}

export default DropDownMerchantAdapter;