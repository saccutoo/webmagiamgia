import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import MerchantListAdapter from './MerchantList.Adapter';
import MerchantScreen from '../MerchantList/Merchant/Merchant.Screen'
import './MerchantList.css';
import PromotionScreen from '../Promotion/Promotion.Screen'
import NewPromotionScreen from '../New/NewPromotion/NewPromotion.Screen'
import {getMerchantListDatabase,updateMerchantListDatabase,addMerchantListDatabase} from "../../../redux/actions/MerchantListDatabase.Actionts";

function MerchantListScreen(props: any) {
    const {
        merchantList, setMerchantList
    } = MerchantListAdapter();
    return (
        <> 
             {
                <title>Blog Mã Giảm - Săn hàng giảm giá, mua sắm thông minh </title>
             } 
            <PromotionScreen></PromotionScreen>
            
            <div className="">
                
                {/* <div className="chương trình khuyến mãi"></div> */}
                <div className="nav-merchant-list"> 
                    <div className="row col-md-10 merchant-list" >
                        <div className="row col-md-12 title">
                            {
                                <span >MÃ GIẢM GIÁ</span>                   
                            }  
                            </div>   
                            <div className="row content">
                            {
                                    props!=null &&  props.merchantListDatabase && props.merchantListDatabase.datas &&
                                    props.merchantListDatabase.datas.map(function(item:any, i:number){
                                        if(item){
                                            item.merchant=item.login_name;
                                            return <MerchantScreen merchant={item}></MerchantScreen>
                                        }
                                    })                      
                            }  
                        </div>                              
                    </div>                   
                </div>
            </div>

            <NewPromotionScreen></NewPromotionScreen>
        </>
    )
}

//export default MerchantListScreen;
const mapStateToProps = (state: any) => {
    return {
        merchantListDatabase:state.merchantListDatabaseReducer
    }
  }
const mapDispatchActionToProps = (dispatch: any) => {
    return {
      // dispatching plain actions
      getMerchantListDatabase: () => dispatch(getMerchantListDatabase),
    }
  }

  export default connect(mapStateToProps, mapDispatchActionToProps)(MerchantListScreen)