import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { IParam } from "../../interface/Param";
import { getParam } from "../../redux/actions/Param.Action";
import  TemplateAdapter  from "./Template.Adapter"
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TemplateScreen (props: any){

    
    const {
      template, setTemplate
    } = TemplateAdapter();
    

    useEffect(() => {
            
    },[]);

    const openLink = (link:string) => {
      window.open(link);
    }


    return (
        <>
           
           {
                    
           }
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
    }
  }

  export default connect(mapStateToProps, mapDispatchActionToProps)(TemplateScreen)

  