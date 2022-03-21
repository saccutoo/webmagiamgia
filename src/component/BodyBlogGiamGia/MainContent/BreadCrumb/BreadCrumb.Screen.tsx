import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import BreadCrumbAdapter from './BreadCrumb.Adapter'
import { MENU_TYPE } from '../../../../config/AllStatusType';
import './BreadCrumb.css'
import Moment from 'react-moment';
import { IParam } from "../../../../interface/Param";
import { getParam } from "../../../../redux/actions/Param.Action";

function BreadCrumbScreen (props: any){
    const [dateNow, setDateNow] = useState<Date>(new Date());
    const [merchant, setMerchant] = useState<any>();
    const {
        clickBreadCrumb:clickBreadCrumb
    } = BreadCrumbAdapter();

    useEffect(() => {
          
    }, [props.param.merchantcode]);

    return (
        <>
            <div className="col-md-10 breadcrumb-content" >
                        <div className="row col-md-12">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb breadcrumb-text">
                                    <li className="breadcrumb-item hover"><a onClick={()=>clickBreadCrumb(MENU_TYPE.HOME)}>Trang chủ</a></li>

                                    {/* 1.Menu*/}
                                    
                                    {
                                        props.param.Menu=="ma-giam-gia" && (props.param.Merchantcode==null || props.param.Merchantcode=='')  ?                                         
                                            <li className="breadcrumb-item active" aria-current="page">
                                                Mã giảm giá
                                            </li>
                                        : 
                                        props.param.Menu=="ma-giam-gia" && props.param.Merchantcode  ?                                         
                                        <li className="breadcrumb-item hover " aria-current="page">
                                            <a onClick={()=>clickBreadCrumb(MENU_TYPE.GIAM_GIA)}>Mã giảm giá</a>
                                        </li>
                                        :""
                                    }

                                    {
                                        
                                        props.param.Menu=="tin-khuyen-mai" && (props.param.CodeNew==null || props.param.CodeNew=="" || props.param.CodeNew==undefined)  ?                                         
                                            <li className="breadcrumb-item active" aria-current="page">
                                                Tin khuyến mại
                                            </li>
                                        : 
                                        props.param.Menu=="tin-khuyen-mai" && props.param.CodeNew  ?                                         
                                            <li className="breadcrumb-item hover " aria-current="page">
                                                <a onClick={()=>clickBreadCrumb(MENU_TYPE.TIN_KHUYEN_MAI)}>Tin khuyến mại</a> 
                                            </li>
                                        :""
                                    }

                                    {/* Tiêu đề */}

                                    {
                                        props.param.Menu=="ma-giam-gia" && props.param.Merchantcode && <li className="breadcrumb-item active" aria-current="page">
                                        Mã giảm giá {props.param.Merchantcode} tháng {<Moment date={dateNow} format="MM/YYYY"></Moment>} cập nhật mới nhất</li>
                                    }
                                    
                                    {
                                        props.param.Menu=="tin-khuyen-mai" && props.param.CodeNew && 
                                        <li className="breadcrumb-item active" aria-current="page">
                                            {props.param.CodeNew}
                                        </li>
                                    }
                                </ol>
                            </nav>
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

  export default connect(mapStateToProps, mapDispatchActionToProps)(BreadCrumbScreen)
