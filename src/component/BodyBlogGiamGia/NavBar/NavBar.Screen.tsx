import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import img from '../../../../src/274000623_240771864930781_4618028934102902937_n.png'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
  import { useHistory } from 'react-router-dom';
  import {getParam,updateParam} from "../../../redux/actions/Param.Action";
  import {getMerchantList,updateMerchantList} from "../../../redux/actions/MerchantList.Action";
  import { IMerchantList } from "../../../interface/MerchantList";
  import DropDownMerchantScreen  from "../NavBar/DropDownMerchant/DropDownMerchant.Screen";
  import { IParam } from '../../../interface/Param'
  import { MENU_TYPE } from '../../../config/AllStatusType'
  const delay = 10;

function NavBarScreen (props: any){
    const history = useHistory();
    const [isShowDropDown, setIsShowDropDown] = useState<boolean>(false);
    const [isShowNavBar, setIsShowNavBar] = useState<boolean>(false);

    const clickMenu = (value:string) => {
        if(value==MENU_TYPE.HOME){
            history.push("/");
            const initial_state: IParam = {
                Ishasbreadcrumb:"",
                Menu:"",
                Merchantcode:""
              };    
            props.updateParam(initial_state);      
        }

        if(value==MENU_TYPE.GIAM_GIA){
            const initial_state: IParam = {
                Ishasbreadcrumb:"true",
                Menu:"ma-giam-gia",
                Merchantcode:""
              };
              props.updateParam(initial_state);          
        }

        if(value==MENU_TYPE.TIN_KHUYEN_MAI){
            history.push("/tin-khuyen-mai/true");
            const initial_state: IParam = {
                Ishasbreadcrumb:"true",
                Menu:"tin-khuyen-mai",
                CodeNew:"",
                Merchantcode:"",
              };
              props.updateParam(initial_state);          
        }
    }

    // const clickHome = () => {
    //     history.push("/");
    //     const initial_state: IParam = {
    //         Ishasbreadcrumb:"",
    //         Menu:"",
    //         Merchantcode:""
    //       };
          
    //     props.updateParam(initial_state);
    // }
    
    const changeShowDropDown = () => {       
        setIsShowDropDown(!isShowDropDown);
    }

    const changeShowNavBar = () => {       
        setIsShowNavBar(!isShowNavBar);
    }
  
    useEffect(() => {
        
        if(isShowNavBar==true){
            let timer1 = setTimeout(() => setIsShowNavBar(false), delay * 1000);
      
            return () => {
                setIsShowNavBar(false);
                clearTimeout(timer1);;
            };
        }
        
    },[isShowNavBar]);

    return (
        <>
            <div className="col-md-12">
               <div className="col-md-11 nav-bar">
                <div className="m-4">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container-fluid">
                                <a href="#" onClick={()=>clickMenu(MENU_TYPE.HOME)} className="navbar-brand">
                                    <img src={img} className="image-trademark"></img>
                                </a>
                                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" onClick={()=>changeShowNavBar()}>
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarCollapse" style={isShowNavBar==true ? {display:"block"} : {display:"none"}} >
                                    {/* <div className="navbar-nav">
                                        <a href="#" onClick={()=>clickHome()} className="nav-item nav-link active">Trang chủ</a>         
                                        <a href="#" className="nav-item nav-link">Mã giảm giá</a>                          
                                    </div> */}

                                    <div className="navbar-nav ms-auto">
                                        <a href="#" onClick={()=>clickMenu(MENU_TYPE.HOME)} className ={props.param.Menu=="" || props.param.Menu==null || props.param.Menu==undefined ? "nav-item nav-link active" : "nav-item nav-link" }>Trang chủ</a>         
                                        <div className="dropdown dropdown-menu-merchant">
                                            <a className={props.param.Menu=="ma-giam-gia" && props.param.Ishasbreadcrumb=="true" ? "dropdown-toggle nav-item nav-link active" : "dropdown-toggle nav-item nav-link" } onClick={()=>changeShowDropDown()}  role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                                Mã giảm giá
                                            </a>
                                            <>
                                                {
                                                    <DropDownMerchantScreen isShowDropDown={isShowDropDown} setIsShowDropDown={setIsShowDropDown}></DropDownMerchantScreen>
                                                }
                                            </>
                                        </div>      
                                        
                                        {/* <a href="#" onClick={()=>clickMenu(MENU_TYPE.TIN_KHUYEN_MAI)} className={props.param.Menu=="tin-khuyen-mai" && props.param.Ishasbreadcrumb=="true" ? "nav-item nav-link active" : "nav-item nav-link" }>Tin khuyến mại</a>                            */}
                                        {/* <a href="#" className="nav-item nav-link">Login</a> */}
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
               </div>
            </div>
        </>
    )
}

const mapStateToProps = (state: any) => {
    return {
        param: state.paramReducer,
        merchantList: state.merchantListReducer,
    }
  }

  
const mapDispatchActionToProps = (dispatch: any) => {
    return {
      // dispatching plain actions
      getParam: () => dispatch(getParam),
      getMerchantList: () => dispatch(getMerchantList),
      updateParam: (value: any) => dispatch(updateParam(value))
    }
  }

  export default connect(mapStateToProps, mapDispatchActionToProps)(NavBarScreen)