import request from "./axios";
import qs from "qs";

// json格式请求头
const headerJSON = {
    "Content-Type": "application/json",
};
// FormData格式请求头
const headerFormData = {
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
};
const http = {
    /**
     * methods: 请求
     * @param url 请求地址
     * @param params 请求参数
     * @param json 判断数据发送是否是json格式
     */
    get(url, params) {
        const config = {
            method: "get",
            url: url,
            headers: headerFormData
        };
        if (params) config.params = params;
        return request(config);
    },
    post(url, params, json) {
        const config = {
            method: "post",
            url: url,
            headers: json ? headerJSON : headerFormData
        };
        if (params) config.data = json ? params : qs.stringify(params);

        return request(config);
    },
    put(url, params) {
        const config = {
            method: "put",
            url: url,
            headers: headerFormData
        };
        if (params) config.params = params;
        return request(config);
    },
    delete(url, params) {
        const config = {
            method: "delete",
            url: url,
            headers: headerFormData
        };
        if (params) config.params = params;
        return request(config);
    },
};
//导出
export default http;