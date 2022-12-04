<template>
  <div
    class="
      place-items-center
      grid grid-cols-1
      auto-rows-max
      w-full
      dark:bg-gray-900
    "
  >
    <div class="md:m-auto w-full md:w-2/3 lg:w-1/2">
      <div class="w-full my-2.5 flex flex-row justify-around">
        <LangToggle :init-locale="initLocale" :locale.sync="locale" />
        <DarkModeButton />
      </div>
      <Showcase :image="content.image" />
      <Details :content="content" :locale="locale" />
      <Reel
        :cards="content.reel.work"
        :icon="content.work.icon"
        :heading="content.work.text[locale]"
        :locale="locale"
      />
      <Reel
        :cards="content.reel.talks"
        :icon="content.talks.icon"
        :heading="content.talks.text[locale]"
        :locale="locale"
      />
      <Tagline :content="content.footnote" :locale="locale" />
      <Socials :links="content.links" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: {
        image: 'me.jpeg',
        links: [
          {
            src: 'https://github.com/bharatkashyap',
            icon: {
              solid: false,
              id: 'github',
            },
          },
          {
            src: 'https://twitter.com/@bharattttttt',
            icon: {
              solid: false,
              id: 'twitter',
            },
          },
          {
            src: 'https://www.linkedin.com/in/bharat-kashyap-india',
            icon: {
              solid: false,
              id: 'linkedin',
            },
          },
          {
            src: 'https://bharatkashyap.wordpress.com',
            icon: {
              solid: false,
              id: 'wordpress',
            },
          },
        ],
        title: {
          'en-IN': "I'm Bharat, from 🇮🇳",
          'en-GB': "I'm Bharat, from 🇮🇳",
          'en-US': "I'm Bharat, from 🇮🇳",
          hi: 'भरत, भारत 🇮🇳 से',
        },
        introduction: [
          {
            icon: '👨🏽‍💻',
            name: 'work',
            text: {
              'en-IN':
                "Hi! I'm a software engineer at <a class='link' href='https://mui.com' target='_blank' rel='noreferrer'> MUI</a>, a popular React library, working to democratise access to beautiful, performant software.",
              'en-GB':
                "Hi! I'm a software engineer at <a class='link' href='https://mui.com' target='_blank' rel='noreferrer'> MUI</a>, a popular React library, working to democratise access to beautiful, performant software.",
              'en-US':
                "Hi! I'm a software engineer at <a class='link' href='https://mui.com' target='_blank' rel='noreferrer'> MUI</a>, a popular React library, working to democratise access to beautiful, performant software.",
              hi: "नमस्ते! मैं एक सॉफ्टवेयर इंजीनियर हूँ और <a class='link' href='https://mui.com' target='_blank' rel='noreferrer'> MUI</a> – जो की एक प्रचलित सॉफ्टवेयर निर्माता है – में कार्यरत हूँ | वहां मेरा उद्देश्य है सब लोगों के लिए सॉफ्टवेयर निर्माण आसान बनाना",
            },
          },
          {
            icon: '🚧',
            name: 'contribution',
            text: {
              'en-IN':
                "Parallely, I work with organisations trying to solve societal problems through technology – a <a class='link' href='https://www.ted.com/talks/brian_little_who_are_you_really_the_puzzle_of_personality/' rel='noreferrer' target='_blank'>core project</a>.",
              'en-GB':
                "Parallely, I work with organisations trying to solve societal problems through technology – a <a class='link' href='https://www.ted.com/talks/brian_little_who_are_you_really_the_puzzle_of_personality/' rel='noreferrer' target='_blank'>core project</a>.",
              'en-US':
                "Parallely, I work with organisations trying to solve societal problems through technology – a <a class='link' href='https://www.ted.com/talks/brian_little_who_are_you_really_the_puzzle_of_personality/' rel='noreferrer' target='_blank'>core project</a>.",
              hi: "साथ ही साथ, मैं ऐसी संस्थाओं के साथ कार्यरत रहता हूँ जो की सामाजिक समस्याओं का तकनीकी समाधान खोजने में लगी हैं – यह मेरा <a class='link' href='https://www.ted.com/talks/brian_little_who_are_you_really_the_puzzle_of_personality/' rel='noreferrer' target='_blank'>\"कोर प्रोजेक्ट\"</a> है",
            },
          },
          {
            icon: '📖',
            name: 'learning',
            text: {
              'en-IN':
                "I'm a hobbyist <a class='link' href='https://auraq.in' rel='noreferrer' target='_blank'>curator</a> of trivia about architecture, history, urbanism, and, more-or-less, everything else.",
              'en-GB':
                "I'm a hobbyist <a class='link' href='https://auraq.in' rel='noreferrer' target='_blank'>curator</a> of trivia about architecture, history, urbanism, and, more-or-less, everything else.",
              'en-US':
                "I'm a hobbyist <a class='link' href='https://auraq.in' rel='noreferrer' target='_blank'>curator</a> of trivia about architecture, history, urbanism, and, more-or-less, everything else.",
              hi: "मुझे इतिहास, वास्तुकला, शहरीकरण (वैसे, इनके अलावा भी सब कुछ) के बारे में जानना और <a class='link' href='https://auraq.in' rel='noreferrer' target='_blank'>लिखना</a> पसंद है ",
            },
          },
        ],
        reel: {
          work: [
            {
              category: 'Work',
              title: 'MUI',
              id: 'mui',
              date: 'Nov 2021 - present',
              engagement: {
                title: 'MUI',
              },
              description: {
                'en-IN':
                  "I work with MUI (formerly Material-UI), one of the world's most popular open-source libraries, to help make it easier and faster for developers to build modern, performant, and accessible websites.",
                'en-GB':
                  "I work with MUI (formerly Material-UI), one of the world's most popular open-source libraries, to help make it easier and faster for developers to build modern, performant, and accessible websites.",
                'en-US':
                  "I work with MUI (formerly Material-UI), one of the world's most popular open-source libraries, to help make it easier and faster for developers to build modern, performant, and accessible websites.",
                hi: 'मैं MUI (पहले Material-UI) के साथ कार्यरत हूँ, जो की विश्व की सबसे विख्यात सॉफ्टवेयर निर्माताओं में से एक है, और मेरा उद्देश्य है लोगों के लिए सॉफ्टवेयर बनाने की प्रक्रिया को तेज़ और आसान बनाना',
              },
              repository: {
                src: 'https://github.com/mui/material-ui',
                title: 'material-ui',
              },
              host: {
                title: 'MUI',
                src: 'https://mui.com',
                label: 'mui.com',
              },
              logo: {
                src: 'mui.png',
              },
              seeMore: {
                src: 'https://github.com/mui-org/material-ui/pull/29714',
                label: {
                  'en-IN': 'See More',
                  'en-GB': 'See More',
                  'en-US': 'See More',
                  hi: 'और देखें',
                },
                code: true,
              },
            },
            {
              category: 'Contribution',
              title: 'Civic Tech Field Guide',
              id: 'CTFG',
              date: 'Jan 2022 - present',
              engagement: {
                title: 'Personal',
              },
              description: {
                'en-IN':
                  'Volunteer for the Civic Tech Field Guide project which aims to build a directory of all civic tech projects in the world to help both those looking for solutions, and those looking to solve problems.',
                'en-GB':
                  'Volunteer for the Civic Tech Field Guide project which aims to build a directory of all civic tech projects in the world to help both those looking for solutions, and those looking to solve problems.',
                'en-US':
                  'Volunteer for the Civic Tech Field Guide project which aims to build a directory of all civic tech projects in the world to help both those looking for solutions, and those looking to solve problems.',
                hi: 'Civic Tech Field Guide में निर्देशिका बनाने में मदद करने के लिए एक स्वयंसेवक की तरह जुड़ा हुआ हूँ|',
              },
              repository: {
                src: 'https://github.com/bharatkashyap/ctfg-media-go',
                title: 'Civic Tech Field Guide',
              },
              host: {
                title: 'CTFG',
                src: 'https://civictech.guide/about',
                label: 'civictech.guide',
              },
              seeMore: {
                src: 'https://github.com/bharatkashyap/ctfg-media-go',
                label: {
                  'en-IN': 'See More',
                  'en-GB': 'See More',
                  'en-US': 'See More',
                  hi: 'और देखें',
                },
                code: true,
              },
            },
            {
              category: 'Contribution',
              title: 'iSPIRT',
              id: 'iSPIRT',
              date: 'Sep 2021 - present',
              engagement: {
                title: 'Personal',
              },
              description: {
                'en-IN':
                  'Working as a volunteer with iSPIRT on multiple projects in collaboration with product partners and government agencies. Current focus: cryptographic, consented data sharing.',
                'en-GB':
                  'Working as a volunteer with iSPIRT on multiple projects in collaboration with product partners and government agencies. Current focus: cryptographic, consented data sharing.',
                'en-US':
                  'Working as a volunteer with iSPIRT on multiple projects in collaboration with product partners and government agencies. Current focus: cryptographic, consented data sharing.',
                hi: 'iSPIRT में स्वयंसेवक की भूमिका में काम करते हुए विभिन्न योजनाओं में सम्मिलित होकर सरकार और बाज़ार के साथ कार्यरत हूँ | इस समय मेरा कार्य data के सहमत और गुप्त संचार पर केंद्रित है | ',
              },
              repository: {
                src: 'https://github.com/bharatkashyap/healthstack',
                title: 'Health',
              },
              host: {
                title: 'iSPIRT',
                src: 'https://ispirt.in',
                label: 'ispirt.in',
              },
              logo: {
                src: 'ispirt-logo.svg',
              },
              seeMore: {
                src: 'https://depa.world',
                label: {
                  'en-IN': 'See More',
                  'en-GB': 'See More',
                  'en-US': 'See More',
                  hi: 'और देखें',
                },
                code: false,
              },
            },
            {
              category: 'Work',
              title: 'Hasura',
              date: 'June 2021 - present',
              engagement: {
                title: 'Personal',
              },
              description: {
                'en-IN':
                  "Contributor to Hasura's React connector: added features to add only permitted fields, and being able to make 'distinct_on' queries. Selected as a Hasura 'Community Champion' in the process",
                'en-GB':
                  "Contributor to Hasura's React connector: added features to add only permitted fields, and being able to make 'distinct_on' queries. Selected as a Hasura 'Community Champion' in the process",
                'en-US':
                  "Contributor to Hasura's React connector: added features to add only permitted fields, and being able to make 'distinct_on' queries. Selected as a Hasura 'Community Champion' in the process",
                hi: 'Hasura - एक प्रचलित सॉफ्टवेयर – के एक अंश में नये फीचर जोडे और इस संदर्भ में एक "कम्युनिटी चैंपियन" चयनित हुआ',
              },
              repository: {},
              host: {
                title: 'Hasura',
                src: 'https://twitter.com/HasuraHQ/status/1559870630807445508',
                label: 'twitter.com/HasuraHQ',
              },
              logo: {
                src: 'hasura.png',
              },
              seeMore: {
                src: 'https://github.com/hasura/ra-data-hasura/pulls?q=is%3Apr+author%3Abharatkashyap+is%3Aclosed',
                code: true,
                label: {
                  'en-IN': 'See More',
                  'en-GB': 'See More',
                  'en-US': 'See More',
                  hi: 'और देखें',
                },
              },
            },
            {
              category: 'Work',
              title: 'DIKSHA',
              id: 'diksha',
              date: 'Dec 2020 - Oct 2021',
              engagement: {
                title: 'Samagra',
              },
              description: {
                'en-IN':
                  'Designed and built features to enable digital, decentralised assessment creation inside India\'s public digital infrastructure for learning, "DIKSHA"',
                'en-GB':
                  'Designed and built features to enable digital, decentralised assessment creation inside India\'s public digital infrastructure for learning, "DIKSHA"',
                'en-US':
                  'Designed and built features to enable digital, decentralised assessment creation inside India\'s public digital infrastructure for learning, "DIKSHA"',
                hi: 'भारत में स्कूली बच्चों और अध्यापकों के लिए बनाये गए डिजिटल, सार्वजनिक इंफ्रास्ट्रक्चर "दीक्षा" में नया फ़ीचर जोड़ा जिससे भिन्न जगहों पर स्थित लोग साथ मिल कर मूल्यांकन की रचना कर सकें',
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
              logo: {
                src: 'diksha.png',
              },
              seeMore: {
                src: 'https://github.com/Sunbird-Ed/creation-portal/pulls?page=1&q=is%3Apr+is%3Aclosed+author%3Abharatkashyap',
                label: {
                  'en-IN': 'See More',
                  'en-GB': 'See More',
                  'en-US': 'See More',
                  hi: 'और देखें',
                },
                code: true,
              },
            },
            {
              category: 'Learning',
              title: 'Turkbox',
              date: 'Aug 2019 - Sep 2021',
              engagement: {
                title: 'Personal',
              },
              description: {
                'en-IN':
                  'Won the Google News Initiatve Innovation Challenge 2019 for "Turkbox" - a product that allowed smaller publications to monetise reader attention without advertisments',
                'en-GB':
                  'Won the Google News Initiatve Innovation Challenge 2019 for "Turkbox" - a product that allowed smaller publications to monetise reader attention without advertisments',
                'en-US':
                  'Won the Google News Initiatve Innovation Challenge 2019 for "Turkbox" - a product that allowed smaller publications to monetise reader attention without advertisments',
                hi: 'Turkbox एक ऐसा प्रोडक्ट है जो छोटे अखबारों को अपने पाठकों को बिना विज्ञापन दिखाए मुनाफ़ा कमाने का साधन देता है | इसको Google News Initiative से आर्थिक अनुदान भी प्राप्त हुआ था',
              },
              repository: {
                src: 'https://github.com/turkbox.io',
                title: 'Turkbox',
              },
              host: {
                src: 'https://turkbox.io',
                label: 'turkbox.io',
              },
              seeMore: {
                src: 'https://www.blog.google/around-the-globe/google-asia/here-are-winners-gni-innovation-challenge-asia-pacific/',
                code: true,
                label: {
                  'en-IN': 'See More',
                  'en-GB': 'See More',
                  'en-US': 'See More',
                  hi: 'और देखें',
                },
              },
              logo: {
                src: 'turkbox.png',
              },
            },
            {
              category: 'Work',
              title: 'Digital Saathi',
              date: 'July 2021',
              engagement: {
                title: 'Samagra',
              },
              description: {
                'en-IN':
                  'A low-code software platform built to power a state-wide device donation campaign in Himachal Pradesh, India - allowing the tracking, verification and certification of smartphone donation to children in need',
                'en-GB':
                  'A low-code software platform built to power a state-wide device donation campaign in Himachal Pradesh, India - allowing the tracking, verification and certification of smartphone donation to children in need',
                'en-US':
                  'A low-code software platform built to power a state-wide device donation campaign in Himachal Pradesh, India - allowing the tracking, verification and certification of smartphone donation to children in need',
                hi: 'एक लो - कोड़े सॉफ्टवेयर जो बनाया गया ताकि हिमाचल प्रदेश राज्य सरकार अपने प्रांत में एक स्मार्टफ़ोन दान करने की मुहीम चला सके | इसके ज़रिये फ़ोन को दान, ट्रैक, दान को सत्यापित तथा दाता को प्रमाणित भी किया जा सकता है',
              },
              repository: {},
              host: {
                title: 'Himachal Pradesh',
                src: 'https://hpdigitalsaathi.in',
                label: 'hpdigitalsaathi.in',
              },
              logo: {
                src: 'digital_saathi.png',
              },
              seeMore: {
                src: 'https://github.com/samagra-development/x-admin',
                code: true,
                label: {
                  'en-IN': 'See More',
                  'en-GB': 'See More',
                  'en-US': 'See More',
                  hi: 'और देखें',
                },
              },
            },

            {
              category: 'Contribution',
              title: 'CoWIN',
              date: 'May 2021',
              engagement: {
                title: 'Personal',
              },
              description: {
                'en-IN':
                  "Fixed an issue where ages were calculated incorrectly on India's national digital Covid vaccination certificate",
                'en-GB':
                  "Fixed an issue where ages were calculated incorrectly on India's national digital Covid vaccination certificate",
                'en-US':
                  "Fixed an issue where ages were calculated incorrectly on India's national digital Covid vaccination certificate",
                hi: 'भारत के राष्ट्रीय डिजिटल कोविड टीकाकरण प्रमाण-पत्र पर ग़लत उम्र आ जाने वाले एक सॉफ्टवेयर दोष को ठीक किया ',
              },
              repository: {
                src: 'https://github.com/e-governments/divoc',
                title: 'DIVOC',
              },
              host: {
                title: 'Natiional Health Authority 🇮🇳',
                src: 'https://cowin.gov.in',
                label: 'cowin.gov.in',
              },
              seeMore: {
                src: 'https://github.com/egovernments/DIVOC/pulls?q=is%3Apr+is%3Aclosed+author%3Abharatkashyap',
                code: true,
                label: {
                  'en-IN': 'See More',
                  'en-GB': 'See More',
                  'en-US': 'See More',
                  hi: 'और देखें',
                },
              },
              logo: {
                src: 'cowin.svg',
              },
            },
            {
              category: 'Work',
              title: 'Atlan',
              date: 'May 19 - Jan 20',
              description: {
                'en-IN':
                  'Worked as a frontend engineering intern for Atlan – a modern data workspace – and helped build a media library and an graphical query interface using Vue.js',
                'en-GB':
                  'Worked as a frontend engineering intern for Atlan – a modern data workspace – and helped build a media library and an graphical query interface using Vue.js',
                'en-US':
                  'Worked as a frontend engineering intern for Atlan – a modern data workspace – and helped build a media library and an graphical query interface using Vue.js',
                hi: 'Atlan के सात एक फ्रंटेंड इंटर्न के रूप में कार्यरत रहा | वहां एक वीडियो लाइब्रेरी और एक क्वेरी इंटरफेस बनाने में मदद की |',
              },
              host: {
                title: 'Atlan',
                src: 'https://atlan.com',
                label: 'atlan.com',
              },
              logo: {
                src: 'atlan-blue.svg',
              },
            },
            {
              category: 'Learning',
              title: 'Argonaut',
              date: 'Sep 2019',
              engagement: {
                title: 'HackMIT',
              },
              description: {
                'en-IN':
                  'A cryptocurrency based urban data exchange which won first place at HackMIT 2019, for "Building the financial revolution"',
                'en-GB':
                  'A cryptocurrency based urban data exchange which won first place at HackMIT 2019, for "Building the financial revolution"',
                'en-US':
                  'A cryptocurrency based urban data exchange which won first place at HackMIT 2019, for "Building the financial revolution"',
                hi: 'क्रिप्टोकरेंसी पर आधारित एक डेटा के लेन - देन का सॉफ्टवेयर जिसे MIT की हैकथॉन "HackMIT" में प्रथम स्थान मिला',
              },
              repository: {},
              host: {
                title: 'Devpost',
                src: 'https://devpost.com/software/argonaut',
                label: 'devpost.com/software/argonaut',
              },
              logo: {
                src: 'argonaut.png',
              },
              seeMore: {
                src: 'https://github.com/bharatkashyap/argonaut-be',
                code: true,
                label: {
                  'en-IN': 'See More',
                  'en-GB': 'See More',
                  'en-US': 'See More',
                  hi: 'और देखें',
                },
              },
            },
            {
              category: 'Contribution',
              title: 'DISHA',
              date: 'June 2018',
              engagement: {
                title: 'SocialCops',
              },
              description: {
                'en-IN':
                  'Contributed to the creation of India\'s first national, inter-departmental data platform, "Disha Dashboard", for progress monitoring by members of parliament',
                'en-GB':
                  'Contributed to the creation of India\'s first national, inter-departmental data platform, "Disha Dashboard", for progress monitoring by members of parliament',
                'en-US':
                  'Contributed to the creation of India\'s first national, inter-departmental data platform, "Disha Dashboard", for progress monitoring by members of parliament',
                hi: 'भारत सरकार द्वारा बनवाये गए पहले अंतर-मंत्रालय डेटा प्लेटफार्म "दिशा डैशबोर्ड" के निर्माण में सहयोग दिया, जिससे सासंद अपने क्षेत्र में चल रही विकास योजनाओं की निगरानी कर सकें',
              },
              repository: {},
              host: {
                title: 'Ministry of Rural Development 🇮🇳',
                src: 'https://dishadashboard.nic.in',
                label: 'dishadashboard.nic.in',
              },
              logo: {
                src: 'disha.png',
              },
              seeMore: {
                src: 'https://socialcops.com/case-studies/disha-dashboard/',
                code: false,
                label: {
                  'en-IN': 'See More',
                  'en-GB': 'See More',
                  'en-US': 'See More',
                  hi: 'और देखें',
                },
              },
            },
          ],
          talks: [
            {
              category: 'Contribution',
              title: 'BIRAC Webinar',
              date: 'March 2022',
              engagement: {
                title: 'Personal',
              },
              description: {
                'en-IN':
                  'Speaker representing iSPIRT at a webinar organised as part of the "Amrit Grand Challenge" by BIRAC to talk about innovating on the digital health stack in India',
                'en-GB':
                  'Speaker representing iSPIRT at a webinar organised as part of the "Amrit Grand Challenge" by BIRAC to talk about innovating on the digital health stack in India',
                'en-US':
                  'Speaker representing iSPIRT at a webinar organised as part of the "Amrit Grand Challenge" by BIRAC to talk about innovating on the digital health stack in India',
                hi: 'BIRAC द्वारा संयोजित वेबिनार में iSPIRT की ओर से भारत में डिजिटल स्वास्थ्य पर किये जा रहे काम पर चर्चा की',
              },
              host: {
                src: 'https://www.youtube.com/watch?v=nCURja43dVc',
                label: 'youtube.com',
              },
              seeMore: {
                src: 'https://bharatkashyap.github.io/ikp-health-22',
                code: false,
                label: {
                  'en-IN': 'See More',
                  'en-GB': 'See More',
                  'en-US': 'See More',
                  hi: 'और देखें',
                },
              },
              logo: {
                src: 'birac.png',
              },
            },
            {
              category: 'Contribution',
              title: 'GraphQL Asia',
              date: 'February 2021',
              engagement: {
                title: 'Personal',
              },
              description: {
                'en-IN':
                  'Speaker at "GraphQL Asia 2021", an international GraphQL conference, talking about using cutting-edge GraphQL libraries to drive open-source transformation in Indian state governments',
                'en-GB':
                  'Speaker at "GraphQL Asia 2021", an international GraphQL conference, talking about using cutting-edge GraphQL libraries to drive open-source transformation in Indian state governments',
                'en-US':
                  'Speaker at "GraphQL Asia 2021", an international GraphQL conference, talking about using cutting-edge GraphQL libraries to drive open-source transformation in Indian state governments',
                hi: '"GraphQL Asia" नामक अंतर्राष्ट्रीय सम्मलेन में बोलने का अवसर मिला, जहाँ राज्यों में GraphQL की सहायता से लो-कोड सॉफ्टवेयर बना कर तकनीकी बदलाव लाने के लाभों की चर्चा की',
              },
              host: {
                src: 'https://www.youtube.com/watch?v=G3HIKcLy8uw',
                label: 'youtube.com',
              },
              seeMore: {
                src: 'https://bharatkashyap.github.io/gql-asia-21/',
                code: false,
                label: {
                  'en-IN': 'See More',
                  'en-GB': 'See More',
                  'en-US': 'See More',
                  hi: 'और देखें',
                },
              },
              logo: {
                src: 'graphql_asia.svg',
              },
            },
            {
              category: 'Contribution',
              title: 'ReactFoo Pune',
              date: 'February 2020',
              engagement: {
                title: 'Personal',
              },
              description: {
                'en-IN':
                  'Speaker at "ReactFoo Pune 2020", talking about migrating large codebases to modern frameworks incrementally',
                'en-GB':
                  'Speaker at "ReactFoo Pune 2020", talking about migrating large codebases to modern frameworks incrementally',
                'en-US':
                  'Speaker at "ReactFoo Pune 2020", talking about migrating large codebases to modern frameworks incrementally',
                hi: '"ReactFoo Pune 2020" नामक सम्मलेन में बोलने का अवसर मिला, जहां सॉफ्टवेयर के नवीनीकरण के एक तरीके पर अपने विचार रखे ',
              },
              host: {
                src: 'https://hasgeek.com/reactfoo/2020-pune/schedule/backbone-vue-adding-modern-frameworks-to-legacy-codebases-GPQX78fMxCFn9ZSj1JFJ4s',
                label: 'hasgeek.com/reactfoo',
              },
              seeMore: {
                src: 'https://docs.google.com/presentation/d/1eYrK4AqkwdGY1da2PPGzEXNN5litR2PeFxQte6fEMjU/edit#slide=id.p',
                code: false,
                label: {
                  'en-IN': 'See More',
                  'en-GB': 'See More',
                  'en-US': 'See More',
                  hi: 'और देखें',
                },
              },
              logo: {
                src: 'reactFoo.jpeg',
              },
            },
          ],
        },
        work: {
          icon: '⚡',
          text: {
            'en-IN': 'Significant Work',
            'en-GB': 'Significant work',
            'en-US': 'Significant work',
            hi: 'महत्वपूर्ण कार्य',
          },
        },
        talks: {
          icon: '🎤',
          text: {
            'en-IN': 'Talks',
            'en-GB': 'Talks',
            'en-US': 'Talks',
            hi: 'कथन',
          },
        },
        resume: {
          icon: '📄',
          link: 'Resume.pdf',
          text: {
            'en-IN': 'Resumé ↗',
            'en-GB': 'Resumé ↗',
            'en-US': 'Resumé ↗',
            hi: 'रिज़्यूमे ↗',
          },
        },
        footnote: {
          text: {
            'en-IN': 'Contemporary tenant of the litter of ages',
            'en-GB': 'Contemporary tenant of the litter of ages',
            'en-US': 'Contemporary tenant of the litter of ages',
            hi: ' जहां मैं हूँ वहां और भी थे | और भी होंगे ||',
          },
        },
      },
      locale: '',
      initLocale: '',
    }
  },
  mounted() {
    this.locale = navigator.languages && navigator.languages[0]
    this.initLocale = this.locale
  },
}
</script>
