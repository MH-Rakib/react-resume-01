import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import DeveloperModeIcon from "@material-ui/icons/DeveloperMode";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import ColorLensIcon from "@material-ui/icons/ColorLens";
import upwork from "./clients/1.png";
import fiverr from "./clients/2.png";
import immade from "./clients/3.png";
import freelancer from "./clients/4.png";
import taylor from "./testimonial/1.jpg";
import jonpoint from "./testimonial/2.jpeg";
import florian from "./testimonial/3.jpg";

const data = {
  socials: {
    facebook: {
      url: `https://www.facebook.com/profile.php?id=100012990406356`,
      icon: <FacebookIcon />,
    },
    linkedin: {
      url: `https://www.facebook.com/profile.php?id=100012990406356`,
      icon: <LinkedInIcon />,
    },
    twitter: {
      url: `https://www.facebook.com/profile.php?id=100012990406356`,
      icon: <TwitterIcon />,
    },
    instagram: {
      url: `https://www.facebook.com/profile.php?id=100012990406356`,
      icon: <InstagramIcon />,
    },
  },
  about: `Quick six blind smart out burst. Perfectly on furniture dejection determine my depending an to. Add short water court fat. Her bachelor honoured perceive securing but desirous ham required. Questions deficient acuteness to engrossed as. Entirely led ten humoured greatest and yourself. Besides ye country on observe. She continue appetite endeavor she judgment interest the met. For she surrounded motionless fat resolution may.`,
  services: {
    developement: {
      icon: <DeveloperModeIcon />,
      title: "Developement",
      content: "Quick six blind smart out burst. Perfectly on .",
    },
    videoEdit: {
      icon: <OndemandVideoIcon />,
      title: "Video Editing",
      content:
        "Quick six blind smart. Perfectly on furniture determine my depending an to.",
    },
    emailDesign: {
      icon: <MailOutlineIcon />,
      title: "Email Design",
      content:
        "Quick six blind smart out burst. Perfectly on furniture  an to.",
    },
    graphicDesign: {
      icon: <ColorLensIcon />,
      title: "Graphic Design",
      content:
        "Quick six blind smart out burst. Perfectly on furniture dejection  my depending an to.",
    },
  },
  skills1: {
    html: "90",
    css: "90",
    vanillaJs: "85",
  },
  skills2: {
    react: "80",
    node: "70",
    django: "65",
  },
  education: [
    {
      title: "BSC in CSE",
      year: "2016-2021",
      content: "BRAC University",
    },
    {
      title: "Higher Secondary Certificate",
      year: "2013-2015",
      content: "Govt. Science College",
    },
    {
      title: "Secondary School Certificate",
      year: "2011-2013",
      content: "Shere Bangla Nagar Govt Boys High School",
    },
  ],
  experience: [
    {
      title: "FullStack(MERN)",
      year: "2020-Present",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, a!",
    },
    {
      title: "WordPress",
      year: "2019-Present",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, a!",
    },
    {
      title: "Web Design",
      year: "2018-2020",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, a!",
    },
  ],
  clients: [upwork, fiverr, immade, freelancer],
  testimonials: [
    {
      image: taylor,
      name: "Joseph Taylor",
      designation: "AIMS Australia",
      comment:
        "Great communication and wonderful quality. Would highly recommend this seller. Keep up the good work!",
    },
    {
      image: jonpoint,
      name: "Johnpoint",
      designation: "Shuttle Lane",
      comment:
        "Mahedi was simply great! He completed my project on time, way above and beyond my expectations.",
    },
    {
      image: florian,
      name: "Florian Sergent",
      designation: "MNSEL Inc.",
      comment:
        "Very responsible and hard working. Responsive, very kind and friendly. Great communication.",
    },
  ],
  portfolioCategories: [
    {
      name: `Projects`,
      value: `project`,
    },
    {
      name: `Certificates`,
      value: `certificate`,
    },
    {
      name: `React`,
      value: `react`,
    },
    {
      name: `Web Design`,
      value: `web`,
    },
    {
      name: `Email Template`,
      value: `template`,
    },
    {
      name: `Email Signatures`,
      value: `signature`,
    },
  ],
};

export default data;
