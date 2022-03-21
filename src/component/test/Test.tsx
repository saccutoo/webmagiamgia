import React,{ useEffect, useState } from "react";
import {ITest} from "../../interface/Test"

function Test(props:any){
    return (
        <>
            <ul>
                <li>{props.value}</li>
                {
                 props.ListSub && 
                 props.ListSub.map((item:any, index:number) => 
                     <Test {...item} />
                 )
                }   
            </ul>
        </>
    )
}
export default Test
