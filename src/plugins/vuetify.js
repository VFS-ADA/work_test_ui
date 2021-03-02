import Vue from 'vue';
import Vuetify from 'vuetify/lib';
Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#1976D2',
                secondary: '#2196F3',
                accent: '#82B1FF',
                error: '#FF5252',
                info: '#f39f21',
                success: '#4CAF50',
                warning: '#FFC107',
                icon: 'mdi-weather-sunny',
                locale: 'common.light'
            },
            dark: {
                icon: 'mdi-weather-night',
                locale: 'common.dark'
            }
        },
        options: {customProperties: true}
    },
});
