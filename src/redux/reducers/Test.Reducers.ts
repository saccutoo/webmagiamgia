import {
  GET_TEST,
  ADD_TEST,
  UPDATE_TEST,
  UPDATE_ALL_TEST,
  DELETE_TEST,
  GET_TEST_FROM_API,
} from "../Types";
import { IListTest } from "../../interface/Test";

const initial_state: IListTest = {
  datas: [],
};

const TestReducer = (state = initial_state, action: any) => {
  switch (action.type) {

    case GET_TEST:
      return {
        ...state,
      };
    case ADD_TEST:
      return {
        ...state,
        datas: state.datas?.concat(action.payload),
      };
    case UPDATE_TEST:
      return {
        ...state,
        datas: state.datas?.map((item, i) =>
          item.key === action.payload?.key ? action.payload : item
        ),
      };
    case UPDATE_TEST:
      return {
        ...state,
        datas: state.datas?.map((item, i) =>
          item.key === action.payload?.key ? action.payload : item
        ),
      };
    case UPDATE_ALL_TEST:
      return {
        ...state,
        datas:action.payload,
      };
    case DELETE_TEST:
      return {
        ...state,
        datas: state.datas?.filter((s) => s.key != action.payload?.key),
      };
    default:
      return state;
  }
};

export default TestReducer;
