export interface ICountpon {
    aff_link?:string,
    aff_link_campaign_tag?:string
    campaign?: number,
    campaign_id?: string,
    campaign_name?: string,
    categories?: [
        {
            category_name?:string,
            category_name_show?:string
            category_no?:string
        }
    ],
    coin_cap?: number,
    coin_percentage?: number,
    content?: string,
    coupons?: [
        {
            coupon_code:string,
            coupon_desc:string
        } 
    ],
    discount_percentage?: number,
    discount_value?: number,
    domain?: string,
    end_time?: string,
    id?: string,
    image?: string,
    is_hot?: boolean,
    keyword?: [],
    link?: string,
    max_value?: number,
    merchant?: string,
    name?: string,
    min_spend?: number,
    prior_type?: number,
    remain?: number,
    remain_true?: boolean,
    shop_id?: number,
    start_time?: Date,
    status?: boolean,
    time_left?: string

};
