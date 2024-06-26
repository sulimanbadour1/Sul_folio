import {
  metacredly,
  credly,
  metaback,
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
  betteraskpdf,
  NorthFace,
  shirt,
  littlelemon,
  saas,
  shadcn,
  redux,
  tenso,
  tripteron,
  modeling,
  ros,
  cad,
  f360,
  bloglanding,
  local,
  reminder,
  django,
  gsap,
  adobexd,
  langpilot,
  jefffolio,
  luciefolio,
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
    date: "Feb 2020 - Dec 2020",
    points: [
      "Executed Visual redesign of web applications and marketing for +20 new product categories (Shoes, plus-size).",
      "Designed posters and various social media content for multiple clients.",
      "Implemented responsive design and ensuring cross-browser compatibility.",
    ],
    icons: [Figma, HtmlIcon, CssIcon, BootIcon], // Replace with actual technology icons
    alt: ["figma", "html", "css", "bootstrap"],
  },
  {
    title: "Product Designer",
    company_name: "Provectus",
    icon: provectus, // Replace with the actual image path
    iconBg: "#ffffff",
    date: "Jan 2021 - Jan 2022",
    points: [
      "Worked as a UI/UX designer on one of Provectus internal projects, Communicated with the product managers and the stakeholders weekly.",
      "Designed new features from scratch and revamped old ones to cope with the standards of the current market.",
    ],
    icons: [Figma, HtmlIcon, CssIcon, Js], // Replace with actual technology icons
    alt: ["figma", "html", "css", "js"],
  },
  {
    title: "Design Consultant / Contractor",
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
    alt: ["figma", "js", "react", "tailwind", "git"],
  },
  {
    title: "Product Designer/ Front-End Developer",
    company_name: "Innopolis Design Lab ",
    icon: inno,
    iconBg: "#41ba21",
    date: "Jan 2022 - Jan 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      " Designed UI & UX in collaboration with engineering & design teams.",
      " Designed and modeled 3d products, made animations to add them to company projects.",
    ],
    icons: [Figma, Js, ReactJs, Ts, Next, Tailwind], // Replace with actual technology icons
    alt: ["figma", "js", "react", "ts", "next", "tailwind"],
  },
];

const skills = [
  {
    title: "HTML 5",
    icon: HtmlIcon,
    date: "70%",
  },
  {
    title: "Adobe XD",
    icon: adobexd,
    date: "80%",
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
    title: "SAAS",
    icon: saas,
    date: "60%",
  },
  {
    title: "Bootstrap UI",
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
    date: "80%",
  },
  {
    title: "Photoshop",
    icon: photoshop,
    date: "70%",
  },
  {
    title: "ShadnCn UI",
    icon: shadcn,
    date: "70%",
  },
  {
    title: "AWS ",
    icon: redux,
    date: "50%",
  },
  {
    title: "Django",
    icon: django,
    date: "60%",
  },
  {
    title: "GSAP",
    icon: gsap,
    date: "50%",
  },
];

