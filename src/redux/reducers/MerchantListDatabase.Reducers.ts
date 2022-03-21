import {
  GET_MERCHANT_LIST_FROM_DATABASE,
  UPDATE_MERCHANT_LIST_FROM_DATABASE,
  ADD_MERCHANT_LIST_FROM_DATABASE,
  ADD_MERCHANT_LISTS_FROM_DATABASE
} from "../Types";
import { IMerchantList,IListMerchantList } from "../../interface/MerchantList";

const initial_state: IListMerchantList = {
  datas: []
};

const ParamReducer = (state = initial_state, action: any) => {
  switch (action.type) {
    case GET_MERCHANT_LIST_FROM_DATABASE:
      return {
        ...state,
      };
    case UPDATE_MERCHANT_LIST_FROM_DATABASE:
      return {
        ...state,
        datas: state.datas?.concat(action.payload),
    };
    case ADD_MERCHANT_LIST_FROM_DATABASE:
      return {
        ...state,
        ...action.payload
      };
      case ADD_MERCHANT_LISTS_FROM_DATABASE:
        return {
          ...state,
          datas: action.payload,
        };
    default:
      return state;
  }
};

export default ParamReducer;
