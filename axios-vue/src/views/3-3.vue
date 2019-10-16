<template>
    <div class="homesss">
    </div>
</template>

<script>
// axios拦截器： 在请求或响应被处理前拦截它们
// 请求拦截器， 响应拦截器
import axios from 'axios'
export default {
    name: 'axios3-3',
    created() {
        // 请求拦截器
        axios.interceptors.request.use(
            config => {
                // 在发送请求前做些什么
                return config;
            },
            err => {
                // 在请求错误的时候做些什么 一般http状态码以4开头的
                // 401: 超时  404： not found
                return Promise.reject(err);
            }
        )

        // 响应拦截器
        axios.interceptors.response.use(
            res => {
                // 请求成功响应数据做处理
                return res;
            }, err => {
                // 响应错误做些什么 一般http状态码以5开头的
                // 500: 系统错误  502： 系统重启
                return Promise.reject(err);
            }
        )

        // 取消拦截器
        const interceptors = axios.interceptors.request.use(
            config => {
                config.hearders = {
                    auth: true
                }
                return config;
            }
        )

        axios.interceptors.request.eject(interceptors);

        // 例子 登录状态(token: '')  需要登陆的接口
        const instance1 = axios.create({});
        instance1.interceptors.request.use(
            config => {
                config.headers.token = '';
                return config;
            }
        )

        instance1.get('/data.json').then(res => {
            console.log(res);
        })

        // 不需要登陆的接口
        const instance2 = axios.create({});



    }
}
</script>
