import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";
import { title } from "process";

export const DATA = {
  name: "Mugilan Sakthivel",
  initials: "S",
  url: "https://mugilans.in",
  location: "Salem, Tamilnadu, India",
  locationLink: "",
  description:
    "Software Engineer and eager learner who enjoys building solutions and helping others.",
  summary:
    "I'm started my journey of studying Computer Science - Software Product Engineering at [Kalvium](/#education) and pursuing a BCA degree at [Mysore University](/#education). I've helped students with over [2 talks](/#education) on picking the right college and gained great experience from [4+ hackathons](/#hackathons). I love helping others learn and sharing tips to support their growth.",
  avatarUrl: "/me.jpg",
  skills: [
    "Next.js",
    "Javascript",
    "TailwindCSS",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "Clerk",
    "Cloudinary",
    "Redis",
    "Nodemailer",
    "Prisma",
    "Transformers.js",
    "LangChain",
    "JWT",
    "REST",
    "Python",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
    // { href: "#", icon: CodeIcon, label: "Projects" },
    // { href: "#", icon: PencilLine, label: "Notes" },
  ],
  contact: {
    email: "mugilan.s@gmail.com",
    tel: "+91 8072241648",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/mugilankani",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mugilansakthivel/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/MugilanKani",
        icon: Icons.x,

        navbar: true,
      },
      leetcode: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  // work: [
    // {
    //   company: "Kalvium",
    //   href: "https://kalvium.com/",
    //   badges: [],
    //   location: "Coimbatore",
    //   title: "Student at Kalvium",
    //   logoUrl: "/Kalvium.png",
    //   start: "Oct 2023",
    //   end: "Oct 2027",
    //   description:
    //     "At Kalvium, I have spent the past year working with the MERN stack, building a range of small and large projects. This hands-on experience has provided me with valuable real-world skills and enabled me to connect with students across India, significantly expanding my professional network.",
    // },
    // {
    //   company: "Hackathons",
    //   badges: [],
    //   href: "/#hackathons",
    //   location: "Online and Offline",
    //   title: "Author",
    //   logoUrl: "/HackathonLogo.jpg",
    //   start: "Jan 2024",
    //   end: "Ongoing",
    //   description:
    //     "I have participated in over four hackathons with my friends, where I explored diverse technologies and developed real-world products. These events were instrumental in expanding my professional network, allowing me to connect with innovators from various backgrounds and significantly grow my network. The collaborative environment helped me gain new insights and forge valuable connections in the tech community.",
    // },
    // {
    //   company: "Workshop",
    //   href: "/#work",
    //   badges: [],
    //   location: "Tamilnadu",
    //   title: "Educational Guidance Workshops",
    //   logoUrl: "workshop.png",
    //   start: "July 2023",
    //   end: "Ongoing",
    //   description:
    //     "I have delivered over two speeches in schools, guiding students on achieving academic success and selecting the right college and department. These workshops provided detailed information on colleges and career paths, helping students make informed decisions about their educational journeys.",
    // },
  // ],
  education: [
    {
      school: "University of Mysore - Mysore, Karnataka",
      href: "https://uni-mysore.ac.in/Kannada/home.php",
      degree: "Bachelor's Degree of Computer Application (BCA)",
      logoUrl: "/mysoreUni.jpg",
      start: "2024",
      end: "2027",
    },
    {
      school: "Kalvium - Coimbatore, Tamil Nadu",
      href: "https://kalvium.com/",
      degree: "CSE - Software Product Engineering",
      logoUrl: "/kalvium.png",
      start: "2023",
      end: "2027",
    },
    {
      school: "Government Boys Higher Secondary School - Salem, Tamil Nadu",
      href: "/#education",
      degree: "Higher Secondary Education",
      logoUrl: "/govermentlogo.png",
      start: "2021",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "Rosenau",
      href: "https://rosenau.mugilans.in/",
      dates: "Aug 2024 - Ongoing",
      active: true,
      description:
        "Rosenau was created to simplify frontend development and web design by bringing together all the essential tools in one place. I developed this platform to help you avoid the frustration of searching for reliable resources, so you can focus on building great projects.",
      technologies: ["Next.js", "Javascript", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://rosenau.mugilans.in/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/mugilankani/rosenau",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Rosenau.jpeg",
      video: "",
    },
    {
      title: "Hogwarts LMS",
      href: "https://hogwarts.mugilans.in/",
      dates: "Mar 2024 - Ongoing",
      active: true,
      description:
        "I developed Hogwarts, a SaaS e-learning platform that companies can purchase to facilitate online learning for their students, providing comprehensive tools and resources for effective education delivery",
      technologies: [
        "React.js",
        "Javascript",
        "Node.js",
        "Express.js",
        "MongoDb",
        "Mongoose",
        "TailwindCSS",
        "Cloudinary",
        "Redis",
        "Nodemailer",
      ],
      links: [
        {
          type: "Website",
          href: "https://hogwarts.mugilans.in/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/mugilankani/S52_Mugilan_Capstone_Livebooks",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Hogwarts.jpeg",
      video: "",
    },
    {
      title: "Review-Club",
      href: "https://review-club-website.onrender.com/",
      dates: "July 2024 - July 2024",
      active: true,
      description:
        "My friends and I developed Review Club, a platform to find, share, and discuss reviews, focusing on identifying and combating scams, and providing a hub for discussions and fraud reporting.",
      technologies: [
        "React.js",
        "Javascript",
        "MongoDB",
        "Prisma",
        "TailwindCSS",
        "Node.js",
        "Google OAuth",
        "Firebase",
      ],
      links: [
        {
          type: "Website",
          href: "https://review-club-website.onrender.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/mugilankani/Review-Club",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/ReviewClub.jpeg",
      video: "",
    },
    {
      title: "Q-Space",
      href: "https://qspace-fvi1.onrender.com/",
      dates: "Jan 2024 - July 2024",
      active: true,
      description:
        "I developed Q-space, a product for exam-preparing students to upload their materials. The AI generates questions based on difficulty, provides suggestions and reviews for incorrect answers, and includes a chatbot for students to ask their doubts.",
      technologies: [
        "React.js",
        "Javascript",
        "MongoDB",
        "Mongoose",
        "Node.js",
        "TailwindCSS",
        "Expres.js",
        "Transformers.js",
        "Gemini 1.5 Flash",
        "LangChain",
      ],
      links: [
        {
          type: "Website",
          href: "https://qspace-fvi1.onrender.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/mugilankani/Q-Space",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Qspace.jpeg",
      video: "",
    },
    {
      title: "Funky Fumbles",
      href: "https://funkyfumbles.netlify.app",
      dates: "Jan 2024 - July 2024",
      active: true,
      description:
        "I developed Funkyfumbles, a social media platform where you can upload and share awkward dance moves, and have fun viewing posts from others.",
      technologies: [
        "React.js",
        "Javacript",
        "MongoDB",
        "Mongoose",
        "Node.js",
        "Express.js",
        "TailwindCSS",
        "JWT",
        "REST",
      ],
      links: [
        {
          type: "Website",
          href: "https://funkyfumbles.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/mugilankani/S52_Awkward_Dance_Moves",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Awkward.jpeg",
      video: "",
    },

    {
      title: "Strix",
      href: "https://review-club-website.onrender.com/",
      dates: "May 2024 - May 2024",
      active: true,
      description:
        "My friend and I built a comprehensive chat interface for Ollama, integrating support for all models. This interface enhances user interactions and ensures seamless communication across various platforms and applications.",
      technologies: ["Vue.js", "Javascript", "Ollama JS", "TailwindCSS"],
      links: [
        // {
        //   type: "Website",
        //   href: "https://review-club-website.onrender.com/",
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "Source",
          href: "https://github.com/Anam-Ashraf7/Strix",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/OllamaChat.jpeg",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Prisma",
      dates: "July 20, 2024",
      location: "Online Hackathon",
      description:
        "My friends and I developed Review Club, a platform to find, share, and discuss reviews, focusing on identifying and combating scams, and providing a hub for discussions and fraud reporting.",
      image: "/TinkerSpace.jpeg",
      links: [
        {
          title: "Website",
          href: "https://review-club-website.onrender.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          title: "Source",
          href: "https://github.com/mugilankani/Q-Space",
          icon: <Icons.github className="size-3" />,
        },
        {
          title: "Best Project",
          icon: <Icons.linkedin className="size-3" />,
          href: "https://www.linkedin.com/feed/update/urn:li:activity:7236343410662498304/",
        },
        {
          title: "Organization",
          icon: <Icons.linkedin className="size-3" />,
          href: "https://www.linkedin.com/company/tinkerhub/?originalSubdomain=in",
        },
      ],
    },
    {
      title: "Langchain",
      dates: "June 22th, 2024",
      location: "Kochi, Kerala",
      description:
        "I developed Q-space, a product for exam-preparing students to upload their materials. The AI generates questions based on difficulty, provides suggestions and reviews for incorrect answers, and includes a chatbot for students to ask their doubts.",
      image: "/TinkerSpace.jpeg",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Website",
          href: "https://qspace-fvi1.onrender.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          title: "Source",
          href: "https://github.com/mugilankani/Q-Space",
          icon: <Icons.github className="size-3" />,
        },
        {
          title: "Best Project",
          icon: <Icons.linkedin className="size-3" />,
          href: "https://www.linkedin.com/feed/update/urn:li:activity:7215753143605764096/",
        },
        {
          title: "Organization",
          icon: <Icons.linkedin className="size-3" />,
          href: "https://www.linkedin.com/company/tinkerhub/?originalSubdomain=in",
        },
      ],
    },

    {
      title: "Vue.js",
      dates: "May 3rd, 2024",
      location: "Online Hackathon",
      description:
        "My friend and I built a comprehensive chat interface for Ollama, integrating support for all models. This interface enhances user interactions and ensures seamless communication across various platforms and applications.",
      image: "/TinkerSpace.jpeg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="size-3" />,
          href: "https://github.com/Anam-Ashraf7/Strix",
        },
        {
          title: "Best Project",
          icon: <Icons.globe className="size-3" />,
          href: "https://drive.google.com/file/d/1bA08eHI4kn6e6ZEbhOf1e_YtdCoboyxu/view?usp=sharing",
        },
        {
          title: "Organization",
          icon: <Icons.linkedin className="size-3" />,
          href: "https://www.linkedin.com/company/tinkerhub/?originalSubdomain=in",
        },
      ],
    },

    {
      title: "Cryptera",
      dates: "Jan 1 - 2nd, 2024",
      location: "CIT, Coimbatore",
      description:
        "In this coding hackathon, we worked on challenging problems from HackerRank, gaining valuable experience and identifying areas for improvement. The event featured engaging coding competitions and provided a rewarding learning experience, combining both fun and technical growth.",
      image: "/CIT.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.globe className="size-3" />,
          href: "https://www.instagram.com/cryptera_2k24/",
        },
      ],
    },
  ],
} as const;
