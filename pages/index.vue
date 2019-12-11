<template lang='pug'>
v-layout(column justify-center align-center)
  v-flex(xs12 sm8 md6)
    v-card
      v-card-title.headline
        | {{ $t('hello') }}
      v-card-text
        p Vuetify is a progressive Material Design component framework for Vue.js.
      v-card-actions
        v-spacer
          v-btn(color='primary' text @click='add')
            | Continue {{counter}}
</template>

<script lang='ts'>
import { ref } from '@vue/composition-api'

export default {
  setup () {
    const counter = ref(0)

    return {
      counter,
      add: () => counter.value += 1,
    }
  },
}
</script>
