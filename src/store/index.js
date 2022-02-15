import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      themeColor: localStorage.getItem("theme-color") ?? "dark",
    };
  },
  mutations: {
    changeTheme(state, color) {
      state.themeColor = color;

      //   if (state.themeColor === "dark") {
      //     state.themeColor = "light";
      //   } else {
      //     state.themeColor = "dark";
      //   }

      localStorage.setItem("theme-color", state.themeColor);
    },
  },
});

export default store;
