<template>
  <div>
    <h2 class="text-3xl font-bold font-inter mb-10">Our customers love us</h2>
    <!-- Testimonials container -->
    <div class="space-y-10">
      <!-- Item -->
      <div class="p-5 rounded-xl bg-teal-50 border border-teal-200 odd:rotate-1 even:-rotate-1 hover:rotate-0 transition duration-150 ease-in-out">
        <div class="flex items-center space-x-5">
          <div class="relative shrink-0">
            <img class="rounded-full" src="../images/testimonial-01.jpg" width="102" height="102" alt="Testimonial 01" />
            <svg class="absolute top-0 right-0 fill-indigo-400" width="26" height="17" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 16.026h8.092l6.888-16h-4.592L0 16.026Zm11.02 0h8.092L26 .026h-4.65l-10.33 16Z" />
            </svg>
          </div>
          <figure>
            <blockquote class="text-lg font-bold m-0 pb-1">
              <p>Hiring a Senior Laravel engineer through JobBoard has been incredible. The best job board experience we've ever had.</p>
            </blockquote>
            <figcaption class="text-sm font-medium">Patrick Metzger, CEO <a class="text-teal-500 hover:underline" href="#0">App.com</a></figcaption>
          </figure>
        </div>
      </div>
      <!-- Item -->
      <div class="p-5 rounded-xl bg-sky-50 border border-sky-200 odd:rotate-1 even:-rotate-1 hover:rotate-0 transition duration-150 ease-in-out">
        <div class="flex items-center space-x-5">
          <div class="relative shrink-0">
            <img class="rounded-full" src="../images/testimonial-02.jpg" width="102" height="102" alt="Testimonial 02" />
            <svg class="absolute top-0 right-0 fill-indigo-400" width="26" height="17" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 16.026h8.092l6.888-16h-4.592L0 16.026Zm11.02 0h8.092L26 .026h-4.65l-10.33 16Z" />
            </svg>
          </div>
          <figure>
            <blockquote class="text-lg font-bold m-0 pb-1">
              <p>Hiring a Senior Laravel engineer through JobBoard has been incredible. The best job board experience we've ever had.</p>
            </blockquote>
            <figcaption class="text-sm font-medium">Annie Patrick, CEO <a class="text-sky-500 hover:underline" href="#0">TrueThing</a></figcaption>
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Testimonials',
}
</script>