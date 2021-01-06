<template>
  <div class="font-sans bg-gray-200 h-screen antialiased">
    <TheNavBar />
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<script>
  export default {
    components: {
      TheNavBar: () => import('@/components/TheNavBar')
    }
  }
</script>