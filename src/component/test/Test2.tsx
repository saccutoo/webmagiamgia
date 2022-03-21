import React,{ useEffect, useState } from "react";
import {ITest} from "../../interface/Test"

function Test2(props:any){
    return (
        <>
            <div>
                <button onClick={()=>props.clickMe(props.value)} >{props.value}</button>

                <div>
                    {
                        props.value && props.value==2 &&
                        <Test2 value={3} clickMe={props.clickMe}></Test2>
                    }
                    
                </div>
            </div>
        </>
    )
}
export default Test2
