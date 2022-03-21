import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import img from '../../130289565_194968775632310_804802940035357581_n.png'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
  import { useHistory } from 'react-router-dom';
  import {getParam,updateParam} from "../../../../redux/actions/Param.Action";
  import {getMerchantList,updateMerchantList} from "../../../../redux/actions/MerchantList.Action";
  import { IMerchantList } from "../../../../interface/MerchantList";
  import { IParam } from "../../../../interface/Param";
  import DropDownMerchantAdapter  from "./DropDownMerchant.Adapter";
  const delay = 5;

function DropDownMerchantScreen (props: any){
    const history = useHistory();

    const {
        merchantList, setMerchantList
    } = DropDownMerchantAdapter();
    
    useEffect(() => {
        
        if(props.isShowDropDown==true){
            let timer1 = setTimeout(() => props.setIsShowDropDown(false), delay * 1000);
      
            return () => {
                props.setIsShowDropDown(false)
                clearTimeout(timer1);
            };
        }
        
    },[props.isShowDropDown]);


    const clickDropDown = (data:IMerchantList) => {

        history.push("/ma-giam-gia/true/" + data.login_name);
        const initial_state: IParam = {
            Ishasbreadcrumb:"true",
            Menu:"ma-giam-gia",
            Merchantcode:data.login_name
        };
        props.updateParam(initial_state);
    }
    
    return (
        <>
           
           {

              merchantList && merchantList.length>0 &&
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink" style={props.isShowDropDown==true ? {display:"block"} : {display:"none"} }>
                    {
                        merchantList.map(function(item:IMerchantList, i:number){
                            // let data = props.merchantList.datas.filter((x:IMerchantList)=>{ return x.id==item.merchant_id});
                            if(item && item.is_hide==1){
                                return  <li onClick={()=>props.setIsShowDropDown(false)}>
                                    <a className={item.login_name==props.param.Merchantcode ? "dropdown-item active":"dropdown-item" } onClick={()=>clickDropDown(item)}>
                                        <div className="image">
                                            <img src={
                                                item.logo_coupon ? item.logo_coupon : item.logo
                                            } width="100%" height="100%">

                                            </img>
                                        </div>               
                                        <div className="text">
                                            <span>{item.display_name}</span>
                                        </div>               
                                    </a>
                                </li>
                            }
                        })  
                    }  
              </ul>
              
            }
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
      updateParam: (value: any) => dispatch(updateParam(value))
    }
  }

  export default connect(mapStateToProps, mapDispatchActionToProps)(DropDownMerchantScreen)