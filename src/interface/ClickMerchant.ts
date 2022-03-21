export interface IClickMerchant{
    id?:number,
    ip?:string
    merchant_name?:string
    aff_link?: string,

    create_date?: Date,
    update_date?: Date,
    create_by?: string,
    update_by?: string,
    status?: number,
};

export interface IListClickMerchant {
    datas?: IClickMerchant[];
}
