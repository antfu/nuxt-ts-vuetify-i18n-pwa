<template lang='pug'>
v-app(dark)
  v-navigation-drawer(v-model='drawer' :mini-variant='miniVariant' :clipped='clipped' fixed app)
    v-list
      v-list-item(v-for='(item, i) in items' :key='i' :to='item.to' router exact)
        v-list-item-action
          v-icon {{ item.icon }}
        v-list-item-content
          v-list-item-title(v-text='item.title')
  v-app-bar(:clipped-left='clipped' fixed app)
    v-app-bar-nav-icon(@click.stop='drawer = !drawer')
      v-btn(@click.stop='clipped = !clipped' icon)
        v-icon mdi-application
      v-btn(@click.stop='fixed = !fixed' icon)
        v-icon mdi-minus
      v-toolbar-title(v-text='title')
        v-spacer
          v-btn(@click.stop='rightDrawer = !rightDrawer' icon)
            v-icon mdi-menu
  v-content
    v-container
      nuxt
  v-navigation-drawer(v-model='rightDrawer' :right='right' temporary fixed)
    v-list
      v-list-item(@click.native='right = !right')
        v-list-item-action
          v-icon(light)
            | mdi-repeat
        v-list-item-title Switch drawer (click me)
  v-footer(:fixed='fixed' app)
    span © 2019
</template>

<script lang='ts'>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
}
</script>
