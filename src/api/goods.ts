import request from "@/utils/request";

//ๅๅๅ่กจ
export function goodsList(params: any) {
    return request ({
        url: '/api/admin/goods',
        method: 'get',
        params,
    })
}