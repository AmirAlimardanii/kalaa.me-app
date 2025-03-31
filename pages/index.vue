<template>
  <Hero />
  <div class="mx-auto max-w-5xl py-16 sm:py-32">
    <div class="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8"></div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: "auth",
});
</script>
