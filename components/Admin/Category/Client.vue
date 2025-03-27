<template>
  <div>
    <div class="flex items-center justify-between">
      <Heading title="Categories" description="Manage Categories"> </Heading>
      <NuxtLink to="/admin/categories/new">
        <Button>
          <div>Add new +</div>
        </Button>
      </NuxtLink>
    </div>
    <div v-for="category in categories">
      <div>{{ category.name }}</div>
    </div>
  </div>
</template>

<script setup>
const { data: categories } = await useFetch("/api/admin/categories");
</script>
