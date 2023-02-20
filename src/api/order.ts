import request from "@/utils/request";

// 订单列表
export function orders(params: any){
    return request(
        {
            url:"/api/admin/orders",
            method:"GET",
            params
        }
    );
}