<script setup>
const query = ref("avengers");
const error = ref(false);
function debounce() {
  let timeout;
  return function (fnc, delayMs) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fnc();
    }, delayMs);
  };
}
const debounceCreated = debounce();
const getMovies = async () => {
  const response = await $fetch("http://www.omdbapi.com/?apikey=da358303", {
    params: {
      s: query.value,
    },
  });
  return response.Search;
};
const { data: movies } = await useAsyncData(
  "movies",
  async () => {
    const res = await getMovies();
    if (res) {
      return res;
    } else {
      return [];
    }
  },
  {
    watch: [query],
  }
);
</script>

<template>
  <div>
    <form>
      <input
        class="border"
        type="text"
        :value="query"
        @input="debounceCreated(() => (query = $event.target.value), 500)"
      />
      <p
        v-if="!movies || !movies.length"
        class="flex items-center justify-center text-2xl mt-10"
      >
        No records!
      </p>
      <ul v-else class="mt-10 grid grid-cols-5 gap-[10px]">
        <li v-for="movie in movies" :key="movie.imdbID" class="h-[350px]">
          <nuxt-link
            :to="{
              name: 'movies-movieId',
              params: { movieId: movie.imdbID },
            }"
          >
            <img
              :src="movie.Poster"
              :alt="movie.Title"
              class="block w-full h-full"
            />
          </nuxt-link>
        </li>
      </ul>
    </form>
  </div>
</template>

<style scoped></style>
