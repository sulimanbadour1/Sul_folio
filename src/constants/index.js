import {
  bobcat,
  inno,
  kazanexpress,
  provectus,
  nodeJs,
  Js,
  Ts,
  ReactJs,
  Next,
  Tailwind,
  Figma,
  Git,
  CssIcon,
  HtmlIcon,
  BootIcon,
  ThreeJs,
  docker,
  NextJs,
  blender,
  photoshop,
} from "../assets/index";

const technologies = [
  {
    name: "HTML 5",
    icon: HtmlIcon,
  },
  {
    name: "CSS 3",
    icon: CssIcon,
  },
  {
    name: "JavaScript",
    icon: Js,
  },
  {
    name: "TypeScript",
    icon: Ts,
  },
  {
    name: "React JS",
    icon: ReactJs,
  },

  {
    name: "Tailwind CSS",
    icon: Tailwind,
  },
  {
    name: "Bootstrap CSS",
    icon: BootIcon,
  },
  {
    name: "Node JS",
    icon: nodeJs,
  },
  {
    name: "Three JS",
    icon: ThreeJs,
  },
  {
    name: "git",
    icon: Git,
  },
  {
    name: "figma",
    icon: Figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "UI/UX Designer",
    company_name: "Kazan Express",
    icon: kazanexpress, // Replace with the actual image path
    iconBg: "#ff1919",
    date: "Mar 2020 - Dec 2020",
    points: [
      "Executed Visual redesign of web applications and marketing for +20 new product categories (Shoes, plus-size).",
      "Designed posters and various social media content for multiple clients.",
      "Implemented responsive design and ensuring cross-browser compatibility.",
    ],
    icons: [Figma, HtmlIcon, CssIcon, BootIcon], // Replace with actual technology icons
  },
  {
    title: "Product Designer",
    company_name: "Provectus",
    icon: provectus, // Replace with the actual image path
    iconBg: "#ffffff",
    date: "Apr 2021 - Dec 2021",
    points: [
      "Worked as a UI/UX designer on one of Provectus internal projects, Communicated with the product managers and the stakeholders weekly.",
      "Designed new features from scratch and revamped old ones to cope with the standards of the current market.",
    ],
    icons: [Figma, HtmlIcon, CssIcon, Js], // Replace with actual technology icons
  },
  {
    title: "Web Developer",
    company_name: "Innopolis Design Lab",
    icon: inno,
    iconBg: "#41ba21",
    date: "Jan 2022 - Sep 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      " Designed UI & UX in collaboration with engineering & design teams.",
      " Designed and modeled 3d products, made animations to add them to company projects.",
    ],
    icons: [Figma, Js, ReactJs, Ts, Next, Tailwind], // Replace with actual technology icons
  },
  {
    title: "Front-End Developer",
    company_name: "Doosan Bobcat",
    icon: bobcat,
    iconBg: "#ea401d",
    date: "Jan 2023 - Apr 2023",
    points: [
      "Collaborated with cross-functional teams to define, design, and ship new web applications and features.",
      " Designed 3D models and integrated them into the company's website. ",
      " Designed UI & UX in collaboration with engineering & design teams. ",
      "Participated in user testing and research to gain insights into user behavior.",
    ],
    icons: [Figma, Js, ReactJs, Tailwind, Git], // Replace with actual technology icons
  },
];

const skills = [
  {
    title: "HTML 5",
    icon: HtmlIcon,
    date: "70%",
  },
  {
    title: "CSS 3",
    icon: CssIcon,
    date: "75%",
  },
  {
    title: "JavaScript",
    icon: Js,
    date: "65%",
  },
  {
    title: "TypeScript",
    icon: Ts,
    date: "70%",
  },
  {
    title: "React Js",
    icon: ReactJs,
    date: "80%",
  },
  {
    title: "Tailwind CSS",
    icon: Tailwind,
    date: "85%",
  },
  {
    title: "ShadnCn UI",
    icon: BootIcon,
    date: "60%",
  },
  {
    title: "Three Js",
    icon: ThreeJs,
    date: "60%",
  },
  {
    title: "Figma",
    icon: Figma,
    date: "80%",
  },
  {
    title: "git",
    icon: Git,
    date: "70%",
  },
  {
    title: "docker",
    icon: docker,
    date: "75%",
  },
  {
    title: "NodeJs",
    icon: nodeJs,
    date: "60%",
  },
  {
    title: "Next Js",
    icon: NextJs,
    date: "70%",
  },
  {
    title: "Blender",
    icon: blender,
    date: "70%",
  },
  {
    title: "Photoshop",
    icon: photoshop,
    date: "70%",
  },
];

export { technologies, experiences, skills };
