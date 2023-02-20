import request from "@/utils/request";

//分类列表

export function categoryList(params: any) {
    return request ({
        url: '/api/admin/category',
        method: 'get',
        params
    })
}

// 添加分类
export  function addCategory(data: any) {
    return request(
        {
            url: "/api/admin/category",
            method: "POST",
            data
        }
    );
}