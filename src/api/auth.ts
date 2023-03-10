import request from "@/utils/request";

//登录
export function login(data: object) {
    return request ({
        url: '/api/auth/login',
        method: 'post',
        data,
    })
}
//用户
export function user(){
    return request({
        url: '/api/admin/users',
        method: 'get'
    })
}

//退出登录
export function logout(){
    return request ({
        url: '/api/auth/logout',
        method: 'post'

    })
}