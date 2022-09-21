<template>
  <div class="card-button">
    <div class="d-inline">
      <button
        type="button"
        class="
          btn btn-sm btn-secondary btn-icon
          transition-3d-hover
          mr-1
          btn btn-primary
        "
        @click="$store.dispatch(action, params)"
      >
        <i v-if="icon" class="fas fa-lg" :class="[iconClass]"></i>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    icon: { type: String, required: true},
    action: { type: String, required: true},
    params: { type: Number, String, required: true}
  },
  data() {
    return {
      iconClass: `fa-${this.icon}`,
    }
  },
}
</script>
<style>
</style>