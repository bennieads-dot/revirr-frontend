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
            <!-- font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-transparent active:bg-blue-800 active:shadow-lg ease-in-out -->
            <li class="ml-3">
              <router-link id="signin" class="btn text-white shadow-sm" to="/signin">sign in</router-link>
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