const projects = [
  {
    title: "Local Movie Streamer",
    description:
      "MERN-based application designed for streaming local movies through a sleek web interface. It enables users to search their movie collection, watch movies, add subtitles, and control streaming from any device connected to their local network.",
    image: local,
    source_code: "https://github.com/sulimanbadour1/local-stream-app/tree/main",
    in_development: "In Development",
    live_url: "",
    icons: [Figma, nodeJs, ReactJs, Tailwind], // Replace with actual technology icons
    alt: ["figma", "Node js", "React", "Tailwind"],
  },
  {
    title: "LangPilot",
    description:
      "LangPilot is your comprehensive language learning companion, designed to make mastering a new language both effective and enjoyable.",
    image: langpilot,
    source_code: "https://github.com/sulimanbadour1/langPilot",
    in_development: "In Development",
    live_url: "",
    designUrl:
      "https://www.figma.com/file/TFT8ZTiCEB3NegdCFBb0EV/lang_pilot?type=design&mode=design&t=n8IHqxOD0Hrw9qKJ-1",
    icons: [Figma, NextJs, ReactJs, Tailwind, django, gsap], // Replace with actual technology icons
  },

  {
    title: "SB Blog",
    description:
      "Suliman Badour's Blog is an insightful and engaging online platform where Suliman shares his personal journey and experiences. This blog features a variety of content ranging from personal projeccts to shared insights.",
    image: bloglanding,
    source_code: "https://github.com/sulimanbadour1/SB_Blog",
    in_development: "",
    live_url: "https://sb-blog-silk.vercel.app",
    icons: [Figma, NextJs, ReactJs, CssIcon], // Replace with actual technology icons
    alt: ["figma", "next", "React", "Css"],
  },
  {
    title: "Jeff's Portfolio",
    description:
      "Jeff's Portfolio is a modern and responsive portfolio designed for Jeff. It showcases his work, skills, and experiences in a visually appealing manner.",
    image: jefffolio,
    source_code: "",
    live_url: "https://jeff-folio.vercel.app/",
    icons: [Figma, ReactJs, Tailwind, shadcn, gsap], // Replace with actual technology icons
  },
  {
    title: "Reminder 4 u",
    description:
      " A full-stack reminder app leveraging modern technologies to provide an efficient and user-friendly platform for setting and managing reminders using NextJs.",
    source_code: "https://github.com/sulimanbadour1/Reminder_NextJs",
    image: reminder,
    in_development: "",
    live_url: "https://reminder4u.vercel.app/",
    icons: [Figma, NextJs, ReactJs, CssIcon, shadcn, Tailwind], // Replace with actual technology icons
    alt: ["figma", "next", "React", "Css", "shadcn", "Tailwind"],
  },
  {
    title: "Better Ask PDF",
    description:
      " SAAS product designed to empower users by allowing them to upload and interactively engage with PDF files. Leveraging the power of Next.js, Tailwind CSS, NeonDB, Stripe, and OpenAI.",
    image: betteraskpdf,
    source_code: "https://github.com/sulimanbadour1/betteraskpdf",
    in_development: "True",
    icons: [Figma, HtmlIcon, shadcn, Ts, NextJs, saas, redux], // Replace with actual technology icons
    alt: ["figma", "html", "shadcn", "ts", "next", "saas", "redux"],
  },
  {
    title: "English with Lucie",
    description:
      "A personal website for Lucie, a language teacher, designed to help her offer her services and connect with potential clients, in two languages, Czech and English.",
    image: luciefolio,
    source_code: "",
    in_development: "",
    live_url: "https://lucie-folio.vercel.app/cz",
    icons: [Figma, Tailwind, NextJs, ReactJs, shadcn, gsap], // Replace with actual technology icons
    alt: ["figma", "html", "bootstrap", "js", "react"],
  },
  {
    title: "Little Lemon Restaurant",
    description:
      "A full responsive website for a restaurant in Prague, which allows users to browse the menu, reserve a table  order and checkout. Also, it has a dashboard for the restaurant owners.",
    image: littlelemon,
    source_code: "https://github.com/sulimanbadour1/Meta_Capstone_Project",
    in_development: "true",
    icons: [Figma, HtmlIcon, BootIcon, Js, ReactJs], // Replace with actual technology icons
    alt: ["figma", "html", "bootstrap", "js", "react"],
  },
  {
    title: "The North Face App",
    description:
      "An e-commerce mobile app for the brand The North Face, which allows users to browse the latest products, order and checkout. Also, It allow tracking the order and get notifications.",
    image: NorthFace,
    source_code: "",
    in_development: "",
    designUrl:
      "https://www.behance.net/gallery/138474501/The-North-Face-Mobile-Application",
    icons: [Figma, HtmlIcon, Js, ReactJs, Tailwind], // Replace with actual technology icons
    alt: ["figma", "html", "js", "react", "tailwind"],
  },
  // {
  //   title: "3D portfolio",
  //   description:
  //     "A 3d portfolio created using vite, three js and three drei. with contact me form and resume download. Integrated with GSAP for animations, and react-three-fiber for 3d rendering.",
  //   image: folio,
  //   source_code: "https://github.com/sulimanbadour1/My_new_portfolio",
  //   icons: [Figma, HtmlIcon, CssIcon, Js, ReactJs, ThreeJs, nodeJs, blender], // Replace with actual technology icons
  //   alt: ["figma", "html", "css", "js", "react", "three", "node", "blender"],
  // },

  {
    title: "Shirt Store AI",
    description:
      "Web-based platform that allows users to create and share their own custom t-shirt designs using DALL.E, change colors to save thier own choosen design, and order them for printing and delivery.",
    image: shirt,
    source_code: "https://github.com/sulimanbadour1/AI_shirt_SAAS_3js",
    live_url: "https://ai-shirt-saas-3js.vercel.app/",
    icons: [saas, HtmlIcon, Tailwind, Ts, NextJs, ThreeJs, blender], // Replace with actual technology icons
    alt: ["saas", "html", "tailwind", "ts", "next", "three", "blender"],
  },
  // {
  //   title: "3D Mosaic",
  //   description:
  //     "E-Commerce Website for a Furniture Company which helps users to try, Scan its products in 3D via AR technology and take orders from clients, build products as the customer needs.",
  //   image: mosaic,
  //   source_code: "https://www.behance.net/gallery/141974421/3D-Mosaic",
  //   icons: [Figma, ThreeJs, ReactJs, Js, Tailwind, blender, saas], // Replace with actual technology icons
  //   alt: ["figma", "three", "react", "js", "tailwind", "blender", "saas"],
  // },
];
const projects1 = [
  {
    title: "TensDrone",
    description:
      "Tensodrone that do not break Tensodrone is a multi-rotor UAV of a new design with collision protection, made on the principle of tensegrity. This approach allows for the combination of the protective cage and the airframe in one structure, increasing impact resistance with less weight.",
    image: tenso,
    source_code: "https://youtu.be/4dEewzDinpA?si=7WFjcUC_CviAtYL7",
    icons: [modeling, f360, cad, ros], // Replace with actual technology icons
    alt: ["modeling", "f360", "cad", "ros"],
  },
  {
    title: "SpotRobot",
    description:
      "Spot Robot is a quadruped robot. It is a four-legged robot that can walk, run, and climb stairs. Spot is the first commercial robot to be able to climb stairs and traverse rough terrain. It is designed for indoor and outdoor operation and is waterproof and dustproof in all weathers.",
    image: tripteron,
    source_code: "https://www.youtube.com/channel/UCU2AGYmAQM4jw4wezPOFhIA",
    icons: [modeling, blender, cad, ros], // Replace with actual technology icons
    alt: ["modeling", "blender", "cad", "ros"],
  },
];

const badges = [
  {
    name: "Meta Front-End Certificate",
    icon: metacredly,
    link: "https://www.credly.com/badges/d19e7ca4-192f-46e4-9276-c309175bdccb",
  },
  {
    name: "UX Google Certificate",
    icon: credly,
    link: "https://www.credly.com/badges/c2089dc9-8c95-403b-95cd-b090c6818f61",
  },

  {
    name: "Meta Back-End Certificate",
    icon: metaback,
    link: "https://www.credly.com/org/facebook-blueprint/badge/meta-back-end-developer-certificate",
  },
];

export { technologies, experiences, skills, projects, projects1, badges };
