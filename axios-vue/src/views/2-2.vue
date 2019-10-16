<template>
    <div></div>
</template>

<script>
/**
 * axios请求方法： get, post, put, patch, delete
 * get: 获取数据
 * post: 提交数据（表单提交 + 文件上传）
 * put: 更新数据（所有数据推送到后端）
 * patch: 更新数据（只将修改的数据推送到后端）
 * delete: 删除数据
 */
import axios from "axios";
export default {
    name: "axios2-2",
    components: {},
    created() {
        // get请求
        // 当前请求路径为 http://localhost:8080/data.json?id=12
        axios
            .get("/data.json", {
                params: {
                    id: 12
                }
            })
            .then(res => {
                console.log(res);
            });

        // get请求另外一种写法
        axios({
            method: "get",
            url: "/data.json",
            params: {
                id: 12
            }
        }).then(res => {
            console.log(res);
        });

        // post请求
        // form-data 表单提交（图片上传，文件上传）
        // applicition/json

        const data = {
            id: 12
        }

        // form-data 
        const formData = new FormData();
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                const element = data[key];
                formData.append(key, element);
            }
        }
        axios.post('/post', formData).then(res => {
            console.log(res);
        })

        // applicition/json
        axios.post('/post', data).then((res) => {
            console.log(res);
        })

        axios({
            method: 'post',
            url: '/post',
            data
        }).then((res) => {
            console.log(res);
        })

        // put请求
        axios.put('/put', data).then(res => {
            console.log(res);
        })

        // patch请求
        axios.patch('/patch', data).then(res => {
            console.log(res);
        })

        // delete请求
        // 当前请求路径为 http://localhost:8080/delete?id=12
        axios.delete('/delete', {
            params: {
                id: 12
            }
        }).then(res => {
            console.log(res);
        })

        // 当前请求路径为 http://localhost:8080/delete
        axios.delete('/delete', {
            data: {
                id: 12
            }
        }).then(res => {
            console.log(res);
        })
    }
};
</script>
