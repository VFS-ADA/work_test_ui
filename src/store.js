import Vue from 'vue'
import Vuex from 'vuex'
import VueJwtDecode from 'vue-jwt-decode'

const axios = require('axios').default;

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        authenticate: {},

        secret_documents: {},
        wiki_documents: {},

        users: {},
    },
    getters: {
        userToken: (state) => {
            if (state.authenticate.token === undefined) {
                return undefined
            }
            return VueJwtDecode.decode(state.authenticate.token);
        },
    },
    mutations: {
        mutate(state, payload) {
            state[payload.property] = payload.with;
        },
    },
    actions: {
        async apiGet({state, commit}, payload) {
            // eslint-disable-next-line no-useless-catch
            try {
                let response = await axios.get(
                    process.env.VUE_APP_API_ROOT + payload.url,
                    {
                        headers: {
                            token: (payload.token === undefined) ? state.authenticate.token : payload.token,
                            'Cache-Control': 'no-cache',
                        },
                        params: payload.params,
                    }
                );
                if (payload.commit) {
                    commit('mutate', {
                        property: payload.state_property,
                        with: response.data,
                    });
                }
                return response;
            } catch (error) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                throw error;
            }
        },
        async apiPost({state, commit}, payload) {
            // eslint-disable-next-line no-useless-catch
            try {
                let response = await axios.post(
                    process.env.VUE_APP_API_ROOT + payload.url,
                    payload.data,
                    {
                        headers: {
                            token: (payload.token === undefined) ? state.authenticate.token : payload.token,
                        }
                    }
                );
                if (payload.commit) {
                    commit('mutate', {
                        property: payload.state_property,
                        with: response.data,
                    });
                }
                return response;
            } catch (error) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                throw error;
            }
        },
        async apiPatch({state}, payload) {
            // eslint-disable-next-line no-useless-catch
            try {
                let data = JSON.parse(JSON.stringify(payload.data));
                delete data._id;
                delete data._etag;
                delete data._created;
                delete data._updated;

                return await axios.patch(
                    process.env.VUE_APP_API_ROOT + payload.url,
                    data,
                    {
                        headers: {
                            token: state.authenticate.token,
                            "If-Match": payload.etag
                        }
                    }
                );
            } catch (error) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                throw error;
            }
        },
        async apiDelete({state}, payload) {
            // eslint-disable-next-line no-useless-catch
            try {
                return await axios.delete(
                    process.env.VUE_APP_API_ROOT + payload.url,
                    {
                        headers: {
                            token: state.authenticate.token,
                            "If-Match": payload.etag
                        }
                    }
                );
            } catch (error) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                throw error;
            }
        },
        setStateProperty({commit}, payload) {
            commit('mutate', {
                property: payload.state_property,
                with: payload.data,
            });
        },
    },
    modules: {}
})
