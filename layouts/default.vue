<script setup>
import { useIsLoggedIn } from "../composables/useIsLoggedIn";

const isLoggedIn = useIsLoggedIn();
</script>
<template>
  <nav class="flex gap-6 py-4">
    <nuxt-link to="/">Home</nuxt-link>
    <nuxt-link to="/movies">Movies</nuxt-link>
    <nuxt-link to="/login" v-if="!isLoggedIn">Login</nuxt-link>
  </nav>
  <slot></slot>
</template>
