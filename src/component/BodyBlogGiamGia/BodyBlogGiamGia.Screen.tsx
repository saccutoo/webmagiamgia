import React,{useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import MerchantListScreen from '../BodyBlogGiamGia/MerchantList/MerchantList.Screen'
import MainContent from '../BodyBlogGiamGia/MainContent/MainContent.Screen'
import NavBarScreen from '../BodyBlogGiamGia/NavBar/NavBar.Screen'
import {getParam,updateParam} from "../../redux/actions/Param.Action";
import {getMerchantList,updateMerchantList} from "../../redux/actions/MerchantList.Action";
import ToastScreen from '../Library/Toast/Toast.Screen'
import FooterScreen from '../BodyBlogGiamGia/Footer/Footer.Screen'

import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
  import { useHistory } from 'react-router-dom';


function BodyBlogGiamGiaScreen (props: any){
    const history = useHistory();

    const clickHome = () => {
        history.push("/")
    }
    
    return (
        <>
            <NavBarScreen></NavBarScreen>
            <Switch>

                {/* <Route path="/:menu-khuyen-mai/:ishasbreadcrumb/:codenew" component={MainContent} ></Route> */}

                <Route path="/:menu/:ishasbreadcrumb/:code" component={MainContent} ></Route> 

                <Route path="/:menu/:ishasbreadcrumb" component={MainContent} ></Route> 
                               
                <Route path="/" component={MerchantListScreen} exact>   
                </Route>                      
            </Switch>

            <FooterScreen></FooterScreen>

            <ToastScreen></ToastScreen>
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

  export default connect(mapStateToProps, mapDispatchActionToProps)(BodyBlogGiamGiaScreen)