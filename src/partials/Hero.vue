<template>
  <section class="relative overflow-hidden">

    <!-- Bg -->
    <div class="absolute inset-0 bg-gradient-to-b from-indigo-100 to-white pointer-events-none -z-10" aria-hidden="true"></div>

    <!-- Illustration -->
    <div class="hidden md:block absolute left-1/2 -translate-x-1/2 pointer-events-none -z-10" aria-hidden="true">
      <img src="../images/hero-illustration.svg" class="max-w-none" width="1440" height="749" alt="Hero Illustration" />
    </div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-28 pb-8 md:pt-36 md:pb-16">

        <!-- Hero content -->
        <div class="max-w-3xl text-center md:text-left">

          <!-- Copy -->
          <h1 class="h1 font-inter mb-6">Join the best tech startups in the <span class="font-nycd text-indigo-500 font-normal">industry</span></h1>
          <p class="text-lg text-gray-500 mb-8">Our landing page template works on all devices, so you only have to set it<br class="hidden md:block" /> up once, and get beautiful results forever.</p>
          <!-- Button + Avatars -->
          <div class="sm:flex sm:items-center sm:justify-center md:justify-start space-y-6 sm:space-y-0 sm:space-x-5">
            <div>
              <router-link class="btn text-white bg-indigo-500 hover:bg-indigo-600 shadow-sm" to="/post-a-job">Post a job - $299</router-link>
            </div>
            <div class="sm:flex sm:items-center sm:justify-center space-y-2 sm:space-y-0 sm:space-x-3">
              <div class="inline-flex -space-x-3 -ml-0.5">
                <img class="rounded-full border-2 border-indigo-50 box-content" src="../images/avatar-01.jpg" width="32" height="32" alt="Avatar 01" />
                <img class="rounded-full border-2 border-indigo-50 box-content" src="../images/avatar-02.jpg" width="32" height="32" alt="Avatar 02" />
                <img class="rounded-full border-2 border-indigo-50 box-content" src="../images/avatar-03.jpg" width="32" height="32" alt="Avatar 03" />
                <img class="rounded-full border-2 border-indigo-50 box-content" src="../images/avatar-04.jpg" width="32" height="32" alt="Avatar 04" />
              </div>
              <div class="text-sm text-gray-500 font-medium">Reach <span class="text-indigo-500">100K+</span> Prefessionals</div>
            </div>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
}
</script>