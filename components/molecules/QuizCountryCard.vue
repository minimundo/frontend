<template>
  <div class="dash-card card">
    <nuxt-link class="p-5 card-body" :to="to"
      ><div class="align-items-center media">
        <div class="align-self-stretch media-body d-flex justify-content-center flex-column">
          <span class="d-block h4 font-weight-normal">{{ length }}</span>
          <h2 class="h6 text-secondary font-weight-normal mb-0 text-center">
            {{ text }}
          </h2>
          <div class="text-center">
              <img
                :src="require(`~/assets/images/maps/${src}.png`)"
                :alt="text"
              />
          </div>
        </div></div
    ></nuxt-link>
  </div>
</template>
    <script>
export default {
  name: 'QuizCountryCard',
  props: {
    text: { type: String, required: true },
    to: { type: String, required: true },
    src: { type: String, required: true}
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
}

img {
    width: 250px;
  transition: all 0.3s ease-in-out;
}

img:hover {
  transform: translateY(-6px);
}
</style>