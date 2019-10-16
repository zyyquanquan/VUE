<template>
    <div class="home">
    </div>
</template>

<script>
// axios配置参数
import axios from 'axios'
export default {
    name: 'axios配置参数',
    created() {
        axios.create({
            baseURL: 'http://localhost:8080',  // 请求的域名，基本地址，
            timeout: 1000, // 请求超时时长(ms)， 超时返回401
            url: '/data.json', // 请求路径
            method: 'get', // 请求方法 get,post,put,patch,delete
            headers: {
                token: ''
            }, // 设置请求头
            params: {}, // 请求参数拼接在URL上
            data: {}  // 请求参数放在请求体中
        })

        // 1.axios全局配置 优先级：低
        axios.defaults.timeout = 1000;
        axios.defaults.baseURL = 'http://localhost:8080';

        // 2.axios实例配置  优先级：中
        const instance = axios.create();
        instance.defaults.timeout = 3000;

        // 3.axios请求配置  优先级：高
        instance.get('/data.json', {
            timeout: 5000
        })

        
    }
}
</script>
