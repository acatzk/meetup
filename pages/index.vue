<template>
  <div>
    <!-- event groups -->
    <div class="bg-meetup-blue pb-20 py-8 text-center">
      <div class="text-white text-4xl font-bold">Find your next event</div>
      <div class="text-gray-400 space-x-3">
        <span>1 event in your groups</span>
        <span>&middot;</span>
        <span>42 events near you</span>
      </div>
    </div>

    <!-- search area -->
    <div class="sticky top-0 container mx-auto px-40 -mt-8 z-40">
      <div class="bg-gray-900 text-white flex items-center justify-between p-3">
        <div class="flex items-center">
          <div class="relative">
            <input class="py-3 px-2 w-72 pr-12 rounded-sm text-gray-600 focus:outline-none" type="text" placeholder="Search">
            <div class="absolute top-0 right-0 mr-3" style="top: 10px">
              <svg  class="text-gray-600" 
                    width="28" 
                    height="28" 
                    stroke="currentColor" 
                    fill="none" 
                    xmlns:xlink="http://www.w3.org/1999/xlink" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    preserveAspectRatio="xMidYMid meet" 
                    data-attributes-set=",xmlns:xlink,xmlns,viewBox,preserveAspectRatio">
                <path xmlns="http://www.w3.org/2000/svg" 
                      stroke-linecap="round" 
                      stroke-linejoin="round" 
                      stroke-width="3" 
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z">
                </path>
              </svg>
            </div>
          </div>
          <div class="ml-4">
            within 
            <a class="pb-1 border-b border-gray-500 hover:border-white" href="#">50 miles</a> of
            <a class="pb-1 border-b border-gray-500 hover:border-white" href="#">Manila, PH</a>
          </div>
        </div>
        <div class="flex items-center">
          <button class="border-l border-b border-t border-gray-700 px-6 py-2 rounded-l-sm focus:outline-none">Groups</button>
          <button class="border-r border-b border-t border-gray-700 bg-gray-700 text-white px-6 py-2 rounded-r-sm focus:outline-none">Calendar</button>
        </div>
      </div>
    </div> <!-- end container -->

    <div class="mt-6 container mx-auto px-40 flex">
      <!-- width of 70% -->
      <div class="w-7/10">
        <!-- looped the events -->
        <div v-for="(event, i) in events" :key="i">
          <EventCard :date="event.date" :event="event"/>
        </div>

        <div class="border-t border-b border-gray-400 py-8 mb-8">
          <div class="text-center font-semibold text-2xl mb-2">
            Host events in Manila
          </div>
          <div class="text-center mb-8">
            Can't find what you're looking for? Create a Meetup group to start hosting local events.
          </div>
          
            <div class="flex -mx-2">
              <div class="w-1/2 mx-2">
                <div class="bg-white shadow-lg mb-4">
                  <div class="px-6 py-4">
                    <div class="font-bold">
                      <a href="#">JavaScript Libraries</a>
                    </div>
                    <div class="text-gray-700">
                      50 follow this topic
                    </div>
                    <div class="mt-1">
                      <a class="text-teal-600 hover:underline" href="#">
                        Host Events
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-1/2 mx-2">
                <div class="bg-white shadow-lg mb-4">
                  <div class="px-6 py-4">
                    <div class="font-bold">
                      <a href="#">JavaScript Libraries</a>
                    </div>
                    <div class="text-gray-700">
                      50 follow this topic
                    </div>
                    <div class="mt-1">
                      <a class="text-teal-600 hover:underline" href="#">
                        Host Events
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex -mx-2">
              <div class="w-1/2 mx-2">
                <div class="bg-white shadow-lg mb-4">
                  <div class="px-6 py-4">
                    <div class="font-bold">
                      <a href="#">JavaScript Libraries</a>
                    </div>
                    <div class="text-gray-700">
                      50 follow this topic
                    </div>
                    <div class="mt-1">
                      <a class="text-teal-600 hover:underline" href="#">
                        Host Events
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-1/2 mx-2">
                <div class="bg-white shadow-lg mb-4">
                  <div class="px-6 py-4">
                    <div class="font-bold">
                      <a href="#">JavaScript Libraries</a>
                    </div>
                    <div class="text-gray-700">
                      50 follow this topic
                    </div>
                    <div class="mt-1">
                      <a class="text-teal-600 hover:underline" href="#">
                        Host Events
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          <!-- </div> -->
        </div>

         <!-- looped the events -->
        <div v-for="(event, j) in events" :key="j">
          <EventCard :date="event.date" :event="event"/>
        </div>
    
      </div>

      <!-- width of 30% -->
      <div class="ml-6 w-3/10">
        <div class="mt-10 border border-gray-400 rounded-sm">
          <div  class="border-b border-gray-400 bg-white  text-sm tracking-wide cursor-pointer" 
                v-for="link in sidelinks" 
                :key="link"
                :class="link === setlink ? 'bg-blue-100 font-semibold text-meetup-purple' : 'bg-white font-light'"
                @click="setlink = link">
            <div :class="`${ link === setlink ? 'border-l-4 border-meetup-purple text-meetup-purple' : 'border-l-4 border-transparent' } px-3 py-1`">
              <a class="relative" href="#">
                <span>{{ link }}</span>
                &nbsp;
                <span class="absolute bottom-0 top-0 bg-orange-400 font-light text-xxs text-white rounded px-1" v-if="link == 'Saved events'">new</span>
              </a>
            </div>
          </div>
        </div>

        <div class="flex justify-end my-4 mb-4">
          <button class="bg-white text-gray-800 px-3 rounded-sm text-xs border border-gray-500 focus:outline-none">Today</button>
        </div>

        <div class="datepicker-trigger">
          <input
            type="text"
            class="hidden"
            id="datepicker-trigger"
            placeholder="Select dates"
            :value="formatDates(dateOne, dateTwo)"
          >
 
          <AirbnbStyleDatepicker
            :trigger-element-id="'datepicker-trigger'"
            :mode="single"
            :inline="true"
            :monthsToShow="1"
            :fullscreen-mobile="true"
            :date-one="dateOne"
            @date-one-selected="val => { dateOne = val }"
          />
        </div>

        <div class="mt-4">
          <a href="#" class="flex items-center justify-center">
            <div>
              <svg class="w-5 h-5" stroke="currentColor" fill="none" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" data-attributes-set=",xmlns:xlink,xmlns,viewBox,preserveAspectRatio"><path xmlns="http://www.w3.org/2000/svg" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
            </div>
            <span class="ml-1">Export to...</span>
          </a>
        </div>

      </div>

    </div> <!-- end container -->

  </div>
