import {
    UPDATE_PROMTION,
    GET_PROMTION
} from "../Types";

import {IListNew} from "../../interface/New"

export const updatePromotion = (payload: IListNew[]) => {
    return {
        type: UPDATE_PROMTION,
        payload: payload
    };
};

export const getPromotion = () => {
    return {
        type: GET_PROMTION
    };
};
