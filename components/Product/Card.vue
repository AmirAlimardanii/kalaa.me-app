<template>
  <div>
    <Card class="border p-3 shadow-none">
      <CardContent class="p-0">
        <div
          class="flex overflow-hidden items-center justify-center rounded-md relative"
        >
          <img :src="data.images[0].url" :alt="data.name" class="h-[200px]" />
          <div class="absolute top-2 left-2" v-if="data.isFeatured">
            <Badge variant="destructive" class="w-auto">Featured</Badge>
          </div>
          <div class="absolute top-2 right-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger as-child>
                  <Button
                    @click.stop="
                      () => {
                        onOpen(data);
                      }
                    "
                    size="icon"
                    class="rounded-full"
                  >
                    <Icon name="lucide:expand" class="h-4 w-4 text-white" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Preview Product</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        <div class="my-4">
          <h2 class="font-semibold">{{ data.name }}</h2>
          <div class="text-gray-600">{{ data.category.name }}</div>

          <div class="mt-2">${{ data.price }}</div>
        </div>
        <Button variant="secondary" class="mt-4 w-full"> Add to cart </Button>
      </CardContent>
    </Card>
  </div>
  <ProductModal />
</template>

<script setup lang="ts">
import type { ProductCard } from "~/types";
import Button from "../ui/button/Button.vue";
import usePreviewModal from "~/composables/usePreviewModal";

const { onOpen } = usePreviewModal();

defineProps<{
  data: ProductCard;
}>();
</script>
