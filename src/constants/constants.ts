import DiscordRoundedIcon from "@/assets/icons/DiscordRoundedIcon";
import FacebookRoundedIcon from "@/assets/icons/FacebookRoundedIcon";
import LinkedInRoundedIcon from "@/assets/icons/LinkedInRoundedIcon";
import type { SocialLink } from "@/types/types";
import AWSIcon from "@icons/stacks/AWSIcon";
import BootStrapIcon from "@icons/stacks/BootStrapIcon";
import CSSIcon from "@icons/stacks/CSSIcon";
import FirebaseIcon from "@icons/stacks/FirebaseIcon";
import GithubIcon from "@icons/stacks/GithubIcon";
import GitIcon from "@icons/stacks/GitIcon";
import HTMLIcon from "@icons/stacks/HTMLIcon";
import JavaScriptIcon from "@icons/stacks/JavaScriptIcon";
import LaravelIcon from "@icons/stacks/LaravelIcon";
import MailgunIcon from "@icons/stacks/MailgunIcon";
import MaterialUIIcon from "@icons/stacks/MaterialUIIcon";
import MySQLIcon from "@icons/stacks/MySQLIcon";
import NestJSIcon from "@icons/stacks/NestJSIcon";
import ReactIcon from "@icons/stacks/ReactIcon";
import SupabaseIcon from "@icons/stacks/SupabaseIcon";
import TailwindCSSIcon from "@icons/stacks/TailwindCSSIcon";
import TypeScriptIcon from "@icons/stacks/TypeScriptIcon";
import VercelIcon from "@icons/stacks/VercelIcon";
import ViteIcon from "@icons/stacks/ViteIcon";
import WordpressIcon from "@icons/stacks/WordpressIcon";
import Portfolio from "@images/Portfolio.png";

