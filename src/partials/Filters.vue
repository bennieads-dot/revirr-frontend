<template>
  <div class="flex flex-row mt-2">
    <div v-for="filter in filters" class="mr-2">
      <FilterItem :name="filter.name" :values="filter.values" />
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
        jobType: { name: "jobType", id: 1, values: [{ id: 1, value: "Full-time" }, { id: 2, value: "Part-time" }, { id: 3, value: "Internship" }] },
        skills: {
          name: "Skills", id: 2, values: [{ id: 1, value: "Programming" }, { id: 2, value: "Design" }, { id: 3, value: "Management" }]
        },
        salaryRange: { name: "SalaryRange", id: 3, values: [{ id: 1, value: "$20K-$50K" }, { id: 2, value: "$50K-$100K" }, { id: 3, value: ">$100K" }] },
        location: { name: "location", id: 4, values: [{ id: 1, value: "Baltimore" }, { id: 2, value: "Annapolis" }] },
      }
    }
  }
}
</script>