<template>
  <div
    class="mukta mb-4 sm:px-8 py-8 sm:gap-x-8 border-2 rounded-md dark:border-gray-600"
  >
    <div
      class="relative z-10 flex flex-row justify-between pb-3 px-4 sm:bg-none rounded-tl-sm rounded-tr-sm dark:from-gray-900"
    >
      <div class="flex flex-row">
        <img v-if="obj.logo" :src="obj.logo.src" class="card-logo" />
        <div
          class="font-normal ml-2.5 text-black dark:text-white place-self-center"
        >
          <h3 class="text-md md:text-xl font-semibold sm:leading-7">
            {{ obj.title }}
          </h3>
        </div>
      </div>
      <span class="text-md text-blue-400 text-right">{{ obj.date }}</span>
    </div>
    <div class="px-4">
      <div
        class="items-center text-justify text-md font-medium text-gray-600 dark:text-gray-300 antialiased my-5 sm:mt-2 sm:mb-4"
      >
        {{ obj.description[locale] }}
      </div>
    </div>
    <div
      v-if="obj.seeMore || obj.host"
      class="col-start-1 row-start-3 space-y-3 px-4 rounded-bl-md rounded-br-md dark:border-gray-900"
    >
      <button
        type="button"
        class="bg-red-100 text-red-700 text-sm md:text-md font-semibold px-6 py-1 rounded-lg mr-2"
      >
        <a :href="obj.host.src" class="link" target="_blank" rel="noopener">
          {{ obj.host.label }} &rarr;
        </a>
      </button>
      <button
        v-if="obj.seeMore"
        type="button"
        class="bg-blue-100 text-blue-700 text-sm md:text-md font-semibold px-6 py-1 rounded-lg"
      >
        <a :href="obj.seeMore.src" target="_blank" rel="noopener">
          <font-awesome-icon
            v-if="obj.seeMore.code"
            class="mr-2"
            :icon="['fab', 'github']"
          ></font-awesome-icon
          >{{ obj.seeMore.label[locale] }}
        </a>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    obj: {
      type: Object,
      required: true,
    },
    locale: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
/** IMAGE */
.card-logo {
  height: 48px;
  width: 48px;
}

/** CUSTOM STRUCTURE */
.grid-cols-28-2-70 {
  grid-template-columns: 28% 2% 70%;
}
/** LINKS */
.link {
  text-decoration-color: currentColor;
  -webkit-font-smoothing: auto;
}

.dark .link {
  text-decoration-color: currentColor;
}
</style>
