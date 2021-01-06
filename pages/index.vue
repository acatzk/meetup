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
    <div class="sticky top-0 container mx-auto px-40 -mt-8">
      <div class="bg-gray-900 text-white flex items-center justify-between p-3">
        <div class="flex items-center">
          <div class="relative">
            <input class="py-3 px-2 w-72 pr-12 rounded-sm text-gray-600 focus:outline-none" type="text" placeholder="Search">
            <div class="absolute top-0 right-0 mr-3" style="top: 10px">
              <svg class="text-gray-600" width="28" height="28" stroke="currentColor" fill="none" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" data-attributes-set=",xmlns:xlink,xmlns,viewBox,preserveAspectRatio"><path xmlns="http://www.w3.org/2000/svg" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
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
        
      </div>

    </div> <!-- end container -->

  </div>
</template>

<script>
  export default {
    head: {
      title: 'Find Meetup Groups near you'
    },
    components: {
      EventCard: () => import('@/components/EventCard')
    },
    data () {
      return {
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
    }
  }
</script>
