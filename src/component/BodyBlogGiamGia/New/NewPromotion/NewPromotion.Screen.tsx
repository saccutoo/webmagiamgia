import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { IParam } from "../../../../interface/Param";
import { INew } from "../../../../interface/New";
import { getParam } from "../../../../redux/actions/Param.Action";
import  NewPromotionAdapter  from "./NewPromotion.Adapter"
import "./NewPromotion.css"
import InnerHTML from 'dangerously-set-html-content'
import { ArrowRightSolid } from '../../../../config/Icon.Screen'
import { useHistory } from 'react-router-dom';

function NewPromotionScreen (props: any){
    const history = useHistory();
    const {
      newPromotions, setNewPromotions
    } = NewPromotionAdapter();
    

    useEffect(() => {
            
    },[]);

    const openNewDetail = (data:INew) => {
        history.push("/tin-khuyen-mai/true/" + data.code);
    }


    return (
        <>        
           <div className="new-list"> 
                    <div className="row col-md-10 new-list-center" >
                        <div className="row col-md-12 title">
                            {
                                <span >TIN KHUYẾN MÃI</span>                   
                            }  
                            </div>   
                            <div className="list-new">
                            {
                                    newPromotions!=null &&
                                    newPromotions.map(function(item:INew, i:number){
                                        if(item){
                                            return <div className="new-promotion-item" onClick={()=>openNewDetail(item)}>
                                                       <div className="padding">
                                                            <div className="padding1">
                                                                <div className="type-new">
                                                                    <span>{item.type_name}</span>
                                                                </div>
                                                                <div className="new-title">
                                                                    <span>{item.title}</span>
                                                                </div>

                                                                <div className="new-content">                                                             

                                                                    <InnerHTML html={item.content } />   
                                                                    {/* <InnerHTML html={item?.content ? item.content :""} />  */}
                                                                </div> 

                                                                <div className="new-icon">
                                                                    <ArrowRightSolid></ArrowRightSolid>
                                                                </div> 
                                                            </div> 

                                                       </div>
                                                   </div>
                                                   
                                        }
                                    }) 
                                                         
                            }  
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
    }
  }

  export default connect(mapStateToProps, mapDispatchActionToProps)(NewPromotionScreen)

  