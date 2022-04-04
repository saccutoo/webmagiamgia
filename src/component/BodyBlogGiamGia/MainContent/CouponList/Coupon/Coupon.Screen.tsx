import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import CouponAdapter from "./Coupon.Adapter";
import {getMerchantList,updateMerchantList} from "../../../../../redux/actions/MerchantList.Action";
import CouponItemScreen from "./CouponItem/CouponItem.Screen";
import './Coupon.css'
import PaginationScreen from "../../../../Library/Pagination/Pagination.Screen";
import ReactLoading from "react-loading";
import CouponMerchantScreen from "../CouponMerchant/CouponMerchant.Screen";
import {getMerchantListDatabase,updateMerchantListDatabase,addMerchantListDatabase} from "../../../../../redux/actions/MerchantListDatabase.Actionts";
import {IMerchantList} from "../../../../../interface/MerchantList";
import InnerHTML from 'dangerously-set-html-content'
import { useHistory } from 'react-router-dom';
import { MENU_TYPE } from '../../../../../config/AllStatusType';
import { IParam } from '../../../../../interface/Param';

function CouponScreen (props: any){
  const history = useHistory();
  const dispatch = useDispatch();
    const {
        
    } = CouponAdapter();
    const [coupons, setCoupons] = useState<any>([]);
    const [index, setIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(1);
    const [value, setValue] = useState(props.keyword);
    const [merchantDatabase, setMerchantDatabase] = useState<IMerchantList>();

    useEffect(() => {
      if(props.couponList!=null && props.couponList.length>0){
        setCoupons(props.couponList);
      } 
      if(props.merchantListDatabase!=null && props.merchantListDatabase.datas!=null && props.merchantListDatabase.datas.length>0 ){
        const result =  props.merchantListDatabase.datas.map(function(item:IMerchantList, index:number){
          if(item && item.login_name==props.param.Merchantcode){
            setMerchantDatabase(item);
          }
        })
 
      } 
      timeoutFuntion();
    }, []);

    const timeoutFuntion=() =>{
      setTimeout(() => {
        if(props.couponList!=null && props.couponList.length>0){        
            setCoupons(props.couponList);
        } 
        else if(props.couponList==null || props.couponList.length==0){ 
          setCoupons([]); 
       }
       else{
          timeoutFuntion();
       }
        setIsLoading(0);
      }, 500);
    }

    const handleInputChange=(event:any) =>{
      setValue(event.target.value);
    }

    const couponList = (datas: any) => {
      return <div className="row-coupon"><CouponItemScreen datas={datas} isShowCode={false}></CouponItemScreen></div>;
    }

    const findCoupon = () => {
      props.setKeyword(value);
      props.getCouponByMerchant(false,value,props.id,props.pageSize,1,props.merchantcode);
      props.setPage(1);

    }
    
    const clickPage = (pagenew:number) => {
      props.getCouponByMerchant(false,value,props.id,props.pageSize,pagenew,props.merchantcode);
    }


    return (
        <>
            <div  className="col-md-10 coupon-content-title">
               {
                 merchantDatabase && merchantDatabase?.description1
                 ? <>
                      <div className="content-title">
                         <InnerHTML html={merchantDatabase?.description1 ? merchantDatabase?.description1 :""} /> 
                      </div>
                   </>
                 :""
               }
            </div>
            <div className="col-md-10 coupon">
                <div className="coupon-left">
                  <div className="coupon-header">
                      {/* <span >TÌM KIẾM MÃ GIẢM GIÁ {props.merchantcode.toUpperCase()}</span> */}
                      <span >MÃ GIẢM GIÁ {props.merchantcode.toUpperCase()}</span>
                  </div>
                  {/* <div className="coupon-filter row">
                    <div className="coupon-input col-md-12">
                      <div className="coupon-input-div">
                        <div className="div-input">
                          <input type="text" onKeyPress={(e) => {
                                            if (e.key === "Enter") {
                                                  findCoupon();
                                                }
                                            }}
                         name="value" value={value} onChange={handleInputChange} className="form-control" placeholder="Nhập link sản phẩm, tên nhãn hàng, tên sản phẩm để tìm kiếm"></input>  
                        </div>
                        <div className="coupon-button div-button">
                          <button className="btn btn-success " onClick={()=>findCoupon()}>Tìm kiếm</button>         
                        </div>                           
                      </div>
                    </div>
                  </div> */}

                  <div className="coupon-body col-md-12 row">
                  {                   
                    isLoading==0 && coupons && coupons.length>0 ?
                    coupons.map(function(item:any, i:number){
                      if(item)
                      {
                        return couponList(item); 
                      }                     
                    }) : isLoading==1 ?  
                    <div className="loading col-md-6"><ReactLoading type="spin" color="#0000FF" className="loading-spin" width="40px" height="40px"/></div> : ""

                  }                                       
                  </div>
                  <>
                    {
                      props.count > 0 && isLoading==0 ? <PaginationScreen id={props.id} value={value} merchantcode={props.merchantcode} total={props.count} page={props.page} pageSize={props.pageSize} setPage={props.setPage} clickPage={clickPage}></PaginationScreen> : isLoading==0 ? <div className="row col-md-12 no-pagination"><span>Không tìm thấy mã giảm</span></div> : ""
                    }     

                  </>
                </div>
                <div className="coupon-merchant-right">
                    <div className="coupon-merchant-list">                
                        {
                            props.merchantListDatabase!=null && props.merchantListDatabase.datas!=null && props.merchantListDatabase.datas.length>0 
                            ?
                            props.merchantListDatabase.datas.map(function(item:IMerchantList, index:number){
                                if(item && item.login_name!=props.param.Merchantcode){
                                    return  <CouponMerchantScreen data={item} index={index}></CouponMerchantScreen>
                                }
                              })
                            // props.merchantListDatabase.datas.map((item:any, index:number) => 
                            //     <CouponMerchantScreen data={item} index={index}></CouponMerchantScreen>
                            // )
                             :""
                        } 
                    </div>
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
      getMerchantList: () => dispatch(getMerchantList),
      updateMerchantList: (value: any) => dispatch(updateMerchantList(value)),
      getMerchantListDatabase: () => dispatch(getMerchantListDatabase),
    }
  }

  export default connect(mapStateToProps, mapDispatchActionToProps)(CouponScreen)

