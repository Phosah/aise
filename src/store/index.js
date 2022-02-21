import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      themeColor: localStorage.getItem("theme-color") ?? "dark",
      menuState: "hidden",
      worksArr: [
        {
          bgColor: "bg-brand-blue-8",
          title: "Collect Africa",
          subtitle: "Fintech Solution",
          imgPosition: "",
          img: require("../assets/collect-africa-home.png"),
          alt: "Collect",
          routeName: "Case study",
          route: "/collectafrica",
        },
        {
          bgColor: "bg-brand-orange-1",
          title: "Trigle",
          subtitle: "Food delivery, Commerce",
          imgPosition: "lg:absolute lg:h-128 lg:-bottom-28 lg:-right-20",
          img: require("../assets/trigle-home.png"),
          alt: "Trigle",
          routeName: "Case study",
          route: "/trigle",
        },
        {
          bgColor: "bg-brand-green-1",
          title: "Doorstep",
          subtitle: "Logistics",
          imgPosition: "",
          img: require("../assets/doorstep-home.png"),
          alt: "Doorstep",
          routeName: "Case study",
          route: "/doorstep",
        },
        {
          bgColor: "bg-brand-red-5",
          title: "Trustbreed",
          subtitle: "Customer Service, B2C",
          imgPosition:
            "lg:w-2/3 absolute md:-bottom-40 md:-right-60 lg:-bottom-24 lg:-right-24",
          img: require("../assets/trustbreed-home.png"),
          alt: "Trustbreed",
          routeName: "Case study",
          route: "/trustbreed",
        },
        {
          bgColor: "bg-brand-blue-8",
          title: "Powr Finance",
          subtitle: "Logistics",
          imgPosition: "",
          img: require("../assets/powrfinance-home.png"),
          alt: "Powr Finance",
          routeName: "Case study",
          route: "/powrfinance",
        },
      ],
    };
  },
  mutations: {
    changeTheme(state, color) {
      state.themeColor = color;
      // state.themeColor = state.themeColor === "dark" ? "light" : "dark";

      localStorage.setItem("theme-color", state.themeColor);
    },
    openMenu(state) {
      state.menuState = "block";
    },
    closeMenu(state) {
      state.menuState = "hidden";
    },
  },
});

export default store;
