import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        options: {
            customProperties: true,
        },
        light: true,
        themes: {
            light: {
                blue1: "#1B379A",
                black: "#000000",
                white: "#F5F5F5",
                violet: "#5E6BE9",
                yellow: "#FEE92E",
                background: "#EAEEF4",
                grey1:"#D9D9D9"
            },
        },
    },
});
