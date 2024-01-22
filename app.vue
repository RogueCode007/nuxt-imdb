<template>
  <div class="h-full">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - My movie Site` : "My Movie Site";
  },
});
</script>
<style>
html,
body,
div#__nuxt {
  height: 100%;
}
</style>
