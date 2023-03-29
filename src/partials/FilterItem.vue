<template>
  <Combobox v-model="selected" multiple>
    <ul v-if="selected.length > 0">
      <li v-for="item in this.selected" :key="item.id">
        {{ item.value }}
      </li>
    </ul>
    <ComboboxInput />
    <ComboboxOptions>
      <ComboboxOption v-for="option in options" :key="option.id" :value="option.value">
        {{ option.value }}
      </ComboboxOption>
    </ComboboxOptions>
  </Combobox>
</template>

<script>
import {
  Combobox,
  ComboboxInput,
  ComboboxOptions,
  ComboboxOption,
} from '@headlessui/vue'

export default {
  name: 'FilterItem',
  props: ['options'],
  data() {
    return {
      selected: []
    }
  }
}
</script>