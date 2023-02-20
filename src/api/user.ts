import request from "@/utils/request";

//用户列表

export function user(params: any) {
    return request({
        url: '/api/admin/users',
        method: 'get',
        params
    })
}