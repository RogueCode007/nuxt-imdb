<template>
  <form @submit.prevent="login">
    <h1 class="text-3xl font-bold mb-8">Login Form</h1>
    <label for="username" class="block mb-6">
      Username
      <input type="text" name="username" class="border block mt-2" />
    </label>
    <label for="password" class="block">
      Password
      <input type="password" name="password" class="border block mt-2" />
    </label>

    <button type="submit" class="mt-4 border rounded p-3">Login</button>
  </form>
</template>
<script setup>
definePageMeta({
  layout: "plain",
});

const user = useUserStore();

function login() {
  user.login();
  useRouter().push("/");
}
</script>
