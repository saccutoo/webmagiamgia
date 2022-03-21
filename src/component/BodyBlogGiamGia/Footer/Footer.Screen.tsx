import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import {getParam,updateParam} from "../../../redux/actions/Param.Action";
import FooterAdapter  from "./Footer.Adapter";
import "./Footer.css"
import { Facebook,Envelope } from '../../../config/Icon.Screen';
import { useHistory } from 'react-router-dom';
import {IParam} from '../../../interface/Param'
function FooterScreen (props: any){ 
    const history = useHistory();
    const {
      footer, setFooter
    } = FooterAdapter();
    
    useEffect(() => {
            
    },[]);

    const reloadWeb = () => {
      window.location.reload()
    }

    const viewMore = () => {
      
    }

    const viewFacebook = () => {
      window.open(process.env.REACT_APP_BASE_FACEBOOK);
    }

    const scrollToTop = (type:number) => {
      
      window.scrollTo(0, 0);

      setTimeout(() => {
        if(type==1){
          history.push("/ma-giam-gia/true");
          const initial_state: IParam = {
            Ishasbreadcrumb:"true",
            Menu:"ma-giam-gia",
            Merchantcode:""
          };
          
          props.updateParam(initial_state);
        }
        else{
          history.push("/");
          const initial_state: IParam = {
            Ishasbreadcrumb:"",
            Menu:"",
            Merchantcode:""
          };
          
          props.updateParam(initial_state);
        }
      }, 1200);
    
    }

    return (
        <>
           <div className="col-md-12 footer">
              <div className="col-md-12 footer-top">
                  <div className="col-md-12 center">
                        <div className="text">
                            <span >
                                <span className="text-click" onClick={()=>scrollToTop(0)}>Blog mã giảm </span>
                                <span>là website cập nhật và chia sẻ miễn phí mã giảm giá, tin khuyến mãi khi mua sắm tại các trang thương mại điện tử uy tín như Shopee, Lazada, Tiki,…..</span>
                                <span className="text-click">xem thêm </span>
                            </span>
                            <br></br>
                            <span className="icon">
                                 <Facebook onClick={()=>viewFacebook()}></Facebook>
                            </span>
                        </div>
                  </div>
              </div>
              <div className="col-md-12 footer-bottom">
                  <div className="content">
                      <div className="elementor">
                            <div className="title">
                                  <span>
                                      Đối Tác
                                  </span>
                            </div>
                            <div className="images">
                                  <img src="https://eu94j8zj53i.exactdn.com/wp-content/uploads/2021/06/1.shopee.png"></img>
                                  <img src="https://eu94j8zj53i.exactdn.com/wp-content/uploads/2021/06/1.lazada.png?strip=all&lossy=1&ssl=1"></img>
                                  <img src="https://eu94j8zj53i.exactdn.com/wp-content/uploads/2021/06/1.AT_.png?strip=all&lossy=1&ssl=1"></img>
                            </div>
                      </div>
                      <div className="elementor">
                          <div className="title">
                                    <span>
                                      Sơ Đồ Website
                                    </span>
                            </div>
                            <div className="menu-ul">
                                 <ul>
                                    <li onClick={()=>scrollToTop(0)}>Trang chủ</li>
                                    <li onClick={()=>scrollToTop(1)}>Mã giảm giá</li>
                                 </ul>
                            </div>
                      </div>
                      <div className="elementor">
                          <div className="title">
                                  <span>
                                      Liên hệ
                                  </span>
                            </div>
                            <div className="menu-ul">
                                 <ul>
                                    <li>Email: admin@blogmagiam.com</li>
                                 </ul>
                            </div>
                      </div>
                  </div>
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

  export default connect(mapStateToProps, mapDispatchActionToProps)(FooterScreen)

  