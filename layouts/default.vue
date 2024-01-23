<script setup>
const user = useUserStore();
</script>
<template>
  <nav class="flex gap-6 py-4">
    <nuxt-link to="/">Home</nuxt-link>
    <nuxt-link to="/movies">Movies</nuxt-link>
    <nuxt-link to="/login" v-if="!user.isLoggedIn">Login</nuxt-link>
    <a href="#" rel="noopener noreferrer" v-else @click="user.logout()"
      >Logout</a
    >
  </nav>
  <slot></slot>
</template>
