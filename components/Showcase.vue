<template>
  <div class="animate-fade-in my-6 md:my-10 md:mb-6 md:pb-0 ml-4 md:ml-2">
    <img :src="image" class="rounded-full max-h-20 md:max-h-28 mb-1" />
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
  },
}
</script>
