const getters = {
  index: (state) => {
    return state.users;
  },
  indexCount: (state) => {
    const users = state.users
    return users.length;
  }
}

export default getters