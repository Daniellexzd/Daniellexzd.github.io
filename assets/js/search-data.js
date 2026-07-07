// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of my research projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "A list of courses I have taught. I take a learner-centred approach in my teaching, focusing on individualized learning trajectories that build upon each student’s unique strengths and empower them to take ownership of their learning process. I have actively participated in workshops at SFU on integrating multilingualism and decolonial teaching practices into the classroom, aiming to foster an inclusive learning environment by incorporating linguistic and cultural diversity into the curriculum in the future.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Please email me for my full cv.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-i-passed-my-phd-dissertation-defence-with-the-result-accepted-as-submitted",
          title: 'I passed my PhD dissertation defence with the result ‘accepted as submitted’.',
          description: "",
          section: "News",},{id: "news-a-first-author-study-on-phonetic-recalibration-has-been-presented-at-labphon20-in-montreal",
          title: 'A first-author study on phonetic recalibration has been presented at LabPhon20 in Montreal!...',
          description: "",
          section: "News",},{id: "news-a-first-author-paper-on-associations-between-music-perception-and-production-of-l2-english-lexical-stress-has-published-in-applied-psycholinguistics",
          title: 'A first-author paper on associations between music perception and production of L2 English...',
          description: "",
          section: "News",},{id: "projects-accent-adaptation-in-perception",
          title: 'accent adaptation in perception',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-accent-adaptation-in-production",
          title: 'accent adaptation in production',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-audio-visual-processing",
          title: 'audio-visual processing',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-spoken-word-recognition-in-contexts",
          title: 'spoken word recognition in contexts',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-music-perception-and-l2-learning",
          title: 'music perception and L2 learning',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%78%69%7A%69_%64%65%6E%67@%73%66%75.%63%61", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Daniellexzd", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/danielle-xizi-deng-87506a161", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0003-4407-8347", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Xizi-Deng?ev=hdr_xprf/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=RGaYNxsAAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/xizi_deng", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
