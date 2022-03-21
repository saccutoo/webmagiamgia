import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";

const FooterAdapter = () => {
    const dispatch = useDispatch();
    const [footer, setFooter] = useState<any>();
    
    useEffect(() => {
        
    }, []);
    

    return {
        footer, setFooter
    }
}

export default FooterAdapter;