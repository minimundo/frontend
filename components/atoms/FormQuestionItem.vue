<template>
  <div v-if="type != 'button'" class="form-item form-group col-sm-6 col-12">
    <div v-if="type === 'title'" class="h4 font-weight-bold">
      {{ title }}
      <small class="h6 form-text text-muted font-weight-semibold">
        {{ description }}
      </small>
    </div>
    <label
      v-if="type != 'title' && type != 'button-cancel' && type != 'button-save'"
      class="form-label"
      :for="id"
      >{{ title }}<span class="text-danger">*</span></label
    >
    <div class="form-floating">
      <textarea
        v-if="type === 'textarea'"
        id="floatingTextarea"
        class="form-control"
        :placeholder="`Escreva aqui.`"
        value=""
        @input="propagateInput"
      ></textarea>
    </div>
    <input
      v-if="
        type != 'textarea' &&
        type != 'title' &&
        type != 'select-correct' &&
        type != 'select-grade' &&
        type != 'select-country' &&
        type != 'button-cancel' &&
        type != 'button-save'
      "
      :id="id"
      :type="type"
      class="form-control"
      value=""
      @input="propagateInput"
    />
    <select
      v-if="type === 'select-correct'"
      :id="id"
      class="form-select btn btn-outline-secondary"
      @input="propagateInput"
    >
      <option selected disabled></option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select>
    <select
      v-if="type === 'select-grade'"
      :id="id"
      class="form-select btn btn-outline-secondary"
      @input="propagateInput"
    >
      <option selected disabled></option>
      <option value="4">4º ano</option>
      <option value="5">5º ano</option>
      <option value="6">6º ano</option>
      <option value="7">7º ano</option>
      <option value="8">8º ano</option>
      <option value="9">9º ano</option>
    </select>
    <select
      v-if="type === 'select-country'"
      :id="id"
      class="form-select btn btn-outline-secondary"
      @input="propagateInput"
    >
      <option selected disabled></option>
      <option
        v-for="country in countries"
        :key="country.id"
        :value="country.id"
      >
        {{ country.name }}
      </option>
    </select>
    <small
      v-if="type != 'title' && type != 'button-cancel' && type != 'button-save'"
      class="form-text text-muted"
    >
      {{ description }}
    </small>
    <div>
      <div v-if="type === 'button-cancel'" class="card-button">
        <nuxt-link
          :id="id"
          to="/dashboard/questions"
          class="btn btn-sm px-2 py-2 btn"
        >
          {{ title }}
        </nuxt-link>
      </div>
      <div v-if="type === 'button-save'" class="card-button">
        <button
          :id="id"
          type="button"
          class="btn btn-sm px-2 py-2 btn btn-dark"
        >
          {{ title }}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    type: { type: String, required: true },
    id: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, default: '' },
    countries: { type: Array,
      default() {
        return []
      } },
  },
  methods: {
    propagateInput(event) {
      this.$emit('input', event.target.value)
    },
  }
}
</script>
<style scoped>
label {
  color: black;
}

small {
  color: #77838f;
}

.h4 {
  color: black;
}

.btn {
  font-size: 1rem;
}

.btn-dark {
  background-color: var(--primary-color);
  transition: all 0.3s ease-in-out !important;
}

.btn-dark:hover {
  transform: translateY(-2px) !important;
}
</style>
