import { createStore } from "vuex";

const store = new createStore({
    state: () => ({
        user: {
            data: {
                name: "Alexander Neudahin",
            },
            token: "",
        },
    }),
    mutations: {},
    actions: {},
    getters: {},
    modules: {},
});

export default store;
