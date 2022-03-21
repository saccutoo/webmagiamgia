import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { IMerchantList } from '../../../../interface/MerchantList';
import {
    getParam,
    updateParam
  } from "../../../../redux/actions/Param.Action";
import { IParam } from "../../../../interface/Param";

const MerchantAdapter = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const clickMerchant = (data: IMerchantList) => {
        var login_name=data.login_name;
        history.push("/ma-giam-gia/true/" + login_name);

        const initial_state: IParam = {
            Ishasbreadcrumb:"true",
            Menu:"ma-giam-gia",
            Merchantcode:login_name
          };
        dispatch(updateParam(initial_state));
 
    }
    return {
        clickMerchant:clickMerchant
    }
}

export default MerchantAdapter;