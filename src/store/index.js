import { createStore } from 'vuex'

const store = createStore ({
    state() {
        return {           
            themeColor: 'dark',
            text: "Hello state management"
        }
    },
    mutations: {
        changeTheme (state) {
            if(state.themeColor === 'dark') {
                state.themeColor = 'light';
                console.log(state.themeColor)
            } else {
                state.themeColor = 'dark';
                console.log(state.themeColor)
            }
        }
    },
});

export default store