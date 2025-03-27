<template>
  <Modal
    :isModalOpen="isAlertModalOpen"
    :title="title || 'Are you Sure?'"
    :description="description || 'This action cannot be undone'"
    @closeModal="toggleAlertModal(false)"
  >
    <div class="pt-6 space-x-2 flex justify-end items-center w-full">
      <Button
        :disabled="isLoading"
        @click="toggleAlertModal(false)"
        variant="outline"
      >
        Cancel
      </Button>
      <Button
        :disabled="isLoading"
        @click="handleConfirm"
        variant="destructive"
      >
        Confirm
      </Button>
    </div>
  </Modal>
</template>

<script setup lang="ts">
interface alertModal {
  title?: string;
  description?: string;
}

const props = defineProps<alertModal>();
const emits = defineEmits(["onConfirm"]);

const { isAlertModalOpen, toggleAlertModal, isLoading } = useStore();

const isModalOpen = computed(() => isAlertModalOpen.value);

const handleConfirm = () => {
  emits("onConfirm");
  toggleAlertModal(false);
};
</script>
