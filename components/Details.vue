<template>
  <div
    id="details"
    class="flex flex-col self-start mx-10 dark:text-white mb-4 md:mb-10"
  >
    <div
      class="
        flex flex-col
        opacity-0
        animation-forwards
        animate-fade-in
        animation-delay-1000
      "
    >
      <span class="text-lg md:text-3xl mukta my-3">{{
        content.title[locale]
      }}</span>
      <!-- eslint-disable vue/no-v-html -->
      <span
        v-for="(para, index) in content.introduction"
        :key="index"
        class="text-md md:text-xl text-gray-600 dark:text-gray-300 mukta my-2.5"
        v-html="`${para.icon}&emsp;${para.text[locale]}`"
      >
      </span>
      <!-- eslint-enable -->
    </div>
    <div
      class="
        flex flex-col
        opacity-0
        animation-forwards
        animate-fade-in
        animation-delay-1500
      "
    >
      <span class="py-1">
        {{ content.footnote.icon }}
        <a
          :href="content.footnote.link"
          class="
            text-md
            md:text-lg
            ml-1
            mukta
            link
            text-gray-600
            dark:text-gray-300
          "
          >{{ content.footnote.text[locale] }}</a
        ></span
      >
    </div>
  </div>
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
/** LINKS */
.link {
  text-decoration-line: underline;
  text-decoration-color: black;
  text-decoration-style: dotted;
  text-decoration-thickness: from-font;
  text-underline-position: under;
  font-weight: bolder;
  -webkit-font-smoothing: antialiased;
}

.dark .link {
  text-decoration-color: gray;
}

/* @media (prefers-color-scheme: dark) {
    .link {
        text-decoration-color: white;
    }
} */

.link:hover,
.link:focus {
  outline: 0;
  cursor: pointer;
}

/** FONTS */
.crimson-text {
  font-family: 'Crimson Text';
}
.public-sans {
  font-family: 'Public Sans';
}
.mukta {
  font-family: 'Mukta';
}

/** ANIMATIONS */
.animation-forwards {
  animation-fill-mode: forwards;
}
.animation-delay-500 {
  animation-delay: 500ms;
}
.animation-delay-1000 {
  animation-delay: 1000ms;
}
.animation-delay-1200 {
  animation-delay: 1200ms;
}
.animation-delay-1500 {
  animation-delay: 1500ms;
}

/** MEDIA QUERIES */
@media screen and (max-width: 768px) {
  .min-h-0\.1 {
    min-height: 0.1rem;
  }
}
</style>
