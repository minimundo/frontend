const getters = {
  index: (state) => {
    return state.countries;
  },
  indexCount: (state) => {
    const countries = state.countries
    return countries.length;
  }
}

export default getters