<template>
  <div class="font-sans bg-gray-100 h-full antialiased">
    <TheNavBar />
    <main>
      <Nuxt />
    </main>
    <TheFooter />
  </div>
</template>

<script>
  export default {
    components: {
      TheNavBar: () => import('@/components/TheNavBar'),
      TheFooter: () => import('@/components/TheFooter')
    }
  }
</script>