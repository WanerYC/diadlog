import modal from './gcmodal.vue';
const gcModal = {};
gcModal.install = function (Vue, options) {
    const iviewModal = Vue.extend(modal);
    let currentModal, instance;
    const initInstance = () => {
        // 实例化vue实例
        currentModal = new iviewModal();
        let msgBoxEl = currentModal.$mount().$el;
        document.body.appendChild(msgBoxEl);
    };
    Vue.prototype.$gcModal = {
        confirm(options) {
            if (!instance) {
                initInstance();
            }
            if (typeof options === 'string') {
                currentModal.content = options;
            } else if (typeof options === 'object') {
                options.iconType = 'confirm';
                options.iconName = 'ios-help-circle';
                options.showCancel = true;
                Object.assign(currentModal, options);
            }
            return currentModal.confirm();
        },
        info(options) {
            if (!instance) {
                initInstance();
            }
            if (typeof options === 'string') {
                currentModal.content = options;
            } else if (typeof options === 'object') {
                options.iconType = 'info';
                options.iconName = 'ios-information-circle';
                Object.assign(currentModal, options);
            }
            return currentModal.confirm();
        },
        success(options) {
            if (!instance) {
                initInstance();
            }
            if (typeof options === 'string') {
                currentModal.content = options;
            } else if (typeof options === 'object') {
                options.iconType = 'success';
                options.iconName = 'ios-checkmark-circle';
                Object.assign(currentModal, options);
            }
            return currentModal.confirm();
        },
        warning(options) {
            if (!instance) {
                initInstance();
            }
            if (typeof options === 'string') {
                currentModal.content = options;
            } else if (typeof options === 'object') {
                options.iconType = 'warning';
                options.iconName = 'ios-alert';
                Object.assign(currentModal, options);
            }
            return currentModal.confirm();
        },
        error(options) {
            if (!instance) {
                initInstance();
            }
            if (typeof options === 'string') {
                currentModal.content = options;
            } else if (typeof options === 'object') {
                options.iconType = 'error';
                options.iconName = 'ios-close-circle';
                Object.assign(currentModal, options);
            }
            return currentModal.confirm();
        },
        remove() {
            if (currentModal) {
                currentModal.remove();
            }
        },
    };
};

// this.$Modal.info(config)
// this.$Modal.success(config)
// this.$Modal.warning(config)
// this.$Modal.error(config)
// this.$Modal.confirm(config)
export default gcModal;
