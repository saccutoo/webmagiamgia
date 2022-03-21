import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import MerchantListAdapter from './MerchantList.Adapter';
import MerchantScreen from '../MerchantList/Merchant/Merchant.Screen'
import './MerchantList.css';
import PromotionScreen from '../Promotion/Promotion.Screen'
import NewPromotionScreen from '../New/NewPromotion/NewPromotion.Screen'

function MerchantListScreen(props: any) {
    const {
        merchantList, setMerchantList
    } = MerchantListAdapter();
    return (
        <> 
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
                                    merchantList!=null &&
                                    merchantList.map(function(item:any, i:number){
                                        if(item){
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

export default MerchantListScreen;