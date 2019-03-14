import axios from 'axios';
import qs from 'qs';

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.timeout = 5000;
// axios.defaults.baseURL = 'https://eduplan.leke.cn';

// 添加请求拦截器，在发送请求之前做些什么
axios.interceptors.request.use(function (config) {
    // 显示loading
    return config
}, function (error) {
    // 请求错误时弹框提示，或做些其他事
    return Promise.reject(error)
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    return response.data
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error)
});

let http = {
    post: (api, params) => {
        params = qs.stringify(params);
        return new Promise((resolve, reject) => {
            axios.post(api, params).then(res => {
                resolve(res)
            }).catch(e => {
                reject(e)
            })
        })
    },
    get: (api, params) => {
        params = qs.stringify(params);
        return new Promise((resolve, reject) => {
            axios.get(api, {params}).then(res => {
                resolve(res)
            }).catch(e => {
                reject(e)
            })
        })
    },
    del: (api, params) => {
        params = qs.stringify(params);
        return new Promise((resolve, reject) => {
            axios.delete(api, params).then(res => {
                resolve(res)
            }).catch(e => {
                reject(e)
            })
        })
    },
    put: (api, params) => {
        params = qs.stringify(params);
        return new Promise((resolve, reject) => {
            axios.put(api, params).then(res => {
                resolve(res)
            }).catch(e => {
                reject(e)
            })
        })
    },
};
export default http