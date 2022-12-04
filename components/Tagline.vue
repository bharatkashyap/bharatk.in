<template>
  <p id="footnote" class="flex justify-center small-caps py-4 text-gray-400">
    {{ content.text[locale] }}
  </p>
</template>

<script>
export default {
  props: {
    content: {
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

<style>
.small-caps {
  font-variant: small-caps;
}
</style>
