<script setup>
const emit = defineEmits(['update:locale'])

const props = defineProps({
  locale: {
    type: String,
    required: true,
    default: 'en',
  },
})

const setLanguage = (event) => {
  if (event.target.checked) {
    emit('update:locale', 'hi')
  } else emit('update:locale', 'en')
}
</script>

<template>
  <div class="flex items-center justify-center">
    <span class="mukta text-gray-400 dark:text-gray-600 mr-2.5">A</span>
    <label for="lang-toggle" class="flex items-center cursor-pointer">
      <!-- toggle -->
      <div class="relative">
        <!-- input -->
        <input
          id="lang-toggle"
          type="checkbox"
          class="sr-only"
          @change="setLanguage"
        />
        <!-- line -->

        <div
          class="block bg-white dark:bg-gray-600 w-8 h-5 rounded-full border-2 dark:border-gray-600"
        ></div>
        <!-- dot -->
        <div
          class="dot absolute left-1 top-1 bg-green-500 w-3 h-3 rounded-full transition"
        ></div>
      </div>
    </label>
    <span class="Mukta text-gray-400 dark:text-gray-600 ml-2.5">अ</span>
  </div>
</template>

<style scoped>
input:checked ~ .dot {
  transform: translateX(100%);
}
</style>
