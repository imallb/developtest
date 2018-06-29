Vue.component("switchbtn", {
    template: "<div @click='change'>{{myResult?'开':'关'}}</div>",
    props: ["result"],
    data: function () {
        return {
            myResult: this.result//①创建props属性result的副本--myResult
        };
    },
    watch: {
        result(val) {
            this.myResult = val;//②监听外部对props属性result的变更，并同步到组件内的data属性myResult中
        },
        myResult(val){
            this.$emit("on-result-change",val);//③组件内对myResult变更后向外部发送事件通知
        }
    },
    methods: {
        change() {
            this.myResult = !this.myResult;
        }
    }
});