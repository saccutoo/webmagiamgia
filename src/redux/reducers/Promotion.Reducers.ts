import {
    UPDATE_PROMTION,
    GET_PROMTION
} from "../Types";
import { IListNew } from "../../interface/New";

const initial_state: IListNew = {
  datas: []
};

const PromotionReducer = (state = initial_state, action: any) => {
  switch (action.type) {
    case GET_PROMTION:
      return {
        ...state,
      };
    case UPDATE_PROMTION:
      return {
        ...state,
        datas: action.payload,
    };
    default:
      return state;
  }
};

export default PromotionReducer;
