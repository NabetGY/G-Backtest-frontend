// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import * as components from 'vuetify/lib/components'
import * as directives from 'vuetify/lib/directives'
// Vuetify
import { createVuetify } from 'vuetify'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
  },

})

export default vuetify