import { useEffect, useState } from "react";
import Modal  from 'react-modal';
import { connect } from "react-redux";
import {
    getModal,
    updateModal
  } from "../../redux/actions/Modal.Action"
import { MODAL_TYPE } from "../../config/AllStatusType";
import CouponDetailScreen from "../BodyBlogGiamGia/MainContent/CouponList/Coupon/CouponDetail/CouponDetail.Screen";
import './Modal.css'
function ModalScreen(props: any) {
// //   useEffect(() => {
// //     setIsOpen(props.modal.Property.IsOpen);
// //   }, []);

//   const closeModal=()=>{
//     setIsOpen(false);
//   }

  return (
    <>
     <Modal 
        className={props.modal.Property.ClassName}
        isOpen={props.modal.Property.IsOpen}
        //onAfterOpen={afterOpenModal}
        //onRequestClose={closeModal}
        //style={customStyles}
        closeTimeoutMS={200}
        contentLabel="Example Modal"
        style={{
            overlay: {
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(255, 255, 255, 0.75)',
            },
            content: {
              position: 'absolute',
              top: '40px',
              left: '40px',
              right: '40px',
              bottom: '40px',
              border: '1px solid #ccc',
              background: '#fff',
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch',
              borderRadius: '4px',
              outline: 'none',
              padding: '20px'
            },       
          }}
      >
        {
            // props.modal.Property.Content ? <props.modal.Property.Content></props.modal.Property.Content> :""
        }
        {
           props.modal.Property.Type==MODAL_TYPE.COUPON_DETAL ? <CouponDetailScreen data={props.modal.Property.Data}></CouponDetailScreen> :null
        }
      
      </Modal >
    </>
  )
}

const mapStateToProps = (state: any) => {
    return {    
      modal: state.modalReducer
    }
}
const mapDispatchActionToProps = (dispatch: any) => {
    return {
      getModal: () => dispatch(getModal()),
      updateModal: (value: any) => dispatch(updateModal(value))
    }
  }
export default connect(mapStateToProps,mapDispatchActionToProps)(ModalScreen)

