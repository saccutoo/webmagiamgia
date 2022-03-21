import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import ClickMerchantService from "../../../../../../service/ClickMerchant.Service"
import { toast } from 'react-toastify';
import { IClickMerchant} from "../../../../../../interface/ClickMerchant"

const CouponItemAdapter = () => {
   
    const addClickMerchant = (data:IClickMerchant) => {
        (async () => {
            await ClickMerchantService().getInstance().addClickMerchant(data);          
        })();

    }

    return {
        addClickMerchant:addClickMerchant
    }
}

export default CouponItemAdapter