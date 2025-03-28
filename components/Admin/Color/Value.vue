<template>
  <div class="flex items-center gap-x-2">
    {{ colorCode }}
    <div
      class="h-6 w-6 rounded-full border"
      :style="{ backgroundColor: value }"
    ></div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  colorCode: string;
  value: string;
}
const props = defineProps<Props>();
</script>
