import {defineStore} from "pinia";
import {login,user} from "@/api/auth";

// 定义state中的数据类型
export interface IUserState {
    token: string;
    username: string;
    avatar_url: string;
    permissions: string[];
    info: any;
}


export const useUserStore = defineStore({
    id: "app-user",
    state: (): IUserState => ({
        token: localStorage.getItem("token") || "", // 在页面刷新时已经保留token
        username: "",
        avatar_url: "",
        permissions: [],
        info: {},
    }),
    getters: { // 接收
        getToken(): string {
            return this.token;
        },
        getAvatar(): string {
            return this.avatar_url;
        },
        getUserName(): string {
            return this.username;
        },
        getPermissions(): string[] {
            return this.permissions;
        },
    },
    actions: {
        setToken(token: string) {
            // sessionStorage.setItem('token',token); // 一开新的窗口,token就会消失
            // token本地储存  localStarage本地存储
            localStorage.setItem("token", token);
            this.token = token;
        },
        setAvatar(avatar_url: string) {
            this.avatar_url = avatar_url;
        },
        setUserInfo(info: object) {
            this.info = info;
        },
        setUserName(username: string) {
            this.username = username;
        },
        setPermissions(permissions: string[]) {
            this.permissions = permissions;
        },
        // 异步的登录方法
        async login(userInfo: object) {
            try {
                const response: any = await login(userInfo);
                console.log(response)
                if (response.access_token) {
                    // console.log(111)
                    this.setToken(response.access_token);
                    // 登录之后，token已经拿到了，然后getUser获取调用,
                    return await this.getUser();
                }
            } catch (error) {
                // console.log(error);
            }
        },
        async getUser(){
          try {
              const response: any = await user()
              this.setUserInfo(response);
              this.setAvatar(response.avatar_url);
              this.setUserName(response.username)
              return response;
          }catch (error){

          }
        },
    }
});