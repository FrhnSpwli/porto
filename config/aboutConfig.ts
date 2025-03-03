export interface AboutContent {
  title: string;
  imageSrc: string;
  imageAlt: string;
  paragraphs: string[];
}

export const aboutConfig: AboutContent = {
  title: "About Me",
  imageSrc: "/aboutSection/about.svg",
  imageAlt: "About Me Illustration",
  paragraphs: [
    `I'm Andi Farhan Sappewali, a Frontend Developer with a strong foundation in PHP, JavaScript, and cloud computing. With two years of experience, I specialize in building scalable web applications, integrating APIs, and crafting seamless user experiences.`,

    `Beyond development, I have experience in project management, UI design, and cloud deployment using Google Cloud Platform (GCP). My work spans various roles, from leading student tech communities to developing solutions for startups and academic projects.`,

    `Passionate about continuous learning and innovation, I thrive in collaborative environments where I can contribute to impactful digital solutions. Let's build something great together!`,
  ],
};
