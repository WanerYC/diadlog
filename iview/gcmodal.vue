<template>
    <Modal :width="width" class="tipsModal" class-name="vertical-center-modal" v-model="isShowMessageBox" :title="title"
           :mask-closable="false" :closable="closable" :draggable="draggable" :scrollable="scrollable">
        <div :class="iconTypeCls">
            <i :class="iconNameCls"></i>
        </div>
        <div class="content" v-html="content"></div>
        <Row slot="footer">
            <Button class="cancelbtn" @click="cancel" v-if="showCancel">{{cancelText}}</Button>
            <Button class="confirmbtn" type="primary" :loading='saveLoading' @click="ok">{{okText}}</Button>
        </Row>
    </Modal>
</template>
<script>
    const prefixCls = 'ivu-modal-confirm';

    export default {
        props: {
            title: {
                type: String,
                default: ''
            },
            content: {
                type: String,
                default: ''
            },
            iconType: {
                type: String,
                default: ''
            },
            iconName: {
                type: String,
                default: ''
            },
            loading: {
                type: Boolean,
                default: false
            },
            closable: {
                type: Boolean,
                default: false
            },
            draggable: {
                type: Boolean,
                default: true
            },
            scrollable: {
                type: Boolean,
                default: false
            },
            showCancel: {
                type: Boolean,
                default: false
            },
            width:{
                type: [Number, String],
                default: 520
            },
            cancelText: {
                type: String,
                default: '取消'
            },
            okText: {
                type: String,
                default: '确定'
            },
            onOk: {
                type: Function,
                default: () => {
                }
            },
            onCancel: {
                type: Function,
                default: () => {
                }
            }
        },
        data() {
            return {
                isShowMessageBox: false,
                saveLoading: false
            };
        },
        computed: {
            iconTypeCls () {
                return [
                    `${prefixCls}-head-icon`,
                    `${prefixCls}-head-icon-${this.iconType}`
                ];
            },
            iconNameCls () {
                return [
                    'ivu-icon',
                    `ivu-icon-${this.iconName}`
                ];
            },
        },
        methods: {
            ok() {
                if (!this.loading) {
                    this.remove();
                }
                this.saveLoading = true;
                this.onOk();
            },
            cancel() {
                this.remove();
                this.onCancel();
            },
            confirm() {
                this.isShowMessageBox = true;
            },
            remove() {
                this.isShowMessageBox = false;
                setTimeout(() => {
                    this.destroy();
                }, 300);
            },
            destroy() {
                this.$destroy();
                document.body.removeChild(this.$el);
            }
        }
    };
</script>
<style lang="less" scoped>
    .content{
        font-size:14px;
        color:#444444;
        font-family:MicrosoftYaHei;
        line-height:19px;
        text-shadow:0px 4px 12px rgba(0,0,0,0.15);
        display:inline-block;
        vertical-align: middle;
        margin-left:12px;
    }
</style>

