import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { IParam } from "../../../../interface/Param";
import { getParam } from "../../../../redux/actions/Param.Action";
import  NewDetailAdapter  from "./NewDetail.Adapter"
import './NewDetail.css'
import InnerHTML from 'dangerously-set-html-content'
import { MERCHANT_NAME,MERCHANT_LOGIN_NAME } from "../../../../config/MerchantName";
function NewDetailScreen (props: any){

  const [typeMerchant, setTypeMerchant] = useState<any>();

  const {
      news, setNews,
      getNewById:getNewById,
      getNewByCode:getNewByCode
    } = NewDetailAdapter();

    // setParam(props.param);

    
    useEffect(() => {
      getNewByCode(props.param.CodeNew); 
         
    },[props.param.CodeNew]);


    return (
        <>
           {
             news && news?.title 
             ?
             <title> {news?.title } </title>
             :""
           }
           <div className="col-md-6 new-detail">
                <div className="new-detail-title">
                    <span>{news?.title}</span>
                </div>
                <div className="new-detail-content">
                    <InnerHTML html={news?.content ? news?.content :""} />   
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
    }
  }

  export default connect(mapStateToProps, mapDispatchActionToProps)(NewDetailScreen)

  