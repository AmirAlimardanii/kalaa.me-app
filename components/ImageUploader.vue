<template>
  <div>
    <div class="mb-4 flex items-center gap-4">
      <div
        v-for="(imgUrl, index) in imageId"
        :key="index"
        class="relative w-[200px] h-[200px] rounded-md overflow-hidden"
      >
        <div class="z-10 absolute top-2 right-2">
          <Button
            type="button"
            variant="destructive"
            size="sm"
            @click="deleteImage(imgUrl)"
          >
            <Icon name="lucide:trash" class="w-4 h-4" />
          </Button>
        </div>
        <img :src="imgUrl" class="w-full h-full object-cover" />
      </div>
    </div>

    <div>
      <CldUploadWidget
        v-slot="{ open }"
        :uploadPreset="uploadPreset"
        :onUpload="onUpload"
        :options="{
          clientAllowedFormats: formats,
          multiple: false,
          maxFiles: 3,
        }"
      >
        <Button type="button" variant="secondary" @click="open">
          <Icon name="lucide:upload" class="w-4 h-4 mx-1" /> Upload Image
        </Button>
      </CldUploadWidget>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Result {
  info: {
    secure_url: string;
  };
}
interface UploaderProps {
  imageId: string[];
  formats: string[];
}

const props = defineProps<UploaderProps>();
const emits = defineEmits(["onUpload", "onRemove"]);

const {
  public: { uploadPreset },
} = useRuntimeConfig();

const onUpload = (result: Ref<Result>) => {
  emits("onUpload", result.value.info.secure_url);
  console.log(result.value);
};

const deleteImage = (imageId: string) => {
  console.log(imageId, "deleted");
};
</script>
