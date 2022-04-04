import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import CouponListService from "../../../../service/CouponList.Service"

const CouponListAdapter = () => {
    const [couponList, setCouponList] = useState<any>();
    const [count, setCount] = useState<number>(0);
    const [page, setPage] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(10);
    const [keyword, setKeyword] = useState<string>("");
    const [id, setId] = useState<string>("");

    const getCouponByMerchant= (is_next_day_coupon:boolean,keyword:string,merchant:string,limit:number,page:number,marchant:string)=>{
        (async () => {
            const datas= await CouponListService().getInstance().getCouponFilterByMerchant(is_next_day_coupon,keyword,merchant,limit,page,marchant);  
            if (datas!=null && datas.StatusCode==0 && datas.Data!=null && datas.Data.length>0){
                setCouponList([]);
                setCouponList(datas.Data);
                setCount(datas.Count);
            } 
            else{
                setCouponList([]);
                setCount(0);
            }        
     })();
    }
   
    return {
        couponList, setCouponList,
        count, setCount,
        getCouponByMerchant:getCouponByMerchant,
        page, setPage,
        pageSize, setPageSize,
        keyword, setKeyword,
        id, setId
    }
}

export default CouponListAdapter;