import { MERCHANT_NAME,MERCHANT_LOGIN_NAME } from "../../config/MerchantName";

const getMerchantName=(type:string)=>{
  var data="";
if (type==MERCHANT_LOGIN_NAME.SHOPEE) {
  data=MERCHANT_NAME.SHOPEE;
}
else if(type==MERCHANT_LOGIN_NAME.TIKI){
  data=MERCHANT_NAME.TIKI;
}
else if(type==MERCHANT_LOGIN_NAME.LAZADA){
  data=MERCHANT_NAME.LAZADA;
}
else if(type==MERCHANT_LOGIN_NAME.SENDO){
  data=MERCHANT_NAME.SENDO;
}
else if(type==MERCHANT_LOGIN_NAME.NGUYEN_KIM){
  data=MERCHANT_NAME.NGUYEN_KIM;
}
else{
  data=type;
}
return data;
}

export default getMerchantName;