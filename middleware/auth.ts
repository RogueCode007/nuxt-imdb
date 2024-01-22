export default defineNuxtRouteMiddleware((to, from) => {
  if (to.params.movieId === "1") {
    abortNavigation();
    return navigateTo("/login");
  }
});
