<template>
  <div class="flex flex-row justify-evenly my-2.5 mx-auto w-40">
    <a
      v-for="(obj, index) in links"
      :key="index"
      :href="obj.src"
      target="blank"
      rel="noopener"
      class="
        cursor-pointer
        opacity-50
        transition-opacity
        hover:opacity-100
        dark:text-white
      "
    >
      <font-awesome-icon
        :icon="[obj.icon.solid ? 'fas' : 'fab', obj.icon.id]"
      ></font-awesome-icon
    ></a>
  </div>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      required: true,
    },
  },
}
</script>
