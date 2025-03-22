<template>
  <div>home page</div>
  <Button @click="logout">Log Out</Button>
  <p>{{ user }}</p>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: "auth",
});
const { user, clear } = useUserSession();

const logout = async () => {
  await clear();
  navigateTo("/auth/login");
};
</script>

<style scoped></style>
