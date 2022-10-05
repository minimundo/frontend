<template>
  <div v-if="type != 'button'" class="form-item mt col-sm-6 col-12">
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
        :class="classe"
        :placeholder="`Escreva aqui.`"
        :value="value"
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
      <option value="" selected disabled></option>
      <option
        v-for="answer in answersList"
        :key="answer.value"
        :value="answer.value"
        :selected="answer.value == value"
      >
        {{ answer.text }}
      </option>
    </select>
    <select
      v-if="type === 'select-grade'"
      :id="id"
      class="form-select btn btn-outline-secondary"
      @input="propagateInput"
    >
      <option value="" selected disabled></option>
      <option
        v-for="grade in gradeList"
        :key="grade.value"
        :value="grade.value"
        :selected="grade.value === value"
      >
        {{ grade.text }}
      </option>
    </select>
    <select
      v-if="type === 'select-country'"
      :id="id"
      class="form-select btn btn-outline-secondary"
      @input="propagateInput"
    >
      <option value="" selected disabled></option>
      <option
        v-for="country in countries"
        :key="country.id"
        :value="country.id"
        :selected="country.id === value"
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
  name: 'FormQuestionItem',
  props: {
<<<<<<< HEAD
    classe:{type: String},
    type: { type: String, required: true },
=======
    type: { type: [String, Number], required: true },
    value: { type: [String, Number], default: '' },
>>>>>>> 51397227e56849fa102eb09ae816d936d582a6d0
    id: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, default: '' },
    countries: {
      type: Array,
      default() {
        return []
      },
    },
    gradeList: {
      type: Array,
      default() {
        return [
          { value: 4, text: '4º ano' },
          { value: 5, text: '5º ano' },
          { value: 6, text: '6º ano' },
          { value: 7, text: '7º ano' },
          { value: 8, text: '8º ano' },
          { value: 9, text: '9º ano' },
        ]
      },
    },
    answersList: {
      type: Array,
      default() {
        return [
          { value: 1, text: '1' },
          { value: 2, text: '2' },
          { value: 3, text: '3' },
          { value: 4, text: '4' },
        ]
      },
    },
  },
  methods: {
    propagateInput(event) {
      this.$emit('input', event.target.value)
    },
  },
}
</script>
<style scoped>
label {
  color: black;
}

.mt{
  margin-top: 1.5rem;
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
