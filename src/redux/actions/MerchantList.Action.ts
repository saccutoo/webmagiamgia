import {
    GET_MERCHANT_LIST,
    UPDATE_MERCHANT_LIST,
    ADD_MERCHANT_LIST,
    ADD_MERCHANT_LISTS
} from "../Types";

import {IMerchantList} from "../../interface/MerchantList"

export const updateMerchantList = (payload: IMerchantList) => {
    return {
        type: UPDATE_MERCHANT_LIST,
        payload: payload
    };
};

export const getMerchantList = () => {
    return {
        type: GET_MERCHANT_LIST
    };
};

export const addItemMerchantList = (payload: IMerchantList) => {
    return {
        type: ADD_MERCHANT_LIST,
        payload: payload
    };
};

export const addMerchantList = (payload: IMerchantList[]) => {
    return {
        type: ADD_MERCHANT_LISTS,
        payload: payload
    };
};
