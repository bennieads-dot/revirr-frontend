<template>
  <main class="flex">

    <!-- Content -->
    <div class="min-h-screen w-full lg:w-1/2">

      <div class="h-full">

        <div class="h-full w-full max-w-md px-6 mx-auto flex flex-col after:mt-auto after:flex-1">

          <!-- Site header -->
          <header class="flex-1 flex mb-auto">
            <div class="flex items-center justify-between h-16 md:h-20">
              <!-- Logo -->
              <router-link class="block group" to="/" aria-label="Cruip">
                <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                  <path class="fill-indigo-500" d="M13.853 18.14 1 10.643 31 1l-.019.058z" />
                  <path class="fill-indigo-300" d="M13.853 18.14 30.981 1.058 21.357 31l-7.5-12.857z" />
                </svg>
              </router-link>
            </div>
          </header>

          <div class="flex-1 py-8">

            <div class="mb-10">
              <h1 class="text-4xl font-extrabold font-inter mb-2">Post a job on JobBoard</h1>
              <div class="text-gray-500">Find the best talent from around the world on the most exclusive job board on the internet.</div>
            </div>

            <!-- Form -->
            <form class="mb-12">
              <div class="divide-y divide-gray-200 -my-6">

                <!-- Group #1 -->
                <div class="py-6">
                  <div class="text-lg font-bold text-gray-800 mb-5"><span class="text-indigo-500">1.</span> Your company</div>
                  <div class="space-y-4">
                    <div>
                      <label class="block text-sm font-medium mb-1" for="name">Company Name <span class="text-red-500">*</span></label>
                      <input id="name" class="form-input w-full" type="text" required placeholder="E.g., Acme Inc." />
                    </div>
                    <div>
                      <label class="block text-sm font-medium mb-1" for="email">Contact Email <span class="text-red-500">*</span></label>
                      <input id="email" class="form-input w-full" type="email" required />
                    </div>
                    <div>
                      <label class="block text-sm font-medium mb-1" for="file">Company Logo <span class="text-gray-500">(optional)</span></label>
                      <div class="flex items-center">
                        <div class="shrink-0 mr-4">
                          <img class="object-cover w-16 h-16 rounded-full border border-gray-200" src="../images/upload.jpg" alt="Upload" />
                        </div>
                        <div>
                          <input id="file" type="file" class="block w-full text-sm text-gray-500 file:mr-4 file:py-1.5 file:px-3 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-indigo-500 file:text-white hover:file:bg-indigo-600 transition duration-150 ease-in-out cursor-pointer" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Group #2 -->
                <div class="py-6">
                  <div class="text-lg font-bold text-gray-800 mb-5"><span class="text-indigo-500">2.</span> The role</div>
                  <div class="space-y-4">
                    <div>
                      <label class="block text-sm font-medium mb-1" for="position">Position Name <span class="text-red-500">*</span></label>
                      <input id="position" class="form-input w-full" type="text" required placeholder="E.g., Senior Software Engineer" />
                    </div>
                    <div>
                      <label class="block text-sm text-gray-800 font-medium mb-1" for="role">Role <span class="text-rose-500">*</span></label>
                      <select id="role" class="form-select text-sm py-2 w-full" required>
                        <option>Programming</option>
                        <option>Design</option>
                        <option>Management / Finance</option>
                        <option>Customer Support</option>
                        <option>Sales / Marketing</option>
                      </select>
                    </div>
                    <div>
                      <label class="block text-sm text-gray-800 font-medium mb-1" for="commitment">Commitment <span class="text-rose-500">*</span></label>
                      <select id="commitment" class="form-select text-sm py-2 w-full" required>
                        <option>Full-time</option>
                        <option>Part-time</option>
                        <option>Intership</option>
                        <option>Contract / Freelance</option>
                        <option>Co-founder</option>
                      </select>
                    </div>
                    <div>
                      <label class="block text-sm text-gray-800 font-medium mb-1" for="description">Job Description <span class="text-rose-500">*</span></label>
                      <textarea id="description" class="form-textarea text-sm py-2 w-full" rows="4" required></textarea>
                    </div>
                    <div>
                      <label class="block text-sm font-medium mb-1" for="salary">Salary <span class="text-gray-500">(optional)</span></label>
                      <input id="salary" class="form-input w-full" type="text" />
                      <div class="text-xs text-gray-500 italic mt-2">Example: “$100,000 - $170,000 USD”</div>
                    </div>
                  </div>
                </div>

                <!-- Group #3 -->
                <div class="py-6">
                  <div class="text-lg font-bold text-gray-800 mb-5"><span class="text-indigo-500">3.</span> Select add-ons and pay</div>
                  <div class="space-y-4">
                    <button class="w-full text-left py-3 px-4 border rounded" :class="stick ? 'border-indigo-500 ring-2 ring-indigo-200' : 'border-gray-200'" @click.prevent="stick = !stick">
                      <div class="flex justify-between items-center">
                        <div>
                          <div class="text-sm text-gray-800 font-medium mb-1">Stick your post to stay on top (+$79)</div>
                          <div class="text-sm text-gray-500 italic">4x more views</div>
                        </div>
                        <div class="shrink-0 rounded-full border border-gray-200 ml-3">
                          <svg v-show="!stick" class="fill-indigo-500" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 15h-4v-4a1 1 0 0 0-2 0v4h-4a1 1 0 0 0 0 2h4v4a1 1 0 0 0 2 0v-4h4a1 1 0 0 0 0-2Z" />
                          </svg>
                          <svg v-show="stick" class="fill-teal-500" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                            <path d="m20.28 12.28-6.292 6.294-2.293-2.293a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l7-7a1 1 0 0 0-1.414-1.414Z" />
                          </svg>
                        </div>
                      </div>
                    </button>
                    <button class="w-full text-left py-3 px-4 border rounded" :class="highlight ? 'border-indigo-500 ring-2 ring-indigo-200' : 'border-gray-200'" @click.prevent="highlight = !highlight">
                      <div class="flex justify-between items-center">
                        <div>
                          <div class="text-sm text-gray-800 font-medium mb-1">Highlight your post in indigo (+$49)</div>
                          <div class="text-sm text-gray-500 italic">2x more views</div>
                        </div>
                        <div class="shrink-0 rounded-full border border-gray-200 ml-3">
                          <svg v-show="!highlight" class="fill-indigo-500" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 15h-4v-4a1 1 0 0 0-2 0v4h-4a1 1 0 0 0 0 2h4v4a1 1 0 0 0 2 0v-4h4a1 1 0 0 0 0-2Z" />
                          </svg>
                          <svg v-show="highlight" class="fill-teal-500" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                            <path d="m20.28 12.28-6.292 6.294-2.293-2.293a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l7-7a1 1 0 0 0-1.414-1.414Z" />
                          </svg>
                        </div>
                      </div>
                    </button>
                  </div>
                  <div class="mt-6">
                    <button class="btn w-full text-white bg-indigo-500 hover:bg-indigo-600 shadow-sm">Pay Now - $349</button>
                  </div>
                  <div class="mt-4">
                    <div class="text-xs text-gray-500">By clicking pay you agree to our <a class="underline" href="#0">Terms of Service</a> and <a class="underline" href="#0">Privacy Policy</a>.</div>
                  </div>
                </div>

              </div>
            </form>

          </div>

        </div>

      </div>

    </div>

    <!-- Right side -->
    <div class="fixed right-0 top-0 bottom-0 hidden lg:block lg:w-1/2 overflow-hidden" aria-hidden="true">

      <!-- Bg -->
      <div class="absolute inset-0 bg-gradient-to-b from-indigo-100 to-white pointer-events-none -z-10" aria-hidden="true"></div>

      <!-- Illustration -->
      <div class="hidden md:block absolute right-0 pointer-events-none -z-10" aria-hidden="true">
        <img src="../images/auth-illustration.svg" class="max-w-none" width="1440" height="900" alt="Page Illustration" />
      </div>

      <!-- Quotes -->
      <div class="absolute inset-0 flex flex-col justify-center">
        <div class="px-5 sm:px-6 py-8">
          <div class="w-full max-w-xl mx-auto">
            <div class="space-y-3 group">
              <!-- Testimonial -->
              <div class="p-4 bg-sky-50 border border-sky-200 rounded-xl opacity-30 hover:opacity-100 transition duration-150 ease-in-out">
                <div class="flex items-center space-x-5">
                  <div class="relative shrink-0">
                    <img class="rounded-full" src="../images/testimonial-auth-04.jpg" width="88" height="88" alt="Testimonial 04" />
                    <svg class="absolute top-0 right-0 fill-indigo-400" width="26" height="17" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 16.026h8.092l6.888-16h-4.592L0 16.026Zm11.02 0h8.092L26 .026h-4.65l-10.33 16Z" />
                    </svg>
                  </div>
                  <figure>
                    <blockquote class="font-bold m-0 pb-1">
                      <p>Listing our jobs through JobBoard was simple, quick, and helped us find amazing candidates.</p>
                    </blockquote>
                    <figcaption class="text-sm font-medium">Lisa Smith, developer at <a class="text-sky-500 hover:underline" href="#0">AppyYou</a></figcaption>
                  </figure>
                </div>
              </div>
              <!-- Testimonial -->
              <div class="p-4 bg-sky-50 border border-sky-200 rounded-xl hover:opacity-100 transition duration-150 ease-in-out">
                <div class="flex items-center space-x-5">
                  <div class="relative shrink-0">
                    <img class="rounded-full" src="../images/testimonial-auth-05.jpg" width="88" height="88" alt="Testimonial 05" />
                    <svg class="absolute top-0 right-0 fill-indigo-400" width="26" height="17" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 16.026h8.092l6.888-16h-4.592L0 16.026Zm11.02 0h8.092L26 .026h-4.65l-10.33 16Z" />
                    </svg>
                  </div>
                  <figure>
                    <blockquote class="font-bold m-0 pb-1">
                      <p>Listing our jobs through JobBoard was simple, quick, and helped us find amazing candidates.</p>
                    </blockquote>
                    <figcaption class="text-sm font-medium">Mark Mills, developer at <a class="text-sky-500 hover:underline" href="#0">App.com</a></figcaption>
                  </figure>
                </div>
              </div>
              <!-- Testimonial -->
              <div class="p-4 bg-sky-50 border border-sky-200 rounded-xl opacity-30 hover:opacity-100 transition duration-150 ease-in-out">
                <div class="flex items-center space-x-5">
                  <div class="relative shrink-0">
                    <img class="rounded-full" src="../images/testimonial-auth-06.jpg" width="88" height="88" alt="Testimonial 06" />
                    <svg class="absolute top-0 right-0 fill-indigo-400" width="26" height="17" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 16.026h8.092l6.888-16h-4.592L0 16.026Zm11.02 0h8.092L26 .026h-4.65l-10.33 16Z" />
                    </svg>
                  </div>
                  <figure>
                    <blockquote class="font-bold m-0 pb-1">
                      <p>Listing our jobs through JobBoard was simple, quick, and helped us find amazing candidates.</p>
                    </blockquote>
                    <figcaption class="text-sm font-medium">Lisa Smith, developer at <a class="text-sky-500 hover:underline" href="#0">AppyYou</a></figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  </main>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'PostAJob',
  setup() {
    const stick = ref(false)
    const highlight = ref(true)

    return {
      stick,
      highlight,
    }
  },
}
</script>