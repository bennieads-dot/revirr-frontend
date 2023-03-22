<template>
  <div>
    <form class="flex flex-col md:flex-row justify-center">
      <div class="flex flex-col md:basis-5/6">
        <input type="text"
          class="form-control px-4 py-2 mb-2 md:mb-0 md:mr-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded m-0 focus:text-gray-700 focus:bg-white focus:border-slate-200 focus:outline-none focus:ring-transparent"
          :class="{ 'invalid': true }" placeholder="job title, keyword, skill..." v-model="keyword.text">
        <span v-if='keyword.invalid' class="text-red-600 text-sm mb-2">
          Keyword required
        </span>
      </div>
      <div class="flex flex-col md:basis-1/2">
        <input type="text"
          class="form-control px-4 py-2 mb-2 md:mb-0 md:mr-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded m-0 focus:text-gray-700 focus:bg-white focus:border-slate-200 focus:outline-none focus:ring-transparent"
          v-model="location.text" placeholder="city, state, zip...">
        <span v-if='keyword.invalid' class="text-red-600 text-sm mb-2">
          Location required
        </span>
      </div>
      <button type="button" id="search"
        class="inline-block h-12 px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-transparent active:bg-blue-800 active:shadow-lg ease-in-out"
        data-mdb-ripple="true" data-mdb-ripple-color="light" @click='validateSearch' @keyup.enter='validateSearch'>search
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
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
      if (!this.keyword.text) {
        this.keyword.invalid = true
      } else if (!this.location.text) {
        this.location.invalid = true;
      } else {
        this.$router.push({ path: 'jobs', query: { keyword: this.keyword.text, location: this.location.text } })
      }
    }
  },
  beforeMount() {
    this.keyword.text = router.query.keyword ? router.query.keyword : '';
    this.location.text = $router.query.location ? router.query.location : '';
  },
}
</script>