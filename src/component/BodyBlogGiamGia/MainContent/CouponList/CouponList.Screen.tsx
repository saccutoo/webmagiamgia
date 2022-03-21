import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import CouponListAdapter from "./CouponList.Adapter";
import {getParam,updateParam} from "../../../../redux/actions/Param.Action";
import {getMerchantList,updateMerchantList} from "../../../../redux/actions/MerchantList.Action";
import { IMerchantList } from "../../../../interface/MerchantList";
import CouponScreen from "./Coupon/Coupon.Screen";
import ReactLoading from "react-loading";
import MerchantListAdapter from '../../MerchantList/MerchantList.Adapter';


function CouponListScreen (props: any){

    const {
        couponList, setCouponList,
        count, setCount,
        getCouponByMerchant:getCouponByMerchant,
        page, setPage,
        pageSize, setPageSize,
        keyword, setKeyword,
        id, setId
    } = CouponListAdapter();

    const {
        merchantList, setMerchantList,
        getMerchantList:getMerchantList
    } = MerchantListAdapter();

    useEffect(() => {
          if(props.merchantList!=null && props.merchantList.datas!=null && props.merchantList.datas.length>0){
            setKeyword("");
            setPage(1);
            let data = props.merchantList.datas.filter((x:IMerchantList)=>{ return x.login_name==props.merchantcode});
            if(data!=null && data.length>0){
                setId(data[0].Id);
                getCouponByMerchant(false,keyword,data[0].Id,pageSize,1,props.merchantcode);
            }
          }   
          if (props.merchantcode!=null && props.merchantcode!='' && props.merchantList.length==0){
            getMerchantList();
          }
    }, [props.merchantcode,props.merchantList]);

  // useEffect(() => {
  //       if(props.merchantList!=null && props.merchantList.datas!=null && props.merchantList.datas.length>0){
  //         let data = props.merchantList.datas.filter((x:IMerchantList)=>{ return x.login_name==props.merchantcode});
  //         if(data!=null){
  //             getCouponByMerchant(false,keyword,data[0].Id,pageSize,page,props.merchantcode);
  //         }
  //       }     
  // }, [page,keyword]);


    return (
        <>
            <div className="row">          
                <div className="col-md-12">
                    {
                        couponList && couponList.length>0 ?
                          <CouponScreen id={id} page={page} pageSize={pageSize} keyword={keyword} count={count} couponList={couponList} merchantcode={props.merchantcode}  setPage={setPage} setKeyword={setKeyword} getCouponByMerchant={getCouponByMerchant}></CouponScreen> 
                          : ""                                     
                    }  

                    {
                        couponList && couponList.length==0 ?
                          <CouponScreen id={id} page={page} pageSize={pageSize} keyword={keyword} count={count} couponList={couponList} merchantcode={props.merchantcode}  setPage={setPage} setKeyword={setKeyword} getCouponByMerchant={getCouponByMerchant}></CouponScreen> 
                          : ""                                     
                    }       
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state: any) => {
    return {
        param: state.paramReducer,
        merchantList: state.merchantListReducer,
    }
  }

  
const mapDispatchActionToProps = (dispatch: any) => {
    return {
      // dispatching plain actions
      getParam: () => dispatch(getParam),
      getMerchantList: () => dispatch(getMerchantList),
      updateMerchantList: (value: any) => dispatch(updateMerchantList(value))
    }
  }

  export default connect(mapStateToProps, mapDispatchActionToProps)(CouponListScreen)

