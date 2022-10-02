<template>
  <div class="dash-card card">
    <nuxt-link class="p-5 card-body" :to="to"
      ><div class="align-items-center media">
        <button type="button" class="btn-icon rounded-circle mr-4 btn-lg">
          <i
            v-if="icon === 'quora'"
            class="fas fa-brands mx-1"
            :class="[iconClass]"
          ></i>
          <i v-if="icon != 'quora'" class="fas mx-1" :class="[iconClass]"></i>
        </button>
        <div class="align-self-stretch media-body">
          <span class="d-block h4 font-weight-normal">{{ length }}</span>
          <h2 class="h6 text-secondary font-weight-normal mb-0">
            {{ text }}
          </h2>
        </div>
      </div></nuxt-link
    >
  </div>
</template>
  <script>
export default {
  name: 'DashCard',
  props: {
    icon: { type: String, required: true },
    length: { type: Number, required: true },
    text: { type: String, required: true },
    to: { type: String, required: true },
  },
  data() {
    return {
      iconClass: `fa-${this.icon}`,
    }
  },
}
</script>
<style scoped>
* {
  text-decoration: none;
}

button {
  font-size: 1.8em;
  transition: background-color 0.5s;
}

button:hover {
  background-color: var(--primary-color);
  color: white;
}

i {
  font-size: 0.8em;
}

a {
  color: var(--primary-color) !important;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
}

a:hover {
  transform: translateY(-6px);
}
</style>