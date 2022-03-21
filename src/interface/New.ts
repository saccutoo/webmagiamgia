export interface INew {
    id?:number,
    code?:string
    title?:string
    content: string,
    image?: string,
    type?: number,
    link?: string,
    type_merchant?: number,
    type_merchant_name?: string,
    type_name?: string,

    create_date?: Date,
    update_date?: Date,
    create_by?: string,
    update_by?: string,
    status?: number,
};

export interface IListNew {
    datas?: INew[];
}
