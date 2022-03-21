import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import {
  getModal,
  updateModal
} from "../../../../../../redux/actions/Modal.Action"
import { IMerchantList } from "../../../../../../interface/MerchantList"
import { ICountpon } from "../../../../../../interface/Coupon"
import './CouponDetail.css'
import { Clock,Copy } from '../../../../../../config/Icon.Screen';
import axios from 'axios'
import { IClickMerchant} from "../../../../../../interface/ClickMerchant"
import CouponDetailAdapter from "./CouponDetail.Adapter"

function CouponDetailScreen (props: any){

  const [merchant, setMerchant] = useState<ICountpon>(props.data);
  const [isShowCode, setIsShowCode] = useState<boolean>(false);

  const {
    addClickMerchant:addClickMerchant
} = CouponDetailAdapter();
  // useEffect(() => {
  //   
  //   if(props.data)
  //   {
  //     setMerchant(props.data);
  //   }
  // }, []);

  const showCode = (data: any) => {
    const value=merchant.coupons!=null && merchant.coupons.length>0 ? merchant.coupons[0].coupon_code : "123"
    navigator.clipboard.writeText(value?.toString());
    toast.success("Copy mã thành công!");
    setIsShowCode(data);
    setTimeout(() => {
      window.open(merchant.aff_link);
    }, 500);

    (async () => {
      debugger
      const res = await axios.get('https://geolocation-db.com/json/');       
      var newData:IClickMerchant={
        aff_link:merchant.aff_link,
        merchant_name:merchant.merchant,
        ip:res.data.IPv4
      };
      addClickMerchant(newData);       
    })();
  }

  const closeModal = () => {
    props.updateModal({IsOpen:false,Content:null,ClassName:"",Data:null,Type:null})
  }
    return (
        <>       
                {
                   merchant ? 
                      <>
                        <div className="modal-header">                        
                          <div className="modal-header-image">
                              <img src={
                                          merchant.image
                                       } width="100%" height="100%">
                               </img>
                          </div>
                          <div className="modal-header-text">
                                  <div className="name">
                                    {merchant.name}
                                  </div>  
                                  <div className="tag">
                                    <div className="tag-item">
                                        {merchant.merchant}
                                    </div> 
                                  </div>    
                          </div>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={()=>closeModal()}></button>
                        </div>
                  
                        <div className="modal-body">
                            <div className="Warning">
                                  <i>Số lượt sử dụng có hạn, chương trình và mã có thể kết thúc khi hết lượt ưu đãi hoặc khi hết hạn ưu đãi, tùy điều kiện nào đến trước.</i>
                             </div>  
                             <div className="time">
                                <div className="icon">
                                    <span>
                                        <Clock className="svg-icon"></Clock> 
                                    </span>
                                  </div>
                                  <div className="time_left">
                                    <span >{merchant.time_left} </span>
                                  </div>
                             </div> 
                             <div className="decription-title">
                                  <span > Mô tả chi tiết </span>
                             </div>
                             <div className="decription-content">
                                  <span > {merchant.content} </span>
                             </div>

                             <div className="decription-content">
                                  <span > {merchant.content} </span>
                             </div> 
                             <div className="coupon">
                                  {
                                    isShowCode==false ?
                                    <div className="button">                                  
                                      <button className="btn btn-primary" onClick={()=>showCode(true)} >
                                            <i><Copy className="svg-icon" style={{color:"white"}}></Copy> </i> 
                                            <span>COPPY MÃ </span>
                                        </button>
                                    </div>
                                    :""
                                  }
                                  
                                  {
                                    isShowCode==true ?                                   
                                      <div className="code">
                                      <span>{merchant.coupons !=null && merchant.coupons.length>0 && merchant.coupons[0].coupon_code}</span>
                                      </div>
                                    :
                                    ""
                                  }

                             </div>       
                        </div>                                     
                      </>
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
export default connect(mapStateToProps,mapDispatchActionToProps)(CouponDetailScreen)

