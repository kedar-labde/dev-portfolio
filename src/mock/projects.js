import { BACKEND_SKILLS, FRONTEND_SKILLS } from './tech-skills';

export const PROJECT_CATEGORY = {
  ALL: 'all',
  FLUTTER: 'flutter',
  KOTLIN: 'kotlin',
  JAVA: 'java',
  OPEN_SOURCE :  'open-source',

};

export const TABS = [
  {
    label: 'All',
    value: PROJECT_CATEGORY.ALL,
    icon: 'fluent:tab-desktop-20-regular',
  },
  {
    label: 'Flutter',
    value: PROJECT_CATEGORY.FLUTTER,
    icon: 'logos:flutter',
  },
  {
    label: 'Kotlin',
    value: PROJECT_CATEGORY.KOTLIN,
    icon: 'logos:java',
  },
  {
    label: 'Java',
    value: PROJECT_CATEGORY.JAVA,
    icon: 'logos:java',
  },
];

const getSkillByLabel = (skills, techLabel) => skills.find(({ label }) => label === techLabel);

export const PROJECTS = [
  {
    imgSrc: 'https://play-lh.googleusercontent.com/oupWqHkiistJghhxEcb4NqPdeIMa611i5--FIkIIKOempVe2lwNfSC5HP_ehdIKyufU=w2560-h1440-rw',
    title: 'Onourem: 10-Minute Wellness',
    techIcons: [
      
      getSkillByLabel(FRONTEND_SKILLS, 'Kotlin'),
      getSkillByLabel(FRONTEND_SKILLS, 'Android'),
      getSkillByLabel(FRONTEND_SKILLS, 'Retrofit'),
      getSkillByLabel(FRONTEND_SKILLS, 'JetPack'),
    ],
    description:
      'Onourem revolutionizes the approach to emotional wellbeing, embracing the social media generations desire for connection and meaningful interactions. This groundbreaking app seamlessly integrates scientifically proven mental wellness activities with healthy social engagement, making emotional growth an enjoyable and rewarding experience.',
    repoLink: '',
    sourceLink: 'https://play.google.com/store/apps/details?id=com.onourem.android.activity&hl=en_IN',
    category: [PROJECT_CATEGORY.KOTLIN],
  },
  
  {
    imgSrc: 'https://play-lh.googleusercontent.com/uXKXEi6S1eJDf8eMG2R8ZmDv2Dj9Tre421p2I8qmE83B97Wz3x9cTJ8oBdbLJ-lY3g=w2560-h1440-rw',
    title: 'Wealthify – Financial Planner',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'Android'),
      getSkillByLabel(FRONTEND_SKILLS, 'Java'),
      getSkillByLabel(BACKEND_SKILLS, 'MySQL'),
    ],
    description:
      'This application helps you to achieve your future dreams, to plan your retirement as well as ensure financial protection of your family! 1. Life-Time Goal Management –You will be able to evaluate whether your current assets are sufficient to meet your future goals. In case your assets are not sufficient; the planner suggests the additional monthly savings amount required to meet your goal. It also helps to calculate the Protection cover required to ensure financial stability of your loved ones. \n2. Retirement Planning –You will be able to calculate monthly savings required to maintain your lifestyle post your retirement.',
    repoLink: '',
    sourceLink: 'https://play.google.com/store/apps/details?id=com.ifl.wealthify&hl=en_IN',
    category: [PROJECT_CATEGORY.JAVA],
  },

  {
    imgSrc: 'https://activecollab.com/upload/blog/551/cover.png',
    title: 'Onourem Website',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'Flutter'),
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(BACKEND_SKILLS, 'Firebase'),
    ],
    description: 'Unlock the power of Onourem mobile app alongside your closest companions. Immerse yourself in an array of emotional wellness exercises perfectly suited to your unique personality. From Mood Tracking and Watch List to engaging Q/A Games, Journaling, Gratitude & Kindness Practice, Deeper Sharing, and curated content, there is something to ignite your inner spark.\nPrefer a touch of inspiration? Let Onourem be your trusted guide, sending you daily notifications with carefully curated activities. Just dedicate 10-15 minutes each day and watch your well-being soar. Join us on this transformative journey and embrace a life of greater balance and fulfillment!',
    repoLink: '',
    sourceLink: 'https://www.onourem.com/',
    category: [PROJECT_CATEGORY.FLUTTER],
  },
  {
    imgSrc: 'https://assets.justinmind.com/wp-content/uploads/2019/10/best-20-web-development-blogs.png',
    title: 'Developer Portfolio',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'Tailwind CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'Next.js'),
    ],
    description:
      'Welcome to my modern portfolio, crafted to showcase my expertise as a software developer. Built with Next.js and Tailwind CSS, this portfolio combines functionality with aesthetics. Tailwind CSS ensures a highly customizable and responsive design, while Next.js provides a robust and efficient framework for seamless performance. Explore my projects, skills, and achievements through a clean and intuitive interface. Whether you are interested in my latest work or looking to connect, this portfolio reflects my commitment to excellence and innovation in software development.',
    repoLink: 'https://github.com/kedar-labde/dev-portfolio',
    sourceLink: 'https://dev-portfolio-iota-jet.vercel.app/',
    category: [PROJECT_CATEGORY.OPEN_SOURCE],
  },
];
