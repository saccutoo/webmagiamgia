import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import {IMerchantList} from "../../../interface/MerchantList"
import MerchantListService from "../../../service/MerchantList.Service"
import {
    getMerchantList,
    updateMerchantList,
    addItemMerchantList,
    addMerchantList
  } from "../../../redux/actions/MerchantList.Action";


const MerchantListAdapter = () => {
    const dispatch = useDispatch();
    const [merchantList, setMerchantList] = useState<any>();

        useEffect(() => {
            (async () => {
                getMerchantList();        
            })();
        }, []);

    const getMerchantList = () => {
        (async () => {
            const datas= await MerchantListService().getInstance().getMerchantList();   
            if (datas!=null && datas.StatusCode==0 && datas.Data!=null && datas.Data.length>0){
                 setMerchantList(datas.Data);
                 dispatch(addMerchantList(datas.Data));  
            }         
     })();
    }   


    return {
        merchantList, setMerchantList,
        getMerchantList:getMerchantList,
    }
}

export default MerchantListAdapter