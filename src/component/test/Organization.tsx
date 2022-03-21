import React,{ useEffect, useState } from "react";
import {ITest} from "../../interface/Test";
import Test from "./Test"

function Organization(props:any){
    return (
        <>
        <li>{props.value}</li>

        {
                 props.ListSub && 
                 props.ListSub.map((item:any, index:number) => 
                     <Test {...item} />
                 )
        }        
        </>
          
    )
}
export default Organization