// Nav
 export const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experiences", href: "#experiences" },
    { name: "Projects", href: "#projects" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

// Tech Stacks Data
export const TECH_STACKS = [
  {
    name: "AWS",
    Icon: AWSIcon,
  },
  {
    name: "BootStrap",
    Icon: BootStrapIcon,
  },
  {
    name: "CSS",
    Icon: CSSIcon,
  },
  {
    name: "Firebase",
    Icon: FirebaseIcon,
  },
  {
    name: "Github",
    Icon: GithubIcon,
  },
  {
    name: "Git",
    Icon: GitIcon,
  },
  {
    name: "HTML",
    Icon: HTMLIcon,
  },
  {
    name: "JavaScript",
    Icon: JavaScriptIcon,
  },
  {
    name: "Laravel",
    Icon: LaravelIcon,
  },
  {
    name: "Mailgun",
    Icon: MailgunIcon,
  },
  {
    name: "Material UI",
    Icon: MaterialUIIcon,
  },
  {
    name: "MySQL",
    Icon: MySQLIcon,
  },
  {
    name: "NestJS",
    Icon: NestJSIcon,
  },
  {
    name: "React",
    Icon: ReactIcon,
  },
  {
    name: "Supabase",
    Icon: SupabaseIcon,
  },
  {
    name: "TailwindCSS",
    Icon: TailwindCSSIcon,
  },
  {
    name: "TypeScript",
    Icon: TypeScriptIcon,
  },
  {
    name: "Vercel",
    Icon: VercelIcon,
  },
  {
    name: "Vite",
    Icon: ViteIcon,
  },
  {
    name: "Wordpress",
    Icon: WordpressIcon,
  },
];

export const workExperience = [
  {
    title: "Junior Full Stack Engineer",
    company: "JLabs",
    date: "Nov 2024 - Apr 2025",
    description: "Working with React and NestJS to develop web applications.",
  },
  {
    title: "Junior Fullstack Web Developer",
    company: "CreativeDevLabs",
    date: "Nov 2022 - Jan 2023",
    description: "Assisted in building ticketing platforms and APIs.",
  },
  {
    title: "Intern - Fullstack Web Developer",
    company: "MLG College of Learning, Inc.",
    date: "July 2022 - Sept 2022",
    description:
      "Developed seamless website frontend and backend for managing student records.",
  },
];

export const education = [
  {
    degree: "Bachelor of Science in Information Technology",
    school: "MLG College of Learning, Inc.",
    date: "2019 - 2023",
    description: "Graduated with Latin Honors, focused on web development.",
  },
  {
    degree: "High School Diploma",
    school: "Hilongos National Vocational School",
    date: "2016 - 2019",
    description:
      "Completed secondary education with a focus on science and technology.",
  },
];

export const projects = [
  {
    page: "Landing Page",
    title: "Personal Portfolio",
    description:
      "A personal portfolio showcasing my skills, experience, and projects in web development and design.",
    image: Portfolio,
  },
  {
    page: "Landing Page",
    title: "Personal Portfolio",
    description:
      "A personal portfolio showcasing my skills, experience, and projects in web development and design.",
    image: Portfolio,
  },
  {
    page: "Landing Page",
    title: "Personal Portfolio",
    description:
      "A personal portfolio showcasing my skills, experience, and projects in web development and design.",
    image: Portfolio,
  },
];

export const testimonials = [
  {
    name: "John Doe",
    role: "CEO, TechCorp",
    message:
      "I was impressed by the quality of work and the professionalism of the team. They delivered the project on time and within budget. I was impressed by the quality of work and the professionalism of the team. They delivered the project on time and within budget. I was impressed by the quality of work and the professionalism of the team. They delivered the project on time and within budget. I was impressed by the quality of work and the professionalism of the team. They delivered the project on time and within budget. I was impressed by the quality of work and the professionalism of the team. They delivered the project on",
    rating: 5,
    date: "January 24, 2025",
  },
  {
    name: "Jane Smith",
    role: "Marketing Manager, CreativeSolutions",
    message:
      "WI was impressed by the quality of work and the professionalism of the team. They delivered the project on time and within budget. I was impressed by the quality of work and the professionalism of the team. They delivered the project on time and within budget. I was impressed by the quality of work and the professionalism of the team. They delivered the project on time and within budget. I was impressed by the quality of work and the professionalism of the team. They delivered the project on time and within budget. I was impressed by the quality of work and the professionalism of the team. They delivered the project onign.",
    rating: 5,
    date: "January 24, 2025",
  },
  {
    name: "Mike Johnson",
    role: "Founder, StartupHub",
    message:
      "I was impressed by the quality of work and the professionalism of the team. They delivered the project on time and within budget. I was impressed by the quality of work and the professionalism of the team. They delivered the project on time and within budget. I was impressed by the quality of work and the professionalism of the team. They delivered the project on time and within budget. I was impressed by the quality of work and the professionalism of the team. They delivered the project on time and within budget. I was impressed by the quality of work and the professionalism of the team. They delivered the project on!",
    rating: 5,
    date: "January 24, 2025",
  },
  {
    name: "Sarah Chen",
    role: "Product Owner, InnovateLLC",
    message:
      "The dedication and communication from the team were exceptional. They turned our complex requirements into a seamless, high-performance product.",
    rating: 4,
    date: "February 10, 2025",
  },
  {
    name: "David Lee",
    role: "VP of Operations, GlobalFreight",
    message:
      "Efren streamlined our entire logistics dashboard, resulting in a 30% increase in efficiency. A genuinely transformative partnership.",
    rating: 5,
    date: "March 5, 2025",
  },
];

export const socialMediaLinks: SocialLink[] = [
  { icon: GithubIcon, href: "https://github.com/e-gors", name: "GitHub" },
  { icon: LinkedInRoundedIcon, href: "https://www.linkedin.com/in/efren-goron-8b3ab4200/", name: "LinkedIn" },
  { icon: FacebookRoundedIcon, href: "https://www.facebook.com/efrentorrente.soritagoron", name: "Facebook" },
  { icon: DiscordRoundedIcon, href: "https://discord.com/users/1449034762374086826", name: "Discord" },
];
