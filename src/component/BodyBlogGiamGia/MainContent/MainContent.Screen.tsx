import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";

import './MainContent.css';
import BreadCrumbScreen from "./BreadCrumb/BreadCrumb.Screen";
import MainContentAdapter from "./MainContent.Adapter";
import {
    getParam,
    updateParam
  } from "../../../redux/actions/Param.Action";
import { useParams } from "react-router-dom";
import { IParam } from "../../../interface/Param";
import CouponListScreen from "../MainContent/CouponList/CouponList.Screen";
import NewScreen from "../New/NewDetail/NewDetailScreen";

function MainContentScreen (props: any){

    const {
       
    } = MainContentAdapter();
    
    useEffect(() => {   
        const initial_state: IParam = {
            Ishasbreadcrumb:props.match.params.ishasbreadcrumb,
            Menu:props.match.params.menu,
            Merchantcode:props.match.params.code,
            CodeNew:props.match.params.code        
          };
          
        props.updateParam(initial_state);
    }, []);

    return (
        <>
            <div className="">
                <div className="main-content"> 
                {
                    props.param.Ishasbreadcrumb !=undefined &&  props.param.Ishasbreadcrumb!=null &&  props.param.Ishasbreadcrumb=="true" ?  <BreadCrumbScreen> </BreadCrumbScreen> : ""
                }

                {
                     props.param.Ishasbreadcrumb !=undefined &&  
                     props.param.Ishasbreadcrumb!=null &&  
                     props.param.Ishasbreadcrumb=="true" && 
                     props.param.Menu=="ma-giam-gia" &&
                     props.param.Merchantcode!=null &&
                     props.param.Merchantcode!='' &&
                     <CouponListScreen merchantcode={props.param.Merchantcode}></CouponListScreen>
                }  

                {
                     props.param.Ishasbreadcrumb !=undefined &&  
                     props.param.Ishasbreadcrumb!=null &&  
                     props.param.Ishasbreadcrumb=="true" && 
                     props.param.Menu=="tin-khuyen-mai" &&
                     props.param.CodeNew !=null &&
                     props.param.CodeNew !='' &&
                     <NewScreen></NewScreen>
                }      


                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state: any) => {
    return {
        param: state.paramReducer,
    }
  }

  
const mapDispatchActionToProps = (dispatch: any) => {
    return {
      // dispatching plain actions
      getParam: () => dispatch(getParam),
      updateParam: (value: any) => dispatch(updateParam(value))
    }
  }

  export default connect(mapStateToProps, mapDispatchActionToProps)(MainContentScreen)

