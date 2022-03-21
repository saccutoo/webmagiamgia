import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import {IParam} from '../../interface/Param'

const TemplateAdapter = () => {
    const dispatch = useDispatch();
    const [template, setTemplate] = useState<any>();
    const [param, setParam] = useState<IParam>();
    
    useEffect(() => {
        
    }, []);
    

    return {
        template, setTemplate
    }
}

export default TemplateAdapter;