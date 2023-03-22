<template>
  <header class="w-full z-30">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="flex items-center justify-between h-16 md:h-20">

        <!-- Site branding -->
        <div class="shrink-0 mr-4">
          <!-- Logo -->
          <router-link id="logo" class="self-center text-3xl font-bold whitespace-nowrap" to="/">
            entryfindr
            <span class="sr-only">to home page</span>
          </router-link>
        </div>

        <!-- Desktop navigation -->
        <nav class="flex grow">

          <!-- Desktop sign in links -->
          <ul class="flex grow justify-end flex-wrap items-center">
            <li class="ml-3">
              <router-link class="btn-sm text-white bg-indigo-500 hover:bg-indigo-600 w-full shadow-sm" id="signin"
                to="/post-a-job">sign in</router-link>
            </li>
          </ul>

        </nav>

      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style>
#logo {
  color: #283848;
}
</style>



