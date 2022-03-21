import {
    GET_TEST,
    ADD_TEST,
    GET_TEST_FROM_API,
    UPDATE_TEST,
    UPDATE_ALL_TEST,
    DELETE_TEST
} from "../Types";

import {ITest,IListTest} from "../../interface/Test"

export const getTest = () => {
    return {
        type: GET_TEST
    };
};

export const addTest = (payload: ITest) => {
    return {
        type: ADD_TEST,
        payload: payload
    };
};

export const updateTest = (payload: ITest) => {
    return {
        type: UPDATE_TEST,
        payload: payload
    };
};

export const updateAllTest = (payload: ITest[]) => {
    return {
        type: UPDATE_ALL_TEST,
        payload: payload
    };
};

export const deleteTest = (payload: ITest) => {
    return {
        type: DELETE_TEST,
        payload: payload.key
    };
};