</template>

<script>
  import format from 'date-fns/format'
  export default {
    head: {
      title: 'Find Meetup Groups near you'
    },
    components: {
      EventCard: () => import('@/components/EventCard')
    },
    data () {
      return {
        dateFormat: 'D MMM',
        dateOne: '',
        dateTwo: '',
        events: [
          {
            date: 'WEDNESDAY, JANUARY 6',
            venue: [
              {
                time: '8:00 PM',
                title: 'Online Event: Shut Up & Write on Google Meet',
                description: 'SHUT UP & WRITE!® METRO MANILA',
                count: 7
              },
              {
                time: '6:00 PM',
                title: 'FREE WEBINAR: How to Outsource Development of Your App',
                description: 'MANILA STARTUP: IDEA TO IPO',
                count: 4
              }
            ]
          },
          {
            date: 'THURSDAY, JANUARY 7',
            venue: [
              {
                time: '6:00 PM',
                title: 'Just Meditate Be Happy Manila: Quick Guided Meditation',
                description: 'MANILA SAHAJA YOGA MEDITATION',
                count: 6
              }
            ]
          },
        ],
        categories: [
          {
            title: 'JavaScript Libraries',
            count: 50
          },
          {
            title: 'Lean Startup',
            count: 1648
          },
          {
            title: 'Angular2',
            count: 7
          },
          {
            title: 'Google',
            count: 33
          },
        ],
        sidelinks: ['All upcoming events', 'Saved events', 'Your groups and suggestions', 'Your groups only', 'Your group only'],
        setlink: 'All upcoming events'
      }
    },
    methods: {
      formatDates(dateOne, dateTwo) {
        let formattedDates = ''
        if (dateOne) {
          formattedDates = format(dateOne, this.dateFormat)
        }
        if (dateTwo) {
          formattedDates += ' - ' + format(dateTwo, this.dateFormat)
        }
        return formattedDates
      }
    }
  }
</script>

<style>
  .asd__days--legend {
    width: 288px !important;
  }

  .asd__wrapper--datepicker-open {
    width: 288px !important;
  }

  .asd__month {
    width: 295px !important;
  }
</style>