<template>
  <div>home page</div>
  <p>{{ user }}</p>
</template>

<script setup lang="ts">
const { user } = useUserSession();
</script>

<style scoped></style>
