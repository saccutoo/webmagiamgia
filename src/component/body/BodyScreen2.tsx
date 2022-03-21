import { connect } from "react-redux"
import React,{useEffect} from "react"
import { Subscription } from 'rxjs';
import EventBus, { EventBusName, EventBusType } from "../../helper/eventBus/EventBus";

function BodyScreen2(props:any){
   const subscriptions = new Subscription();

   useEffect(() => {

    //EventBus subscriptions
    subscriptions.add(
      EventBus.getInstance().events.subscribe((res: EventBusType) => {
        const payload = res?.payload;
        if (payload) {
          switch (res?.type) {
            case EventBusName.TEST:             
              break;
          }
        }
      })
    );
    }, []);
    return (
        <>
        <React.Fragment>
          <div>
            <p style={{color:"red"}}> {props.test.datas.length}</p>
          </div>
        </React.Fragment>
      </>
       
    )
}
const mapStateToProps = (state:any) => {
    return {
      test: state.testReducer,
    }
  }
  
  const mapDispatchToProps = (dispatch:any) => {
    return {
    
    }
  }
export default connect(mapStateToProps)(BodyScreen2)