<template>
  <div class="card-item py-2">
    <i
      v-if="icon"
      class="icon-item fas fa-lg"
      :class="[$isCheckIcon ? 'check-icon' : '', iconClass]"
    ></i
    ><span> {{ title }}</span> {{ content }}
  </div>
</template>
  <script>
export default {
  name: 'CardItem',
  props: {
    icon: { type: String, default: '' },
    title: { type: String, required: true },
    content: { type: [String, Number], required: true },
  },
  data() {
    return {
      isCheckIcon: false,
      iconClass: `fa-${this.icon}`,
    }
  },
  computed: {
    $isCheckIcon() {
      if (this.icon === 'check') {
        return !this.isCheckIcon
      } else {
        return this.isCheckIcon
      }
    },
  },
}
</script>
  <style scoped>
.card-item {
  color: #77838f;
}

.icon-item {
  color: var(--primary-color);
}

.card-item span {
  color: black;
}

.check-icon {
  color: green;
}
</style>