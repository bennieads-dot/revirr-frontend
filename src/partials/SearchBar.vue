<template>
  <div>
    <form>
      <div class="flex flex-col mx-5 md:flex-row justify-center text-center">
        <input type="text"
          class="form-control md:basis-5/6 px-4 py-2 mb-2 md:mb-0 md:mr-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded m-0 focus:text-gray-700 focus:bg-white focus:border-slate-200 focus:outline-none focus:ring-transparent"
          :class="{ 'invalid': true }" placeholder="job title, keyword, skill..." v-model="keyword.text">
        <input type="text"
          class="form-control md:basis-1/2 px-4 py-2 mb-2 md:mb-0 md:mr-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded m-0 focus:text-gray-700 focus:bg-white focus:border-slate-200 focus:outline-none focus:ring-transparent"
          v-model="location.text" placeholder="city, state, zip...">
        <span v-if='keyword.invalid' class="text-pink-600 text-sm">
          Please provide a valid email address.
        </span>
        <button type="button" id="search"
          class="inline-block px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-transparent active:bg-blue-800 active:shadow-lg ease-in-out"
          data-mdb-ripple="true" data-mdb-ripple-color="light" @click='validateSearch'>search
        </button>
      </div>
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