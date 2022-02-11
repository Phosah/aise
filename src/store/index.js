import { createStore } from 'vuex'

const store = createStore ({
    state() {
        return {           
            isDark: 'dark',
            text: "Hello state management"
        }
    },
});

export default store