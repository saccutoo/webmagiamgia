import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";

const BodyBlogGiamGiaAdapter = () => {

    const [merchantList, setMerchantList] = useState<any>();


    return {
        merchantList, setMerchantList
    }
}

export default BodyBlogGiamGiaAdapter;