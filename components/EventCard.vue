<template>
  <div>
    <div class="pl-4 uppercase px-2 pb-4 text-xs font-semibold">{{ date }}</div>
    <!-- bordered -->
    <div class="border border-gray-300 bg-white mb-8 rounded-sm">
      <!-- looped nested object -->
      <div v-for="(ven,k) in event.venue" :key="`${k}-ey`">
        <!-- flex & event occures-->
        <div class="border-b border-gray-300 flex p-4">
          <div class="w-16 text-gray-600">
            <a href="#">
              {{ ven.time }}
            </a>
          </div>
          <div class="ml-4">
            <div class="uppercase font-semibold text-gray-600 text-sm">
              <a href="#">{{ ven.description }}</a>
            </div>
            <div class="font-semibold text-gray-800 text-xl">{{ ven.title }}</div>
            <div class="text-gray-600 font-light">{{ ven.description }}</div>
            <div class="mt-3 text-gray-600 font-light">{{ ven.count }} are coming!</div>
          </div>
        </div>
      </div>
    </div> <!-- end bordered -->
  </div>
</template>

<script>
  export default {
    props: {
      date: {
        type: String,
        required: true
      },
      event: {
        type: Object,
        require: true
      }
    }
  }
</script>