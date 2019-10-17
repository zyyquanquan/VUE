<template>
    <div class="home">
    </div>
</template>

<script>
// axios 取消请求
import axios from 'axios'
export default {
    name: 'axios3-5',
    created() {
        const source = axios.CancelToken.source();
        axios.get('/data.json', {
            cancelToken: source.token
        }).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })     
        
        // 取消请求(message可选)
        source.cancel('cancel http');

        // 什么情况下可能用到取消请求
        // 在请求时间过长时可能会用到取消请求
    } 
}
</script>
