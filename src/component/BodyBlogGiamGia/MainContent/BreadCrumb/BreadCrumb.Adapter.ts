import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { MENU_TYPE } from '../../../../config/AllStatusType';
import { IParam } from '../../../../interface/Param';

import {
    updateParam
  } from "../../../../redux/actions/Param.Action";
const BreadCrumbAdapter = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const clickBreadCrumb = (value: string) => {
        if (value==MENU_TYPE.HOME) {
            history.push("/");
        }
        else if(value==MENU_TYPE.GIAM_GIA){
            history.push("/ma-giam-gia/true");

            const initial_state: IParam = {
                Ishasbreadcrumb:"true",
                Menu:"ma-giam-gia",
                Merchantcode:""
              };
              
            dispatch(updateParam(initial_state));  
        }
        else if(value==MENU_TYPE.TIN_KHUYEN_MAI){
            history.push("/tin-khuyen-mai/true");

            const initial_state: IParam = {
                Ishasbreadcrumb:"true",
                Menu:"tin-khuyen-mai",
                Merchantcode:"",
                CodeNew:""
            };
              
            dispatch(updateParam(initial_state));  
        }
    }
    return {
        clickBreadCrumb:clickBreadCrumb
    }
}

export default BreadCrumbAdapter;