import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  meatup,
  jstore,
  gotore,
  threejs,
  expressjs,
  nextjs,
  graphql,
  angular,
  vuejs,
  vuex,
  terraform,
  ruby,
  rails,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Tech Lead",
    icon: creator,
  },
  {
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "QA Engineer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Vue JS",
    icon: vuejs,
  },
  {
    name: "GraphQL",
    icon: graphql,
  },
  {
    name: "Ruby",
    icon: ruby,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
];

const experiences = [
  {
    title: "QA Engineer",
    company_name: "Egg",
    icon: starbucks,
    iconBg: "#2ea554",
    date: "March 2020 - April 2021",
    points: [
      "Experienced as a leader from the month following assignment due to a high rate of excellent communication skills.",
      "Early detection of the target bugs, enabled additional testing and contributes to product quality improvement.",
      "With project management and time management skills as a leader, completed a music app QA testing project within the deadline.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Free Live Net",
    icon: tesla,
    iconBg: "#fff",
    date: "July 2023 - Sep 2023",
    points: [
      "Reduced 75% of manual testing by creating test automation, contributing to maintaining the application's high quality.",
      "Increased 50% of front-end team development efficiency by conducting frequent code reviews.",
      "3 new features for a mobile app implemented by my technology selection skill.",
      "Just in 1 month, Exercising my quick learning skills enabled me to start full-stack development.",
      "Contributed to quality improvement by detecting a bug with comprehensive test case creation.",
    ],
  },
  {
    title: "Tech Lead",
    company_name: "Limhaus",
    icon: shopify,
    iconBg: "#111",
    date: "Sep 2023 - Nov 2023",
    points: [
      "Progressed development 50% faster by demonstrating task management skills.",
      "Query speed improved by 10x with database tuning (e.g. Designing database taking into consideration the presence or absence of NULL pharmaceuticals in advance, Rectifying added index, and Using different joins methods like eager and preload).",
      "Gain task management skills in Agile development methodologies using Kanban boards and prioritize tasks.",
      "Achieve a robust and secure payment feature with Stripe API by leading technical architecture decisions.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Tunagate",
    icon: meta,
    iconBg: "#fff",
    date: "March 2021 - Present",
    points: [
      "Secured 20% of monthly active users in four months by developing a new chat feature.",
      "Grown 10% in sales in the second month by introducing a subscription billing model.",
      "Increased 30% in the number of our platform users by shortening unnecessary flows.",
      "Acquired more than 80% of new users in 3 months by updating the top page UI.",
      "Collaborated with cross-functional teams frequently to develop the new UI from scratch.",
      "Enabled the website to display 1st by SEO enhancements techs such as serverside rendering.",
    ],
  },
];

const projects = [
  {
    name: "Meatup",
    description:
      "Muscle training social media platform app aimed at people who started muscle training to continue without frustration.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "rubyonrails",
        color: "pink-text-gradient",
      },
    ],
    image: meatup,
    source_code_link: "https://github.com/sabakantaro/meatup",
    website_link: "https://meatup.vercel.app/",
  },
  {
    name: "J-Store",
    description:
      "Electronic commerce site, able to shop online with payment feature provided by NodeJS and Stripe.",
    tags: [
      {
        name: "angularjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "stripe",
        color: "pink-text-gradient",
      },
    ],
    image: jstore,
    source_code_link: "https://github.com/sabakantaro/j-store",
    website_link: "https://j-store-psi.vercel.app/",
  },
  {
    name: "Gotore",
    description:
      "The social media platform app for gym-goes is aimed at people who want to go to the gym with gym bros.",
    tags: [
      {
        name: "mysql",
        color: "blue-text-gradient",
      },
      {
        name: "aws",
        color: "green-text-gradient",
      },
      {
        name: "terraform",
        color: "pink-text-gradient",
      },
    ],
    image: gotore,
    source_code_link:
      "https://github.com/sabakantaro/react_ruby_platform_for_gymgoes",
    website_link:
      "https://github.com/sabakantaro/react_ruby_platform_for_gymgoes",
  },
];

export { services, technologies, experiences, projects };
