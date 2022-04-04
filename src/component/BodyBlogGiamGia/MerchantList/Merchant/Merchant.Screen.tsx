import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import MerchantAdapter from './Merchant.Adapter'
import {getMerchantListDatabase,updateMerchantListDatabase,addMerchantListDatabase} from "../../../../redux/actions/MerchantListDatabase.Actionts";

function MerchantScreen(props: any) {
    
    const {
        clickMerchant:clickMerchant
    } = MerchantAdapter();



    return (
        <> 
            {
              props.merchant!=null && props.merchant!='' ? <div className="col-sm-2 marchant" >
                                                                <a onClick={()=>clickMerchant(props.merchant)}>
                                                                        <img src={props.merchant.logo} width="100%" height="100%"/>
                                                                </a>
                                                            </div>
                                                        :''
           }      
               
        </>
    )
}
export default MerchantScreen;