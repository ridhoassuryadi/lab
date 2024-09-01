import type {
  NavBarLink,
  SocialLink,
  Identity,
  AboutPageContent,
  ProjectPageContent,
  BlogPageContent,
  HomePageContent,
} from "./types/config";

export const identity: Identity = {
  name: "Noor Rizky Amalia",
  logo: "/logo.webp",
  avatarLogo: "/emoji-avatar.png",
  email: "tim@witzdam.com",
};

export const navBarLinks: NavBarLink[] = [
  {
    title: "Projects",
    url: "/projects",
  },
  {
    title: "Blog",
    url: "/blog",
  },
];

export const socialLinks: SocialLink[] = [
  {
    title: "Linkedin",
    url: "https://github.com/TimWitzdam",
    icon: "mdi:linkedin",
    external: true,
  },
  {
    title: "Mail",
    url: "mailto:noorizkya33@gmail.com",
    icon: "mdi:email",
  },
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "Tim Witzdam",
    description:
      "Full time student from Germany who loves building cool things using code.",
    image: identity.logo,
  },
  role: "UI / UX Enthusiast",
  description:
    `Hi, I am Kiki from South Kalimantan, Indonesia. I'm exploring UI/UX design after working in backend development and quality assurance. I am passionate about creating intuitive interfaces and engaging user experiences for innovative and effective solutions.`,
  socialLinks: socialLinks,
  links: [
    {
      title: "My Projects",
      url: "/projects",
    },
    {
      title: "About Me",
      url: "/about",
    },
  ],
};

// About (/about)
export const aboutPageContent: AboutPageContent = {
  seo: {
    title: "About | Kiky",
    description:
      "Full time student from Germany who loves building cool things using code.",
    image: identity.logo,
  },
  subtitle: "Some information about myself",
  about: {
    description: `
I'm Tim Witzdam, a full time student from Germany who also loves building cool things using code.
<br/><br/>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque placeat est architecto tempora voluptatem sit suscipit aspernatur? <br/><br/>
Facere quibusdam reiciendis, distinctio sunt praesentium error accusantium consectetur nemo vero officia itaque.`, // Markdown is supported
    image_l: {
      url: "/demo-1.jpg",
      alt: "Left Picture",
    },
    image_r: {
      url: "/demo-1.jpg",
      alt: "Right Picture",
    },
  },
  work: {
    description: `I've worked with a variety of technologies and tools to build cool things. Here are some of the projects I've worked on.`, // Markdown is supported
    items: [
      {
        title: "Quality Assurance",
        company: {
          name: "Neumedira",
          image: "/logo-neu.png",
          url: "https://neumedira.com",
        },
        date: "Jan 2024 - Present",
      },
      {
        title: "Quality Assurance",
        company: {
          name: "Lentera Digital",
          image: "/logo-lentera.png",
          url: "https://lenteradigital.id",
        },
        date: "July - Sept 2024",
      },
      {
        title: "Backend Engineer",
        company: {
          name: "Neumedira",
          image: "/logo-neu.png",
          url: "https://neumedira.com",
        },
        date: "Oct 2023 - Jan 2024",
      },
    ],
  },
  connect: {
    description: `I'm always interested in meeting new people and learning new things. Feel free to connect with me on any of the following platforms.`, // Markdown is supported
    links: socialLinks,
  },
};

// Projects (/projects)
export const projectsPageContent: ProjectPageContent = {
  seo: {
    title: "Projects | Kiki",
    description: "Check out what I've been working on.",
    image: identity.logo,
  },
  subtitle: "Check out what I've been working on.",
  projects: [
    {
      title: "Tabir Pelangi",
      description: "Our marketplace connects individuals, SMEs, and companies for seamless buying and selling.",
      image: "/project-1.png",
      year: "2024",
      url: "#",
    },
    {
      title: "EKasir",
      description: "The POS and Inventory app simplifies transactions, stock management, and sales reporting with secure and cloud-based features.",
      image: "/project-2.jpeg",
      year: "2024",
      url: "#",
    },
    {
      title: "Koperasi Admin",
      description: "The Cooperative App streamlines member management, financial transactions, and reporting with secure, cloud-based features for efficient cooperative operations.",
      image: "/project-3.jpeg",
      year: "2023",
      url: "#",
    },
  ],
};

// Blog (/blog)
export const blogPageContent: BlogPageContent = {
  seo: {
    title: "Blog | Tim Witzdam",
    description: "Thoughts, stories and ideas.",
    image: identity.logo,
  },
  subtitle: "Thoughts, stories and ideas.",
};
