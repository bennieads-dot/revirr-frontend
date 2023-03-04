<template>
  <router-view />
</template>

<script>
import Sticky from 'sticky-js'

export default {
  mounted() {
    if (this.$router) {
      this.$watch('$route', () => {
        this.$nextTick(() => {
          const stickyEls = document.querySelectorAll('[data-sticky]')
          if (stickyEls.length > 0) {
            const sticky = new Sticky('[data-sticky]')
          }
        })
      });
    } 
  }
}
</script>
