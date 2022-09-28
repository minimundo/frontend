export default {
    INDEX(state, payload) {
        state.countries = payload.sort((a, b) => {
            if (a.name < b.name) {
              return -1 
            } else {
              return true
            }
          })
    },

    STORE(state, payload) {
        state.countries.push(payload)
    }
}