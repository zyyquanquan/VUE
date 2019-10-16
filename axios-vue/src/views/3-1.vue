<template>
    <div class="home">
    </div>
</template>

<script>
// axios实例
import axios from 'axios'
export default {
    name: 'axios3-1',
    created() {
        // 不同的http请求时使用
        const instance = axios.create({
            baseURL: 'http://localhost:8080',
            timeout: 1000  // 请求超时时长，超过1S未响应则报401
        })

        const instance2 = axios.create({
            baseURL: 'http://localhost:9090',
            timeout: 5000  // 请求超时时长，超过5S未响应则报401
        })

        instance.get('/data.json').then(res => {
            console.log(res);
        })
    }
}
</script>
