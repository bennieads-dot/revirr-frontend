<template>
  <aside class="mb-8 md:mb-0 md:w-64 lg:w-72 md:ml-12 lg:ml-20 md:shrink-0 md:order-1">
    <div data-sticky data-margin-top="32" data-sticky-for="768" data-sticky-wrap>

      <div class="relative bg-gray-50 rounded-xl border border-gray-200 p-5">

        <div class="absolute top-5 right-5 leading-none">
          <button class="text-sm font-medium text-indigo-500 hover:underline">Clear</button>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-1 gap-6">
          <!-- Group 1 -->
          <div>
            <div class="text-sm text-gray-800 font-semibold mb-3">Job Type</div>
            <ul class="space-y-2">
              <li>
                <label class="flex items-center">
                  <input type="checkbox" class="form-checkbox" />
                  <span class="text-sm text-gray-600 ml-2">Full-time</span>
                </label>
              </li>
              <li>
                <label class="flex items-center">
                  <input type="checkbox" class="form-checkbox" />
                  <span class="text-sm text-gray-600 ml-2">Part-time</span>
                </label>
              </li>
              <li>
                <label class="flex items-center">
                  <input type="checkbox" class="form-checkbox" />
                  <span class="text-sm text-gray-600 ml-2">Intership</span>
                </label>
              </li>
              <li>
                <label class="flex items-center">
                  <input type="checkbox" class="form-checkbox" />
                  <span class="text-sm text-gray-600 ml-2">Contract / Freelance</span>
                </label>
              </li>
              <li>
                <label class="flex items-center">
                  <input type="checkbox" class="form-checkbox" />
                  <span class="text-sm text-gray-600 ml-2">Co-founder</span>
                </label>
              </li>
            </ul>
          </div>
          <!-- Group 2 -->
          <div>
            <div class="text-sm text-gray-800 font-semibold mb-3">Job Roles</div>
            <ul class="space-y-2">
              <li>
                <label class="flex items-center">
                  <input type="checkbox" class="form-checkbox" checked />
                  <span class="text-sm text-gray-600 ml-2">Programming</span>
                </label>
              </li>
              <li>
                <label class="flex items-center">
                  <input type="checkbox" class="form-checkbox" />
                  <span class="text-sm text-gray-600 ml-2">Design</span>
                </label>
              </li>
              <li>
                <label class="flex items-center">
                  <input type="checkbox" class="form-checkbox" />
                  <span class="text-sm text-gray-600 ml-2">Management / Finance</span>
                </label>
              </li>
              <li>
                <label class="flex items-center">
                  <input type="checkbox" class="form-checkbox" />
                  <span class="text-sm text-gray-600 ml-2">Customer Support</span>
                </label>
              </li>
              <li>
                <label class="flex items-center">
                  <input type="checkbox" class="form-checkbox" />
                  <span class="text-sm text-gray-600 ml-2">Sales / Marketing</span>
                </label>
              </li>
            </ul>
          </div>
          <!-- Group 3 -->
          <div>
            <div class="text-sm text-gray-800 font-semibold mb-3">Remote Only</div>
            <div class="flex items-center">
              <div class="form-switch">
                <input type="checkbox" id="remote-toggle" class="sr-only" v-model="remoteJob" true-value="On" false-value="Off" />
                <label class="bg-gray-300" for="remote-toggle">
                  <span class="bg-white shadow-sm" aria-hidden="true"></span>
                  <span class="sr-only">Remote Only</span>
                </label>
              </div>
              <div class="text-sm text-gray-400 italic ml-2">{{remoteJob}}</div>
            </div>
          </div>
          <!-- Group 3 -->
          <div>
            <div class="text-sm text-gray-800 font-semibold mb-3">Salary Range</div>
            <ul class="space-y-2">
              <li>
                <label class="flex items-center">
                  <input type="checkbox" class="form-checkbox" />
                  <span class="text-sm text-gray-600 ml-2">$20K - $50K</span>
                </label>
              </li>
              <li>
                <label class="flex items-center">
                  <input type="checkbox" class="form-checkbox" />
                  <span class="text-sm text-gray-600 ml-2">$50K - $100K</span>
                </label>
              </li>
              <li>
                <label class="flex items-center">
                  <input type="checkbox" class="form-checkbox" />
                  <span class="text-sm text-gray-600 ml-2">&gt; $100K</span>
                </label>
              </li>
              <li>
                <label class="flex items-center">
                  <input type="checkbox" class="form-checkbox" />
                  <span class="text-sm text-gray-600 ml-2">Drawing / Painting</span>
                </label>
              </li>
            </ul>
          </div>
          <!-- Group 4 -->
          <div>
            <div class="text-sm text-gray-800 font-semibold mb-3">Location</div>
            <label class="sr-only">Location</label>
            <select class="form-select w-full">
              <option>Anywhere</option>
              <option>London</option>
              <option>San Francisco</option>
              <option>New York</option>
              <option>Berlin</option>
            </select>
          </div>
        </div>
      </div>

    </div>
  </aside>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Sidebar',
  setup() {

    const remoteJob = ref('Off')

    return {
      remoteJob,
    }
  }  
}
</script>