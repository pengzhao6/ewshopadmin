import request from "@/utils/request";

export function admin(params:any) {
    return request ({
        url: '/api/admin/index',
        method: 'get',
        params
    })
}