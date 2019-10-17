<template>
    <div class="home">
        <van-button type="default">默认按钮</van-button>
    </div>
</template>

<script>
import { Button } from 'vant'
import axios from 'axios'
export default {
    name: 'contactList',
    components: {
        [Button.name]: Button
    },
    created() {
    } 
}
</script>
