import {
  GET_MERCHANT_LIST,
  UPDATE_MERCHANT_LIST,
  ADD_MERCHANT_LIST,
  ADD_MERCHANT_LISTS
} from "../Types";
import { IMerchantList,IListMerchantList } from "../../interface/MerchantList";

const initial_state: IListMerchantList = {
  datas: []
};

const ParamReducer = (state = initial_state, action: any) => {
  switch (action.type) {
    case GET_MERCHANT_LIST:
      return {
        ...state,
      };
    case ADD_MERCHANT_LIST:
      return {
        ...state,
        datas: state.datas?.concat(action.payload),
    };
    case UPDATE_MERCHANT_LIST:
      return {
        ...state,
        ...action.payload
      };
      case ADD_MERCHANT_LISTS:
        return {
          ...state,
          datas: action.payload,
        };
    default:
      return state;
  }
};

export default ParamReducer;
