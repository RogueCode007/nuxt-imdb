<template>
  <form>
    <h1 class="text-3xl font-bold mb-8">Login Form</h1>
    <label for="username" class="block mb-6">
      Username
      <input type="text" name="username" class="border block mt-2" />
    </label>
    <label for="password" class="block">
      Password
      <input type="password" name="password" class="border block mt-2" />
    </label>
  </form>
</template>
<script setup>
definePageMeta({
  layout: "plain",
});
</script>
