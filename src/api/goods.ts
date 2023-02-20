import request from "@/utils/request";

//商品列表
export function goodsList(params: any) {
    return request ({
        url: '/api/admin/goods',
        method: 'get',
        params,
    })
}