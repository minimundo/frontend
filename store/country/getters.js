const getters = {
  index: (state) => {
    return state.countries;
  },

  indexCount: (state) => {
    const countries = state.countries
    return countries.length;
  },

  northAmerica: (state) => {
    return {
      text: 'América do Norte',
      values: state.countries.filter(
        (countries) => countries.continent === 'América do Norte'
      )
    }
  },

  centralAmerica: (state) => {
    return {
      text: 'América Central',
      values: state.countries.filter(
        (countries) => countries.continent === 'América Central'
      ),
    }
  },

  southAmerica: (state) => {
    return {
      text: 'América do Sul',
      values: state.countries.filter(
        (countries) => countries.continent === 'América do Sul'
      ),
    }
  },

  europe: (state) => {
    return {
      text: 'Europa',
      values: state.countries.filter(
        (countries) => countries.continent === 'Europa'
      ),
    }
  },

  africa: (state) => {
    return {
      text: 'África',
      values: state.countries.filter(
        (countries) => countries.continent === 'África'
      ),
    }
  },

  asia: (state) => {
    return {
      text: 'Ásia',
      values: state.countries.filter(
        (countries) => countries.continent === 'Ásia'
      ),
    };
  },

  oceania: (state) => {
    return {
      text: 'Oceania',
      values: state.countries.filter(
        (countries) => countries.continent === 'Oceania'
      ),
    }
  },
}

export default getters