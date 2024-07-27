// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile-pic (1).png";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
// import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import nodejs from "./assets/techstack/node js.webp";
// import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
// import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/signatureprofile.png";
import projectImage2 from "./assets/projects/Digital Clock.png";
import projectImage3 from "./assets/projects/ecommerce-website.webp";
import projectImage4 from "./assets/projects/Portfolio Profile.png";
// import projectImage5 from "./assets/projects/project5.jpg";
// import projectImage6 from "./assets/projects/project6.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Saurav Suman",
  tagline: "I build things for web",
  img: profile,
  about: `I'm a passionate aspiring software developer with a strong focus on front-end development. I love creating interactive and responsive web applications.I am driven by a passion for technology and a desire to continuously learn and grow as a developer. I enjoy solving complex problems and collaborating with like-minded individuals to create impactful software solutions. My goal is to contribute to innovative projects that push the boundaries of technology and improve the lives of users.`,

};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/saurav-suman1823",
  github: "https://github.com/saurav1842/",
  twitter: "https://x.com/SauravSuman2318",
  instagram: "https://www.instagram.com/saurav__1842?igsh=MTltZTRkbnd0ZjQxbw==/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Front-End Developer",
    Company: `Webstack Academy`,
    Location: "Remote",
    Type: "Internship",
    Duration: "Jul 2024 - Present",
  },
  {
    Position: "TalentNext Training on Java Full Stack",
    Company: `Wipro`,
    Location: "Remote",
    Type: "Apprenticeship", 
    Duration: "Jul 2024 - Present",
  },
  // {
  //   Position: "Internship",
  //   Company: `Company Name here`,
  //   Location: "Bengaluru",
  //   Type: "Internship",
  //   Duration: "Sep 2021 - Dec 2021",
  // },
];

// Enter your Education Details here
export const eduDetails = [
  // {
  //   Position: "Frontend Development",
  //   Company: "Udemy, YouTube, Google, Medium",
  //   Location: "Online",
  //   Type: "Full Time",
  //   Duration: "Jan 2022 - Present",
  // },
  {
    Position: "B.Tech in Electronics and Communication Engineering",
    Company: `Haldia Institute of Technology`,
    Location: "Haldia, West Bengal",
    Type: "Full Time",
    Duration: "Oct 2021 - Jun 2025",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  nodejs: nodejs,
  // redux: redux,
  // sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  // postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "E-commerce Website",
    image: projectImage3,
    description: `Developed the front end of a fully functional eCommerce website using HTML, CSS, and JavaScript, focusing
on user experience, responsiveness, and interactivity.`,
    techstack: "HTML, CSS, JavaScript",
    previewLink: "https://redstore-style.netlify.app/",
    githubLink: "https://github.com/saurav1842/E-commerce-Website",
  },
  {
    title: "Portfolio",
    image: projectImage4,
    description: `Developed a dynamic and responsive portfolio website to showcase my software development skills, projects, and professional experience.`,
    techstack: "HTML, CSS, JavaScript, React, Tailwind CSS",
    previewLink: "https://portfolio-saurav-suman.netlify.app/",
    githubLink: "https://github.com/saurav1842/Portfolio",
  },
  {
    title: "Time Master Pro",
    image: projectImage2,
    description: `Time Master Pro is a versatile and user-friendly time management application designed to help users efficiently allocate their time for various activities.`,
    techstack: "HTML, CSS, JavaScript",
    previewLink: "https://timemasterproapp.netlify.app/",
    githubLink: "https://github.com/saurav1842/TimeMaster-Pro",
  },
  {
    title: "E-Sign Hub",
    image: projectImage1,
    description: `Developed an interactive signature app allowing users to draw their signatures directly on the web page using
HTML5 Canvas and JavaScript.`,
    techstack: "HTML, CSS, JavaScript",
    previewLink: "https://signature-sign-app.netlify.app/",
    githubLink: "https://github.com/saurav1842/Signature-App",
  },
  
  
  
//   {
//     title: "Project title 5",
//     image: projectImage5,
//     description: `This is sample project description random things are here in description This is sample
// project lorem ipsum generator for dummy content`,
//     techstack: "HTML/CSS, JavaScript",
//     previewLink: "https://google.com",
//     githubLink: "https://github.com",
//   },
//   {
//     title: "Project title 6",
//     image: projectImage6,
//     description: `This is sample project description random things are here in description This is sample
// project lorem ipsum generator for dummy content`,
//     techstack: "HTML/CSS, JavaScript",
//     previewLink: "https://google.com",
//     githubLink: "https://github.com",
//   },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "sumansaurav1687@gmail.com",
  // phone: "+91 12345 67890",
};
