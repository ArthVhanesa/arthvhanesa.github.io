import GtuInfo from "../public/assets/images/projects/gtu-info.png";
import BookOceanApp from "../public/assets/images/projects/bookocean-app.png";
import BookOceanWebApp from "../public/assets/images/projects/bookocean-webapp.png";
import Bhoomi from "../public/assets/images/projects/bhoomi.png";

export const projectList = [
  {
    id: 1,
    title: "GTU Info",
    des: "GTU Info is providing a bridge between Students and GTU University and is currently used by more than 1000+ students with 5⭐ ratings on the Play store. It is the one-stop for all GTU students and has a very beautiful user interface for giving a smooth experience developed using Flutter.",
    tech: ["Flutter", "NodeJs", "MongoDB", "ExpressJs"],
    url: "https://play.google.com/store/apps/details?id=com.astronapps.gtuApp",
    image: GtuInfo,
  },
  {
    id: 2,
    title: "BookOcean - App",
    des: "BookOcean App | India's largest free ebook library with over 4.6M+ books, loved by more than 7000+ readers with a 4.5⭐ rating on Play Store.",
    tech: ["React Native", "NodeJs", "ExpressJs", "MongoDB"],
    url: "https://play.google.com/store/apps/details?id=com.bookocean",
    image: BookOceanApp,
  },
  {
    id: 3,
    title: "BookOcean - WebApp",
    des: "Taskeasy is a workflow Automation Tool for large and small teams that can connect apps and automate workflows, just like Zapier. It offers a simple setup and allows users to automate processes without a developer.",
    tech: ["ReactJs", "NodeJs", "ExpressJs", "MongoDB"],
    url: "https://bookocean.netlify.app",
    image: BookOceanWebApp,
  },
  {
    id: 4,
    title: "Bhoomi",
    des: "Developed a solution in response to a problem	statement given by the Revenue Department of India. Successfully created a comprehensive solution Bhoomi that streamlined land registry processes and improved accessibility through the SSI (Self-Sovereign Identity) model using Blockchain.",
    tech: ["ReactJs", "Tailwind"],
    url: "https://bhoomi.site/",
    image: Bhoomi,
  },
];
