import {
    UPDATE_PARAM,
    GET_PARAM
} from "../Types";

import {IParam} from "../../interface/Param"

export const updateParam = (payload: IParam) => {
    return {
        type: UPDATE_PARAM,
        payload: payload
    };
};

export const getParam = () => {
    return {
        type: GET_PARAM
    };
};
