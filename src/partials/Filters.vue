<template>
  <div class="flex overflow-x-scroll pb-10 hide-scroll-bar">
    <div class="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 ">
      <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white sr-only">Select an
        option</label>
      <select id="countries"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 inline-block">
        <option selected>Choose a country</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>
      <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white sr-only">Select an
        option</label>
      <select id="countries"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 min-w-max">
        <option selected>Choose a country</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>
      <select id="countries"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option selected>Choose a country</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>
      <select id="countries"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option selected>Choose a country</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>
    </div>
  </div>
</template>
<script>
import FilterItem from '../partials/FilterItem.vue'
export default {
  name: 'filters',
  components: {
    FilterItem,
  },
  data() {
    return {
      filters: {
        jobType: { id: 1, values: [{ id: 1, value: "Full-time" }, { id: 2, value: "Part-time" }, { id: 3, value: "Internship" }] },
        skills: {
          id: 2, values: [{ id: 1, value: "Programming" }, { id: 2, value: "Design" }, { id: 3, value: "Management" }]
        },
        salaryRange: { id: 3, values: [{ id: 1, value: "$20K-$50K" }, { id: 2, value: "$50K-$100K" }, { id: 3, value: ">$100K" }] },
        location: { id: 4, values: [{ id: 1, value: "Baltimore" }, { id: 2, value: "Annapolis" }] },
      }
    }
  }
}
</script>