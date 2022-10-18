<template>
  <div id="app">
    <model-list-select
      :list="activity_list"
      v-model="business_activity"
      option-value="text"
      :custom-text="customText"
      placeholder="País"
    ></model-list-select>
  </div>
</template>

<script>
import { ModelListSelect } from "vue-search-select";
import "vue-search-select/dist/VueSearchSelect.css";

export default {
  name: "App",
  components: {
    ModelListSelect
  },
  data() {
    return {
      business_activity: {
        value: "",
        name: ""
      },
      activity_list: [
        {
          value: "test",
          text: "test1",
          name: "test1"
        },
        {
          value: "test2",
          text: "test2",
          name: "test2"
        }
      ]
    };
  },
  methods: {
    customText(item) {
      return item.name;
    }
  },
  computed: {
    items() {
      return Math.round(16.2);
    }
  }
};
</script>

<style>
</style>
