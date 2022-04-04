import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import CouponListAdapter from "./CouponList.Adapter";
import {getParam,updateParam} from "../../../../redux/actions/Param.Action";
import {getMerchantList,updateMerchantList} from "../../../../redux/actions/MerchantList.Action";
import { IMerchantList } from "../../../../interface/MerchantList";
import CouponScreen from "./Coupon/Coupon.Screen";
import ReactLoading from "react-loading";
import MerchantListAdapter from '../../MerchantList/MerchantList.Adapter';
import {getMerchantListDatabase,updateMerchantListDatabase,addMerchantListDatabase} from "../../../../redux/actions/MerchantListDatabase.Actionts";
import DropDownMerchantAdapter from "../../NavBar/DropDownMerchant/DropDownMerchant.Adapter";


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

    
    // const {
    //     merchantList, setMerchantList,
    //     getMerchantList:getMerchantList
    // } = MerchantListAdapter();


    const {
      run:run
  } = DropDownMerchantAdapter();

    useEffect(() => {
          // if(props.merchantList!=null && props.merchantList.datas!=null && props.merchantList.datas.length>0){
          //   setKeyword("");
          //   setPage(1);
          //   let data = props.merchantList.datas.filter((x:IMerchantList)=>{ return x.login_name==props.merchantcode});
          //   if(data!=null && data.length>0){
          //       setId(data[0].Id);
          //       getCouponByMerchant(false,keyword,data[0].Id,pageSize,1,props.merchantcode);
          //   }
          // }   
          // if (props.merchantcode!=null && props.merchantcode!='' && props.merchantList.length==0){
          //   getMerchantList();
          // }
          if(props.merchantListDatabase!=null && props.merchantListDatabase.datas!=null && props.merchantListDatabase.datas.length>0){
            setKeyword("");
            setPage(1);
            let data =props.merchantListDatabase.datas.filter((x:IMerchantList)=>{ return x.login_name==props.merchantcode});
            if(data!=null && data.length>0){
                setId(data[0].Id);
                getCouponByMerchant(false,keyword,data[0].Id,pageSize,1,props.merchantcode);
            }
          }  
         
          
    }, [props.merchantcode,props.merchantListDatabase]);


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
        merchantListDatabase:state.merchantListDatabaseReducer
    }
  }

  
const mapDispatchActionToProps = (dispatch: any) => {
    return {
      // dispatching plain actions
      getParam: () => dispatch(getParam),
      getMerchantList: () => dispatch(getMerchantList),
      updateMerchantList: (value: any) => dispatch(updateMerchantList(value)),
      getMerchantListDatabase: () => dispatch(getMerchantListDatabase),
    }
  }

  export default connect(mapStateToProps, mapDispatchActionToProps)(CouponListScreen)

