<template>
  <div
    class="
      flex flex-col
      opacity-0
      animation-forwards
      animate-fade-in
      animation-delay-2000
      justify-self-start
      mx-10
    "
  >
    <div class="text-xl md:text-2xl dark:text-white mukta mt-3 mb-6">
      {{ icon + '&emsp;' + heading }}
    </div>
    <Card
      v-for="(card, index) in cards"
      :key="index"
      :obj="card"
      :locale="locale"
    />
  </div>
</template>

<script>
export default {
  props: {
    cards: {
      type: Array,
      required: true,
    },
    icon: {
      type: String,
      default: '',
    },
    heading: {
      type: [String, undefined],
      default: '',
    },
    locale: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.animation-forwards {
  animation-fill-mode: forwards;
}

.animation-delay-2000 {
  animation-delay: 2000ms;
}
</style>
