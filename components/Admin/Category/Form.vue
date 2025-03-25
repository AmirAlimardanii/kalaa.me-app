<template>
  <div>
    <div class="flex items-center justify-between">
      <Heading :title="title" :description="description" />
      <NuxtLink to="/admin/categories/new">
        <Button
          v-if="isEditing"
          variant="destructive"
          size="sm"
          class="mx-2 !h-10"
          @Click="toggleAlertModal(true)"
        >
          <Icon name="lucide:trash" class="w-4 h-4" />
        </Button>
        <Button @click="onSubmit" :disabled="isLoading" size="lg">
          {{ action }}
        </Button>
      </NuxtLink>
    </div>
    <Separator class="my-4" />

    <form class="space-y-8 w-full">
      <div class="md:grid md:grid-cols-3 gap-8">
        <FormField v-slot="{ componentField }" name="name">
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input placeholder="category name" v-bind="componentField" />
            </FormControl>
            <FormDescription />
            <FormMessage />
          </FormItem>
        </FormField>
      </div>
    </form>
  </div>
  <AlertModal @onConfirm="deleteCategory" title="Delete Category" />
</template>

<script setup lang="ts">
import { toTypedSchema } from "@vee-validate/zod";
import { useForm } from "vee-validate";

const { isLoading, showError, showMessage, toggleLoading, toggleAlertModal } =
  useStore();
const route = useRoute();

const title = ref("Edit Category");
const description = ref("Edit category");
const toastMessage = ref("Category Updated");
const action = ref("Save changes");
const isEditing = ref(route.params.categoryId !== "new");

const { data: currentCategory } = await useFetch(
  `/api/admin/categories/${route.params.categoryId}`
);

const formSchema = toTypedSchema(categorySchema);

const form = useForm({
  validationSchema: formSchema,
  initialValues: currentCategory.value || { name: "" },
});

const onSubmit = form.handleSubmit(async (values) => {
  try {
    toggleLoading(true);

    if (isEditing.value) {
      console.log("editing");
    } else {
      console.log("inserting");
    }
    showMessage({
      title: toastMessage.value,
      variant: "default",
    });
    navigateTo("/admin/categories");
  } catch (error) {
    const err = handleError(error);
    showError(err);
  } finally {
    toggleLoading(false);
  }
});

const deleteCategory = async () => {
  try {
    toggleLoading(true);

    console.log("category deleted");

    showMessage({
      title: "Category Deleted",
      variant: "default",
    });
    navigateTo("/admin/categories");
  } catch (error) {
    const err = handleError(error);
    showError(err);
  } finally {
    toggleLoading(false);
  }
};
</script>
