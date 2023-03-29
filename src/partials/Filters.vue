<template>
  <FilterItem v-for="filter in filters" :key="filter.id" :options="filter.values" />
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