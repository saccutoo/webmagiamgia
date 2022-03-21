import {
  GET_PARAM,
  UPDATE_PARAM
} from "../Types";
import { IParam } from "../../interface/Param";

const initial_state: IParam = {
  Ishasbreadcrumb:"false",
  Menu:"",
  Merchantcode:"",
  CodeNew:"",
  Id:0
};

const ParamReducer = (state = initial_state, action: any) => {
  switch (action.type) {
    case GET_PARAM:
      return {
        ...state,
      };
    case UPDATE_PARAM:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default ParamReducer;
