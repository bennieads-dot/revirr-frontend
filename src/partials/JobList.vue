<template>
  <div class="pb-8 md:pb-16">
    <h2 class="text-3xl font-bold font-inter mb-10">Latest jobs</h2>
    <!-- List container -->
    <div class="flex flex-col">

      <!-- Items -->
      <JobItem
        v-for="item in items"
        :key="item.id"
        :item="item"
      />

      <!-- Newletter CTA -->
      <div class="py-8 border-b border-gray-200 -order-1">
        <Newsletter />
      </div>

    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

import JobItem from '../partials/JobItem.vue'
import Newsletter from '../partials/Newsletter.vue'

import Image01 from '../images/company-icon-01.svg'
import Image02 from '../images/company-icon-02.svg'
import Image03 from '../images/company-icon-03.svg'
import Image04 from '../images/company-icon-04.svg'
import Image05 from '../images/company-icon-05.svg'
import Image06 from '../images/company-icon-06.svg'
import Image07 from '../images/company-icon-07.svg'
import Image08 from '../images/company-icon-08.svg'
import Image09 from '../images/company-icon-09.svg'
import Image10 from '../images/company-icon-10.svg'
import Image11 from '../images/company-icon-11.svg'

export default {
  name: 'JobList',
  components: {
    JobItem,
    Newsletter,
  },
  setup() {

    const items = ref([
      {
        id: 0,
        sticky: true,
        title: 'Engineering Manager Developer Experience',
        slug: '/job-post',
        name: 'Qonto',
        image: Image01,
        tag1: '$75K - $100K',
        tag2: '🇬🇧 London, UK',
        date: '22d'
      },
      {
        id: 1,
        sticky: false,
        title: 'Software Engineer Backend',
        slug: '/job-post',
        name: 'Vimeo',
        image: Image02,
        tag1: 'Full Time',
        tag2: '🌎 Remote',
        date: '2h'
      },  
      {
        id: 2,
        sticky: false,
        title: 'Senior Site Reliability Engineer',
        slug: '/job-post',
        name: 'Robinhood',
        image: Image03,
        tag1: 'Full Time',
        tag2: '🌎 Remote',
        date: '2h'
      },  
      {
        id: 3,
        sticky: false,
        title: 'Remote Shopify Website Tester',
        slug: '/job-post',
        name: 'GitHub',
        image: Image03,
        tag1: '$100K - $170K',
        tag2: '🇺🇸 NYC',
        date: '4h'
      },  
      {
        id: 4,
        sticky: false,
        title: 'Remote Senior Software Engineer',
        slug: '/job-post',
        name: 'GitHub',
        image: Image04,
        tag1: '$100K - $170K',
        tag2: '🇺🇸 NYC',
        date: '7h'
      },                        
      {
        id: 5,
        sticky: false,
        title: 'Senior Web App Designer',
        slug: '/job-post',
        name: 'Qonto',
        image: Image01,
        tag1: 'Contract',
        tag2: '🇬🇧 London, UK',
        date: '12h'
      },        
      {
        id: 6,
        sticky: false,
        title: 'Ruby on Rails Engineer',
        slug: '/job-post',
        name: 'Revolut',
        image: Image05,
        tag1: 'Full Time',
        tag2: '🌎 Remote',
        date: '12h'
      },  
      {
        id: 7,
        sticky: false,
        title: 'Senior Software Engineer Backend',
        slug: '/job-post',
        name: 'HSBC',
        image: Image06,
        tag1: 'Full Time',
        tag2: '🇮🇹 Milan, IT',
        date: '20h'
      },  
      {
        id: 8,
        sticky: false,
        title: 'React.js Software Developer',
        slug: '/job-post',
        name: 'Twitter',
        image: Image07,
        tag1: 'Full Time',
        tag2: '🌎 Remote',
        date: '1d'
      },  
      {
        id: 9,
        sticky: false,
        title: 'Senior Client Engineer (React & React Native)',
        slug: '/job-post',
        name: 'Medium',
        image: Image08,
        tag1: '$55K - $100K',
        tag2: '🌎 Remote',
        date: '1d'
      },  
      {
        id: 10,
        sticky: false,
        title: 'Contract React Native Engineer',
        slug: '/job-post',
        name: 'Twitch',
        image: Image09,
        tag1: 'Full Time',
        tag2: '🌎 Remote',
        date: '2d'
      },                                
      {
        id: 11,
        sticky: false,
        title: 'QA Automation Engineer',
        slug: '/job-post',
        name: 'Figma',
        image: Image10,
        tag1: 'Full Time',
        tag2: '🌎 Remote',
        date: '2d'
      },        
      {
        id: 12,
        sticky: false,
        title: 'Senior Marketing Program Manager',
        slug: '/job-post',
        name: 'Figma',
        image: Image10,
        tag1: 'Full Time',
        tag2: '🌎 Remote',
        date: '2d'
      },        
      {
        id: 13,
        sticky: false,
        title: 'Senior Product Designer',
        slug: '/job-post',
        name: 'Figma',
        image: Image10,
        tag1: 'Full Time',
        tag2: '🌎 Remote',
        date: '2d'
      },  
      {
        id: 14,
        sticky: false,
        title: 'Remote Cyber Security Analyst US',
        slug: '/job-post',
        name: 'Facebook',
        image: Image11,
        tag1: '$55K - $100K',
        tag2: '🇺🇸 United States',
        date: '2d'
      },
    ])

    return {
      items,
    }  
  }  
}
</script>