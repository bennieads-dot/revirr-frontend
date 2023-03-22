<template>
  <div className="flex flex-col min-h-screen overflow-hidden" :id="id">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="max-w-6xl mx-auto px-4 sm:px-6 mb-auto">

      <TextHeader />

    </main>

    <!-- Site footer -->
    <Footer />

  </div>
</template>

<script>
import Header from '../partials/Header.vue'
import TextHeader from '../partials/TextHeader.vue'
import Sidebar from '../partials/Sidebar.vue'
import JobList from '../partials/JobList.vue'
import Testimonials from '../partials/Testimonials.vue'
import Footer from '../partials/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    TextHeader,
    Sidebar,
    JobList,
    Testimonials,
    Footer,
  },
  data() {
    return {
      id: "home",
    }
  }
}
</script>

<style>
#home {
  background-color: #FE9E20;
}

#search,
#signin {
  background-color: #2c3e50;
}

#search:hover,
#signin:hover {
  background-color: #283848;
}
</style>