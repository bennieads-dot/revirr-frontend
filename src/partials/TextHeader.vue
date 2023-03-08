<template>
  <section>
    <div class="text-center text-gray-800 py-16 px-6">
      <h1 id="tag" class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight">Real. Entry Level. Jobs.</h1>
    </div>
    <form>
      <div class="flex flex-col mx-5 md:flex-row justify-center text-center">
        <input type="text"
          class="form-control block basis-1/2 px-4 py-2 mb-2 md:mb-0 md:mr-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded m-0 focus:text-gray-700 focus:bg-white focus:border-slate-200 focus:outline-none focus:ring-transparent"
          :class="{ 'invalid': true }" placeholder="job title, keyword, skill..." v-model="keyword.text">
        <input type="text"
          class="form-control block basis-1/2 px-4 py-2 mb-2 md:mb-0 md:mr-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded m-0 focus:text-gray-700 focus:bg-white focus:border-slate-200 focus:outline-none focus:ring-transparent"
          v-model="location.text" placeholder="city, state, zip...">
        <button type="button" id="search"
          class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-transparent active:bg-blue-800 active:shadow-lg ease-in-out"
          data-mdb-ripple="true" data-mdb-ripple-color="light" @click='validateSearch'>search
        </button>
      </div>
    </form>

  </section>
</template>


<script>
export default {
  name: 'TextHeader',
  data() {
    return {
      keyword: {
        text: "",
        invalid: false
      },
      location: {
        text: "",
        invalid: false
      }
    }
  },
  methods: {
    validateSearch() {
      // Handle form submission here
      if (this.keyword.text) {
        console.log(this.keyword.text)
      } else {
        this.loading = false;
        this.invalidInput = true;
      }
    }
  }
}
</script>

<style>
#tag {
  color: #2c3e50
}
</style>
