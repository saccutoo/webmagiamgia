import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { IMerchantList } from '../../../../../interface/MerchantList';
import {
  getParam,
  updateParam
} from "../../../../../redux/actions/Param.Action";
import { IParam } from "../../../../../interface/Param";

function CouponMerchantScreen(props: any) {
  const history = useHistory();
  const dispatch = useDispatch();

  const clickMerchant = (data: IMerchantList) => {
    window.scrollTo(100, 100);
    var login_name=data.login_name;
    history.push("/ma-giam-gia/true/" + login_name);
    const initial_state: IParam = {
        Ishasbreadcrumb:"true",
        Menu:"ma-giam-gia",
        Merchantcode:login_name
      };
    dispatch(updateParam(initial_state));

  }
    return (
        <> 
          {
            props.data.is_hide==1 ? 
              <div className={props.index==0 ? "coupon-merchant" : "coupon-merchant margin"} >
                <a onClick={()=>clickMerchant(props.data)}>
                    <img src={props.data.logo_coupon ? props.data.logo_coupon : props.data.logo} width="100%" height="100%"/>
                </a>        
            </div>
           :""
          }
           
        </>
    )
}


  export default CouponMerchantScreen