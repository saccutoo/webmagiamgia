export interface ITypeNew {
    id?:number,
    name?:string


    create_date?: Date,
    update_date?: Date,
    create_by?: string,
    update_by?: string,
    status?: number,
};

export interface ITypeListNew {
    datas?: ITypeNew[];
}
