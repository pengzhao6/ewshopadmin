import axios from "axios";

const request = axios.create({
    baseURL: "https://api.shop.eduwork.cn/", //后台管理接口
    timeout: 8000 //超时时间
})

//请求拦截器
request.interceptors.request.use((config)=>{
    return config
},(error)=>{
    return Promise.reject(error)
})

request.interceptors.response.use((response)=>{
    return response.data
},(error)=>{
    return Promise.reject(error)
})

//暴露对象
export default request