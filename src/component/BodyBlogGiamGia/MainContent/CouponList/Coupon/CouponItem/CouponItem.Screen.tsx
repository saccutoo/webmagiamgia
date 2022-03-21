import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import CouponItemAdapter from "./CouponItem.Adapter";
import { Clock,Copy } from '../../../../../../config/Icon.Screen';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import {
  getModal,
  updateModal
} from "../../../../../../redux/actions/Modal.Action"
import { IMerchantList } from "../../../../../../interface/MerchantList"
import { IClickMerchant} from "../../../../../../interface/ClickMerchant"
import { MODAL_TYPE } from "../../../../../../config/AllStatusType";
import axios from 'axios'


function CouponItemScreen (props: any){
  const [remain1, seRemain1] = useState<string>();
  const [remain2, seRemain2] = useState<string>();
  const [isShowCode, setIsShowCode] = useState<string>();

  const {
    addClickMerchant:addClickMerchant
} = CouponItemAdapter();

  useEffect(() => {
    
    if(props.datas){
      let valueRemain=props.datas.remain +"%" ;
      seRemain1(valueRemain);
      setIsShowCode(props.isShowCode);
    }  

  }, []);

  const showCode = (data: any) => {
    navigator.clipboard.writeText(props.datas.coupons[0].coupon_code);
    toast.success("Copy mã thành công!");
    setIsShowCode(data);
    setTimeout(() => {
      window.open(props.datas.aff_link);
    }, 500);
    (async () => {
      const res = await axios.get('https://geolocation-db.com/json/');   
      var newData:IClickMerchant={
        aff_link:props.datas.aff_link,
        merchant_name:props.datas.merchant,
        ip:res.data.IPv4
      };
      addClickMerchant(newData);       
    })();
    
  }

  const viewDetail = (data: IMerchantList) => {
    props.updateModal({IsOpen:true,Content:null,ClassName:"modal-common modal-medium modal-detail-coupon",Data:data,Type:MODAL_TYPE.COUPON_DETAL})
  }
    return (
        <>       
                {
                   props.datas ? 
                   <div className="coupon-item">
                      <div className="coupon-item-left">
                         <div className="left-image">
                              <img src={props.datas.image} width="100%" height="100%" onClick={()=>viewDetail(props.datas)} />
                           </div>
                          <div className="right-content">
                             <div className="name">
                               <u>
                                {
                                  props.datas.name.length > 100 ? <span onClick={()=>viewDetail(props.datas)}>{ props.datas.name.slice(0,70) }... </span> : <span onClick={()=>viewDetail(props.datas)}>{props.datas.name}</span>
                                }
                               </u>
                                
                             </div>
                             <div className="tag">
                                
                               <div className="name-tag" style={props.datas.merchant.length>6 ? {width:"120px"} : {width:"80px"}}>
                                  <span>{props.datas.merchant}</span>
                               </div>
                                
                             </div>
                              <div className="time-icon">
                                <div className="icon">
                                  <span>
                                      <Clock className="svg-icon"></Clock> 
                                  </span>
                                </div>
                                <div className="time_left">
                                  <span >{props.datas.time_left} </span>
                                </div>
                              </div>
                              <div className="remain-title">
                                  <span>Còn lại <span style={{color:"blue"}}>{props.datas.remain}%</span> </span>
                              </div>
                              <div className="progress">
                                <div className="progress-bar" style={{width:remain1}}></div>
                              </div>
                           </div>
                           
                          {
                            !isShowCode ? 
                            <div className="bottom-button">
                              <button className="btn btn-primary" onClick={()=>showCode(true)} >
                                <i><Copy className="svg-icon" style={{color:"white"}}></Copy> </i> 
                                <span>COPPY MÃ </span></button>
                            </div>
                             :  
                             <div className="bottom-code">
                               <span>{props.datas.coupons[0].coupon_code }</span>
                             </div>
                          }
                         
                      </div>                                    
                   </div>
                   :""
                }      
        </>
    )
}

const mapStateToProps = (state: any) => {
  return {    
    modal: state.modalReducer
  }
}
const mapDispatchActionToProps = (dispatch: any) => {
  return {
    getModal: () => dispatch(getModal()),
    updateModal: (value: any) => dispatch(updateModal(value))
  }
}
export default connect(mapStateToProps,mapDispatchActionToProps)(CouponItemScreen)

