<script setup>
const route = useRoute();
const { data: movie } = await useFetch(
  "http://www.omdbapi.com/?apikey=da358303",
  {
    query: { i: route.params.movieId },
    pick: ["Plot", "Title", "Poster", "Error"],
  }
);
if (movie.value.Error === "Incorrect IMDb ID.") {
  showError({ statusCode: 404, statusMessage: "Page not found" });
}

useHead({
  title: `${movie.value.Title}`,
  meta: [
    { name: "description", content: movie.value.Plot },
    { property: "og:description", content: movie.value.Plot },
    { property: "og:image", content: movie.value.Poster },
    { name: "twitter:card", content: "summary_large_image" },
  ],
});
definePageMeta({
  middleware: "auth",
});
</script>
<template>
  <div class="w-[300px] outline outline-purple-500">
    <div class="w-full">
      <img
        :src="movie.Poster"
        :alt="movie.Title"
        class="block w-full h-[350px]"
      />
    </div>
    <h1 class="font-semibold text-2xl p-2">{{ movie.Title }}</h1>
    <p class="text-lgpx-2">{{ movie.Plot }}</p>
  </div>
</template>

<style scoped></style>
