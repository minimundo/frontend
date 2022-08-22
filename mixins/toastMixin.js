export default {
    methods: {
        showToastMixin(description, title, variant) {
            this.$bvToast.toast(description, {
                title,
                autoHideDelay: 4000,
                variant,
                solid: true
            })
        },
    },
}