<template>
  <div v-if="title === 'Mídia:'" class="card-item py-2">
    <i
      v-if="icon"
      class="icon-item fas fa-lg"
      :class="[$isCheckIcon ? 'check-icon' : '', iconClass]"
    ></i>
    <span> {{ title }}</span>
    <b-button variant="link" @click="$bvModal.show(`image-${content}`)">Clique aqui para visualizar a imagem.</b-button>
    <b-modal
      :id="`image-${content}`"
      hide-backdrop
      hide-footer
      hide-header-close
    >
      <template #modal-title>
        <p class="text-body font-weight-bold m-0">Mídia da Questão</p>
      </template>
      <div class="d-block">
        <b-img thumbnail fluid :src="content" alt="Imagem complementar da questão"></b-img>
      </div>
      <div class="d-flex justify-content-end">
        <div
          class="btn btn-light m-1"
          @click="$bvModal.hide(`image-${content}`)"
        >
          Fechar
        </div>
      </div>
    </b-modal>
  </div>
  <div v-else class="card-item py-2">
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