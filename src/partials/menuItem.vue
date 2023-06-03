<template>
  <div>
    <label class="block text-sm text-gray-800 font-medium mb-1" for="role">Role <span
        class="text-rose-500">*</span></label>
    <select id="role" class="form-select text-sm py-2 w-min-content" required>
      <option>Programming</option>
      <option>Design</option>
      <option>Management / Finance</option>
      <option>Customer Support</option>
      <option>Sales / Marketing</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'menuItem'
}
</script>

<style>
/* Custom styles can be added here */
</style>