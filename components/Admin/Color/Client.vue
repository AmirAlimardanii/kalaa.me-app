<template>
  <div>
    <div class="flex items-center justify-between">
      <Heading title="Colors" description="Manage Colors"> </Heading>
      <NuxtLink to="/admin/colors/new">
        <Button>
          <div>Add new +</div>
        </Button>
      </NuxtLink>
    </div>
    <DataTable
      class="mt-4"
      v-if="status !== 'pending'"
      column-to-search="name"
      :data="colors"
      :columns="columns"
    />
  </div>
</template>

<script setup>
import { columns } from "~/components/Admin/Category/column";
const { data: colors, status } = await useFetch("/api/admin/colors", {
  key: "categories",
});
</script>
