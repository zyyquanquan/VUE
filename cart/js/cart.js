new Vue({
    el: '#app',
    data: {
        productList: [],
        totalMoney: 0, // 总金额,
        checkAllFlag: false, // 全选布尔值
        delFlag: false,  // 是否显示删除框
        curProduct: ''  // 储存删除产品对象
    },
    filters: {
        /**
         * 格式化金额
         * @param {Number}} value 
         */
        formatMoney: function (value) {
            return `￥${value.toFixed(2)}`;
        }
    },
    methods: {
        cartView: function () {
            this.$http.get('data/cartData.json').then((res) => {
                this.productList = res.data.result.list;
            })
        },
        /**
         * 商品数量的加减
         * @param {Object}} product 商品对象
         * @param {Number} way -1: 减  1: 加 
         */
        changeMoney: function (product, way) {
            switch (way) {
                case -1:
                    product.productQuantity--;
                    if (product.productQuantity < 1) {
                        product.productQuantity = 1;
                    }
                    break;

                case 1:
                    product.productQuantity++;
                    break;
            }

            this.calcTotalPrice();
        },
        /**
         * 控制商品的选择状态
         * @param {Object} item 商品对象 
         */
        selectProduct: function (item) {
            if (typeof item.checked == 'undefined') {
                this.$set(item, 'checked', true);
            } else {
                item.checked = !item.checked;
            }

            // 判断全选按钮是否选中
            let number = 0;
            this.productList.forEach(v => {
                if (v.checked) {
                    number++;
                    number == this.productList.length ? this.checkAllFlag = true : this.checkAllFlag = false;
                }
            })

            this.calcTotalPrice();
        },
        /**
         * 选中所有商品
         */
        checkAll: function () {
            this.checkAllFlag = !this.checkAllFlag;
            this.productList.forEach(v => {
                if (typeof v.checked == 'undefined') {
                    this.$set(v, 'checked', this.checkAllFlag);
                } else {
                    v.checked = this.checkAllFlag;
                }
            })

            this.calcTotalPrice();
        },
        /**
         * 计算总金额
         */
        calcTotalPrice: function () {
            this.totalMoney = 0;
            this.productList.forEach(v => {
                if (v.checked) {
                    this.totalMoney += v.productPrice * v.productQuantity;
                }
            })
        },
        /**
         * 是否显示删除框，并添加当前删除对象
         * @param {Object} item 
         */
        delConfirm: function (item) {
            this.delFlag = true;
            this.curProduct = item;
        },
        /**
         * 删除商品
         */
        delProduct: function () {
            this.delFlag = false;
            const index = this.productList.indexOf(this.curProduct);
            this.productList.splice(index, 1);
        }
    },
    mounted: function () {
        this.$nextTick(function () {
            this.cartView();
        })
    }
})