import { FaGithub, FaLinkedin, FaRegEnvelope, FaTwitter } from "react-icons/fa";
import {
  EMAIL,
  GITHUB_USERNAME,
  LINKEDIN_USERNAME,
  TWITTER_USERNAME,
} from "../config";

export const featuredRepositories = [
  "gtu-app",
  "BookOcean-RN-App",
  "BookOcean-WebApp",
  "ExpressJs-api-template",
  "tmkoc-chrome-extension",
];

export const companies = [
  {
    id: 1,
    institution: "WeHear Innovations Private Limited",
    logo: "/assets/images/companies/wehear.png",
    degree: "Flutter Application Developer - Intern",
    startDate: "Nov 2022",
    endDate: "Dec 2022",
  },
  {
    id: 2,
    institution: "Red Reality",
    logo: "/assets/images/companies/redreality.png",
    degree: "Web Developer - Intern",
    startDate: "Jun 2021",
    endDate: "Aug 2021",
  },
];

export const institutions = [
  {
    id: 1,
    institution: "L. D. College of Engineering, Ahmedabad",
    logo: "/assets/images/institutions/uap.png",
    degree: "Bachelor of Engineering, Information Technology (IT)",
	percentage: "8.92 CPI",
    startDate: "2020",
    endDate: "2024",
  },
  {
    id: 2,
    institution: "Shree Swaminarayan Gurukul Vidhyalaya, Surat",
    logo: "/assets/images/institutions/busms.png",
    degree: "Higher Secondary Certificate, Science Stream",
	percentage: "84.76%",
    startDate: "2018",
    endDate: "2020",
  },
];

export const socialMedia = [
  {
    id: 1,
    label: "Github",
    icon: <FaGithub />,
    url: `https://github.com/${GITHUB_USERNAME}`,
  },
  {
    id: 2,
    label: "Linkedin",
    icon: <FaLinkedin />,
    url: `https://www.linkedin.com/in/${LINKEDIN_USERNAME}`,
  },
  {
    id: 3,
    label: "Twitter",
    icon: <FaTwitter />,
    url: `https://www.linkedin.com/in/${TWITTER_USERNAME}`,
  },
  {
    id: 4,
    label: "Mail to Arth",
    icon: <FaRegEnvelope />,
    url: `mailto:${EMAIL}`,
  },
];
