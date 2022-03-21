import {
    GET_MERCHANT_LIST_FROM_DATABASE,
    UPDATE_MERCHANT_LIST_FROM_DATABASE,
    ADD_MERCHANT_LIST_FROM_DATABASE,
    ADD_MERCHANT_LISTS_FROM_DATABASE
} from "../Types";

import {IMerchantList} from "../../interface/MerchantList"

export const updateMerchantListDatabase = (payload: IMerchantList) => {
    return {
        type: UPDATE_MERCHANT_LIST_FROM_DATABASE,
        payload: payload
    };
};

export const getMerchantListDatabase = () => {
    return {
        type: GET_MERCHANT_LIST_FROM_DATABASE
    };
};

export const addItemMerchantListDatabase = (payload: IMerchantList) => {
    return {
        type: ADD_MERCHANT_LIST_FROM_DATABASE,
        payload: payload
    };
};

export const addMerchantListDatabase = (payload: IMerchantList[]) => {
    return {
        type: ADD_MERCHANT_LISTS_FROM_DATABASE,
        payload: payload
    };
};
