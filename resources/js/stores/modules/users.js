export default {

    state: {
        errors: {},
        items: {},
        item: {},
    },

    getters: {
        errors: state => {
            return state.errors;
        },
        items: state => {
            return state.items;
        },
        item: state => {
            return state.item;
        },
    },

    mutations: {
        errors: (state, data) => {
            state.errors = data;
        },
        index: (state, data) => {
            state.items = data;
        },
        show: (state, data) => {
            state.item = data;
        },
        store: (state, data) => {
            //
        },
        update: (state, data) => {
            state.item = data;
            let item = state.items.data.find(item => item.id === data.id);
            if (item !== undefined) {
                Object.assign(item, data);
            }
        },
        destroy: (state, id) => {
            let item_id = state.items.data.findIndex(item => item.id === id);
            state.items.data.splice(item_id, 1);
            if (state.item.id === id) {
                state.item = [];
            }
        },
    },

    actions: {
        index: ({ commit }, page = 1) => {
            axios.get('/users?page=' + page).then(response => {
                commit('index', response.data);
            });
        },
        show: ({ commit }, id) => {
            axios.get('/users/' + id).then(response => {
                commit('show', response.data);
            });
        },
        store: ({ commit, getters, dispatch }, item) => {
            event.preventDefault();
            axios.post('/users', item).then(response => {
                if (response.status === 200) {
                    if (getters.items.current_page === getters.items.last_page) {
                        dispatch('index', getters.items.current_page);
                    }
                }
            }).catch(error => {
                if (error.response.status === 422) {
                    commit('errors', Object.values(error.response.data.errors).flat());
                }
            });
        },
        update: ({ commit }, item) => {
            event.preventDefault();
            axios.patch('/users/' + item.id, item).then(response => {
                if (response.status === 200) {
                    commit('update', item);
                }
            }).catch(error => {
                if (error.response.status === 422) {
                    commit('errors', Object.values(error.response.data.errors).flat());
                }
            });
        },
        destroy: ({ commit }, id) => {
            axios.delete('/users/' + id).then(response => {
                commit('destroy', id);
            });
        },
    },

};
