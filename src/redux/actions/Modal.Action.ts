import {
    UPDATE_MODAL,
    GET_MODAL
} from "../Types";

import {IModal} from "../../interface/Modal"

export const updateModal = (payload: IModal) => {
    return {
        type: UPDATE_MODAL,
        payload: payload
    };
};

export const getModal = () => {
    return {
        type: GET_MODAL
    };
};
