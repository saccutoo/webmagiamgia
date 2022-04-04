export interface IMerchantList {
    key?:string,
    value?:string
    display_name?: string,
    id?: string,
    login_name?: string,
    logo?: string,
    merchant_id?: string,
    logo_coupon?: string,
    total_offer?: Number,
    is_hide?: Number,
    description1?: string,
    description2?: string,
    description3?: string,
};

export interface IListMerchantList {
    datas?: IMerchantList[];
}
