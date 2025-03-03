export interface Experience {
  id: number;
  companyLogo: string;
  companyName: string;
  role: string;
  duration: string;
  description: string;
}

export const experienceConfig: Experience[] = [
  {
    id: 1,
    companyLogo: "/experienceSection/bangkit.jpg",
    companyName: "Bangkit Academy by Google, Tokopedia, Gojek, & Traveloka",
    role: "Cloud Computing Cohort",
    duration: "Feb 2024 – Jul 2024",
    description: `Developed and deployed RESTful APIs for the Capstone Project, ensuring seamless integration between backend and frontend. Deployed applications and machine learning models on Google Cloud Platform (GCP) to enhance scalability and reliability.`,
  },
  {
    id: 2,
    companyLogo: "/experienceSection/unhas.png",
    companyName: "Universitas Hasanuddin - Informatics Engineering Department",
    role: "Intern",
    duration: "Jan 2024 – Jun 2024",
    description: `Developed a Management Information System to streamline coordination among 500+ students, lecturers, and staff for final projects and internships. Improved department inventory tracking by optimizing resource management for over 200 equipment items.`,
  },
  {
    id: 3,
    companyLogo: "/experienceSection/tocelebes.jpeg",
    companyName: "To Celebes",
    role: "Chief Technology Officer",
    duration: "Sep 2023 – Present",
    description: `Designed and developed a website that connects travelers with tour guides and equipment rentals for outdoor activities. Ensured a seamless user experience through an intuitive interface and efficient booking system.`,
  },
  {
    id: 4,
    companyLogo: "/experienceSection/telkom.jpeg",
    companyName: "Digistar Club by Telkom Indonesia",
    role: "Mentee",
    duration: "Jul 2023 – Sep 2023",
    description: `Contributed to software development projects aimed at enhancing digital skills and employment opportunities. Collaborated in a team to design and implement key features improving platform usability.`,
  },
];
