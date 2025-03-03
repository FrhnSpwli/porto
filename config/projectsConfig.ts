export interface Project {
  id: number;
  number: string;
  title: string;
  description: string;
  imageLight: string;
  imageDark: string;
  reverse?: boolean;
  link?: string;
}

export const projectsConfig: Project[] = [
  {
    id: 1,
    number: "01",
    title: "Management Information System - Universitas Hasanuddin",
    description: `Developed a web-based system to streamline coordination among 500+ students, lecturers, and staff for final projects and internships. Improved efficiency by 50% in managing project submissions and communications.`,
    imageLight: "/projectSection/project3.png",
    imageDark: "/projectSection/project3.png",
    reverse: false,
    link: "/",
  },
  {
    id: 2,
    number: "02",
    title: "To Celebes - Travel & Rental Platform",
    description: `Designed and developed a website that connects travelers with tour guides and rental services for outdoor activities like camping and mountain climbing. The platform provides an easy booking system for a seamless user experience.`,
    imageLight: "/projectSection/project1.png",
    imageDark: "/projectSection/project1.png",
    reverse: true,
    link: "/",
  },
  {
    id: 3,
    number: "03",
    title: "Cloud Computing Capstone Project - Bangkit Academy",
    description: `Implemented RESTful APIs and deployed machine learning models on Google Cloud Platform (GCP). Ensured seamless backend-frontend integration and optimized performance for scalable cloud-based applications.`,
    imageLight: "/projectSection/project2.png",
    imageDark: "/projectSection/project2.png",
    reverse: false,
    link: "/",
  },
];
