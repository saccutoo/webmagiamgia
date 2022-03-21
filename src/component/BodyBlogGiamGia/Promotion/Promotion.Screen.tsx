import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import img from '../../130289565_194968775632310_804802940035357581_n.png'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
  import { useHistory } from 'react-router-dom';
  import {getParam,updateParam} from "../../../redux/actions/Param.Action";
  import { INew } from "../../../interface/New"
  import { IParam } from "../../../interface/Param";
  import PromotionAdapter  from "./Promotion.Adapter";
  import "./Promotion.css"
  import Carousel from 'react-multi-carousel';
  import 'react-multi-carousel/lib/styles.css';


function PromotionScreen (props: any){
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 10,
      slidesToSlide: 1 // optional, default to 1.
    },
    desktop: {
      breakpoint: { max: 3000, min: 1830 },
      items: 7,
      slidesToSlide: 1 // optional, default to 1.
    },
    desktop1: {
      breakpoint: { max: 1830, min: 1500 },
      items: 6,
      slidesToSlide: 1 // optional, default to 1.
    },
    desktop2: {
      breakpoint: { max: 1500, min: 1300 },
      items: 5,
      slidesToSlide: 1 // optional, default to 1.
    },
    desktop3: {
      breakpoint: { max: 1300, min: 996 },
      items: 4,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 996, min: 620 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 620, min: 0 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

    const {
        promotions, setPromotions
    } = PromotionAdapter();
    
    useEffect(() => {
            
    },[]);

    const openLink = (link:string) => {
      window.open(link);
    }


    return (
        <>
           
           {
              <div className="col-md-12">
                  <div className="col-md-10 promotion">                                   
                  <Carousel
                    responsive={responsive}
                    showDots={true}
                    autoPlaySpeed={4000}
                  >
                       {
                          promotions && promotions.length>0 &&
                          promotions.map((item:INew, index:number) => 
                             <img src={item.image} onClick={()=>openLink(item.link ? item.link  :"")}></img>
                          )
                       }

                    </Carousel>
                  </div> 
              </div>           
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
      updateParam: (value: any) => dispatch(updateParam(value))
    }
  }

  export default connect(mapStateToProps, mapDispatchActionToProps)(PromotionScreen)

  