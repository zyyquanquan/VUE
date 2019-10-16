new Vue({
    el: '.container',
    data: {
        addressList: [],
        limitNumber: 3, // 列表默认显示条数
        currentIndex: 0, // 地址选中索引
        shippingMethod: 1 // 配送方式选择
    },
    computed: {
        filterAddress: function () {
            return this.addressList.slice(0, this.limitNumber);
        }
    },
    methods: {
        getAddressList: function () {
            this.$http.get('data/address.json').then((res) => {
                if (res.data.status == 0) {
                    this.addressList = res.data.result;
                }
            })
        },
        /**
         * 修改默认地址
         * @param {Number} addressId 
         */
        setDefault: function (addressId) {
            this.addressList.forEach(item => {
                if (item.addressId == addressId) {
                    item.isDefault = true;
                } else {
                    item.isDefault = false;
                }
            })
        }
    },
    mounted: function () {
        this.$nextTick(function () {
            this.getAddressList();
        })
    }
})