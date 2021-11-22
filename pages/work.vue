<template>
  <div
    class="
      h-screen
      grid grid-cols-1
      md:grid-cols-4
      px-12
      md:place-items-stretch
      dark:bg-black
      gap-y-3
      md:gap-y-0 md:gap-x-6
    "
  >
    <Selector @update:tab="setSelectedCard($event)" />
    <div class="flex flex-row w-screen">
      <Card v-for="(card, index) in selectedCards" :key="index" :obj="card" />
    </div>
    <div class="col-start-1 md:col-start-2 col-end-2 md:col-end-5 flex items-center justify-center">
      <div
        v-for="(card, index) in selectedCards"
        :key="index"
        class="slider-dot selected-dot cursor-pointer"
      ></div>
    </div>
    <DarkModeButton />
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: {
        work: [
          {
            category: 'Education',
            title: 'DIKSHA',
            id: 'diksha',
            engagement: {
              title: 'Samagra',
            },
            repository: {
              src: 'https://github.com/project-sunbird',
              title: 'project-sunbird',
            },
            host: {
              title: 'Ministry of Education 🇮🇳',
              src: 'https://diksha.gov.in',
              label: 'diksha.gov.in',
            },
            reel: {
              cover: '/diksha-cover-2.png',
            },
          },
          {
            category: 'Education',
            title: 'DIKSHA',
            engagement: {
              title: 'Samagra',
            },
            repository: {
              src: 'https://github.com/project-sunbird',
              title: 'project-sunbird',
            },
            host: {
              title: 'Ministry of Education 🇮🇳',
              src: 'https://diksha.gov.in',
              label: 'diksha.gov.in',
            },
            reel: {
              cover: '/diksha-cover-2.png',
            },
          },
        ],
      },
      selectedCards: [],
    }
  },
  mounted() {
    this.locale = navigator.languages && navigator.languages[0]
    this.setSelectedCard('work')
  },
  methods: {
    setSelectedCard(tabIdentifier) {
      this.selectedCards = this.cards[tabIdentifier]
    },
  },
}
</script>

<style scoped>
.work-rows {
  grid-template-rows: 20vh auto 10vh;
}

.slider-dot {
  display: inline-block;
  min-height: 5px;
  min-width: 5px;
  border-radius: 5px;
  margin: 0 0.2em;
  background-color: #d5d5d5;
  transition: all 0.05s ease;
}
.slider-dot:hover {
  background-color: #c5c5c5;
  transform: scale(1.2);
}
.slider-dot.selected-dot {
  background-color: #86afe4;
  transform: scale(1.4);
  transition: all 0.1s ease-in;
}
</style>
