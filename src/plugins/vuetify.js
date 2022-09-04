import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import { preset } from 'vue-cli-plugin-vuetify-preset-shrine/preset'

Vue.use(Vuetify);

const options = {
    theme: {
      themes: {
        light: { primary: 'blue' },
      },
    },
  }

export default new Vuetify({
    // The provided global preset is first merged with defaults
  preset,
  // User options are then merged, overwriting defaults and the global preset
  ...options,
});
