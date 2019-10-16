<template>

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
    components: {

    },
    created() {
        // get请求
        // 当前请求路径为 http://localhost:8080/data.json?id=12
        axios.get("/data.json", {
            params: {
                id: 12
            }
        }).then(res => {
            console.log(res);
        });

        // get请求另外一种写法
        axios({
            method: 'get',
            url: "/data.json",
            params: {
                id: 12
            }
        }).then(res => {
            console.log(res);
        });
    }
};
</script>
