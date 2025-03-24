<template>
  <div>
    <div class="flex items-center justify-between">
      <Heading :title="title" :description="description" />
      <NuxtLink to="/admin/categories/new">
        <Button v-if="isEditing" variant="destructive" size="lg">
          Delete
        </Button>
        <Button v-else size="lg"> Add </Button>
      </NuxtLink>
    </div>
    <Separator class="my-4" />

    <form></form>
  </div>
</template>

<script setup>
import { toTypedSchema } from "@vee-validate/zod";

const title = ref("Edit Category");
const description = ref("Edit category");
const toastMessage = ref("Category Updated");
const action = ref("Save changes");
const isEditing = ref(true);

const route = useRoute();

const { data } = await useFetch(
  `/api/admin/categories/${route.params.categoryId}`
);

const formSchema = toTypedSchema(categorySchema);

const form = useForm({
  validationSchema: formSchema,
  initialValues,
});
</script>
