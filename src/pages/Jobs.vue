<template>
  <div className="flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">

      <!-- Page content -->
      <section>
        <div class="max-w-6xl mx-auto px-4 sm:px-6">
          <div class="py-8 md:py-16">
            <div class="md:flex md:justify-between" data-sticky-container>

              <Sidebar />

              <!-- Main content -->
              <div class="md:grow">

                <JobList />

              </div>

            </div>
          </div>
        </div>
      </section>

    </main>

    <!-- Site footer -->
    <Footer />

  </div>
</template>

<script>
import Header from '../partials/Header.vue'
import Sidebar from '../partials/Sidebar.vue'
import JobList from '../partials/JobList.vue'
import Footer from '../partials/Footer.vue'

export default {
  name: 'Jobs',
  components: {
    Header,
    Sidebar,
    JobList,
    Footer,
  },
}
</script>