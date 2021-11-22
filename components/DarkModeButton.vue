<template>
  <div class="flex items-center justify-center">
    <font-awesome-icon
      class="mr-2.5 text-gray-400 dark:text-gray-600"
      :icon="['fas', 'sun']"
    />
    <label for="dark-mode-toggle" class="flex items-center cursor-pointer">
      <!-- toggle -->
      <div class="relative">
        <!-- input -->
        <input
          id="dark-mode-toggle"
          :checked="isDarkMode"
          type="checkbox"
          class="sr-only"
          @change="toggleDarkMode"
        />
        <!-- line -->

        <div
          class="
            block
            bg-white
            dark:bg-gray-600
            w-8
            h-5
            rounded-full
            border-2
            dark:border-gray-600
          "
        ></div>
        <!-- dot -->
        <div
          class="
            dot
            absolute
            left-1
            top-1
            bg-green-500
            w-3
            h-3
            rounded-full
            transition
          "
        ></div>
      </div>
    </label>
    <font-awesome-icon
      class="ml-2.5 text-gray-400 dark:text-gray-600"
      :icon="['fas', 'moon']"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDarkMode: false,
    }
  },
  mounted() {
    if (document.documentElement.classList.contains('dark')) {
      this.isDarkMode = true
    }
  },
  methods: {
    toggleDarkMode: () => {
      document.documentElement.classList.toggle('dark')
    },
  },
}
</script>

<style scoped>
input:checked ~ .dot {
  transform: translateX(100%);
  /* background-color: #48bb78; */
}
</style>
