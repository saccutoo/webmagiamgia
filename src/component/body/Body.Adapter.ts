import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import {
    getTest,
    addTest,
    updateTest,
    updateAllTest
  } from "../../redux/actions/Test.Action";
import TestService from '../../service/Test.Service'
import EventBus,{EventBusName} from '../../helper/eventBus/EventBus'

const BodyAdapter = () => {
    const dispatch = useDispatch();
    const [hasNotification, setHasNotification] = useState<any>("1");

        useEffect(() => {
            (async () => {
                var result= await TestService().getInstance().getTest();
                dispatch(updateAllTest(result));           
            })();
        }, []);

    const clickMe = (value: number) => {
        // var data=send(value);
        // props.addTest({key:data.toString(),value:data.toString()})
        sendNew(value);
        setHasNotification(value);

        //EventBus post
        EventBus.getInstance().post({
            type: EventBusName.TEST,
            payload: {"vinh":1997}
        });
    }

      
    const send= (value:number)=>{
        return value + 1
    }

    const sendNew= (value:number)=>{
        value= value + 1
        dispatch(addTest({key:value.toString(),value:value.toString()}));
    }

    return {
        hasNotification, setHasNotification,
        send,
        sendNew,
        clickMe
    }
}

export default BodyAdapter