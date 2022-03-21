import {
  UPDATE_MODAL,
  GET_MODAL
} from "../Types";
import { IModal } from "../../interface/Modal";
const initial_state: IModal = {
   Property:{
    IsOpen:false,
    Content:null,
    ClassName:"",
    Data:null,
    Type:""
   }
};

const ModalReducer = (state = initial_state, action: any) => {
  switch (action.type) {

    case GET_MODAL:
      return {
        ...state,
      };
    case UPDATE_MODAL:
      return {
        ...state,
        Property: action.payload
      };
    default:
      return state;
  }
};

export default ModalReducer;
