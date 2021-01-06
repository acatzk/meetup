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
    <div class="container mx-auto px-40 -mt-8">
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
  </div>
</template>

<script>
  export default {}
</script>
