function getDefaultState() {
  return {
    file: null,
    downloadUrl: ""
  };
}

const state = getDefaultState();

const getters = {
  getFile: state => state.file,
  getDownloadUrl: state => state.downloadURL
};

const mutations = {
  setFile: (state, file) => {
    state.file = file;
  },
  setDownloadUrl: (state, downloadURL) => {
    state.downloadURL = downloadURL;
  },
  clearData: state => {
    Object.assign(state, getDefaultState());
  }
};

const actions = {
  setFile: (context, file) => {
    context.commit("setFile", file);
  },
  setDownloadUrl: (context, downloadURL) => {
    context.commit("setDownloadUrl", downloadURL);
  },
  clearData: context => {
    context.commit("clearData");
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
