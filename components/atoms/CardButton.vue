<template>
  <div class="card-button">
    <div class="d-inline">
      <b-tooltip :target="id" variant="secondary">{{ tooltip }}</b-tooltip>
      <button
        :id="id"
        type="button"
        class="
          btn btn-sm btn-icon
          transition-3d-hover
          mr-1
        "
        :class="[buttonClass]"
        @click="propagateClick"
      >
        <i v-if="icon" class="fas fa-lg" :class="[iconClass]"></i>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CardButton',
  props: {
    icon: { type: String, required: true },
    variant: { type: String, required: true},
    id: { type: String, required: true },
    tooltip: { type: String, required: true}
  },
  data() {
    return {
      iconClass: `fa-${this.icon}`,
      buttonClass: `btn-${this.variant}`
    }
  },
  methods: {
    propagateClick() {
      this.$emit('propagateClick')
    },
  },
}
</script>
<style>
</style>