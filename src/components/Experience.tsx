import React from 'react';
import { FaGraduationCap, FaBriefcase, FaCode, FaCalculator, FaLanguage } from 'react-icons/fa';
import { 
  SiCplusplus,
  SiPython,
  SiPytorch,
  SiGit,
  SiJavascript,
  SiTypescript,
  SiSolidity
} from 'react-icons/si';
import { MdCode } from 'react-icons/md';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

interface Skill {
  name: string;
  level: string;
  advanced: boolean,
  description: string;
  icon: React.ReactElement;
}


const academicExperiences: ExperienceItem[] = [
  {
    title: "Master of Science in Computational Finance",
    company: "Carnegie Mellon University",
    location: "Pittsburgh, PA",
    period: "Incoming 2025 Fall",
    description: [
      "Actively seeking a Summer 2026 internship position."
    ]
  },
  {
    title: "B.S in Computer Science & B.B.A in Finance",
    company: "National Taiwan University",
    location: "Taipei, Taiwan",
    period: "2019 - 2024",
    description: [
      "Undergraduate Research Assistant for Prof. Hsuan-Tien Lin @ CLLab",
      "Academic Program: Creativity and Entrepreneurship Program"
    ]
  }
];

const professionalExperiences: ExperienceItem[] = [
  {
    title: "Quantitative Researcher",
    company: "Kronos Research @ Alpha Research Team",
    location: "Taipei, Taiwan",
    period: "Jul 2024 - present",
    description: [
      "Deep learning returns sequential prediction with Pytorch, JAX, and C++.",
      "Conduct high frequency and low latency signal research.",
    ]
  },
  {
    title: "Quantitative Researcher Intern",
    company: "Kronos Research @ Trading Team",
    location: "Taipei, Taiwan",
    period: "Oct 2023 - Feb 2024",
    description: [
      "Developed and optimized high-frequency trading strategy in C++ OOP.",
      "Oversaw one of the directional arbitrage high frequency trading strategy."
    ]
  },
  {
    title: "Research Intern",
    company: "WorldQuant",
    location: "Taipei, Taiwan",
    period: "Aug 2023 - Aug 2023",
    description: [
      "Researched and developed profitable, low-correlation alphas for the US equity market.",
      "Delivered the highest Sharpe ratio alpha among the interns class."
    ]
  },
  {
    title: "Quantitative Research Intern",
    company: "Jim Quant Capital",
    location: "Taipei, Taiwan",
    period: "Sept 2022 – Jan 2023",
    description: [
      "Researched unsupervised machine learning stock clustering for the Taiwan equity market.",
      "Developed mid-frequency convergence pair-trading strategies based on stock clustering."
    ]
  },
  {
    title: "Product Development Intern",
    company: "Synology @ Cloud Storage Gateway Team",
    location: "Taipei, Taiwan",
    period: "July 2022 – Aug 2022",
    description: [
      "Redesigned NAS cloud and local hybrid folders' metadata syncing mechanism.",
      "Achieved a 70% reduction in synchronization times with similar space complexity."
    ]
  }
];

const skills: Skill[] = [
  {
    name: "C/C++",
    level: "Advanced",
    advanced: true,
    description: "High-performance computing and system programming",
    icon: <SiCplusplus className="skill-icon" />
  },
  {
    name: "Python",
    level: "Advanced",
    advanced: true,
    description: "Data analysis, machine learning, and automation",
    icon: <SiPython className="skill-icon" />
  },
  {
    name: "PyTorch",
    level: "Advanced",
    advanced: true,
    description: "Deep learning and neural network development",
    icon: <SiPytorch className="skill-icon" />
  },
  {
    name: "JAX",
    level: "Advanced",
    advanced: true,
    description: "High-performance numerical computing and ML research",
    icon: <MdCode className="skill-icon" />
  },
  {
    name: "Mathematics",
    level: "Advanced",
    advanced: true,
    description: "Calculus, Probability, Statistics, Linear Algebra, and numerical methods",
    icon: <FaCalculator className="skill-icon" />
  },
  {
    name: "Git",
    level: "Advanced",
    advanced: true,
    description: "Version control and collaborative development",
    icon: <SiGit className="skill-icon" />
  },
  {
    name: "Bash",
    level: "Intermediate",
    advanced: false,
    description: "Shell scripting and system automation",
    icon: <MdCode className="skill-icon" />
  },
  {
    name: "JavaScript",
    level: "Intermediate",
    advanced: false,
    description: "Web development and frontend programming",
    icon: <SiJavascript className="skill-icon" />
  },
  {
    name: "TypeScript",
    level: "Intermediate",
    advanced: false,
    description: "Type-safe JavaScript development",
    icon: <SiTypescript className="skill-icon" />
  },
  {
    name: "Solidity",
    level: "Intermediate",
    advanced: false,
    description: "Smart contract development and blockchain programming",
    icon: <SiSolidity className="skill-icon" />
  },
  {
    name: "English",
    level: "Fluent",
    advanced: true,
    description: "Professional working proficiency",
    icon: <FaLanguage className="skill-icon" />
  },
  {
    name: "Chinese",
    level: "Native",
    advanced: true,
    description: "Native proficiency in Mandarin",
    icon: <FaLanguage className="skill-icon" />
  }
];

export function Experience() {
  return (
    <section className="experience-section">
      <h2>Experience</h2>

      <div className="experience-category">
        <h3>
          TL;DR
        </h3>
        <div className="tldr-content">
          <p>
          Quantitative researcher with experience in high-frequency trading, alpha research, and deep learning for returns forecasting.
          Incoming Master of Computational Finance student at Carnegie Mellon University, with a bachelor's degree in Computer Science and Finance from National Taiwan University.
          </p>
        </div>
      </div>

      <div className="experience-category">
        <h3>
          <FaBriefcase className="experience-icon" />
          Professional Experience
        </h3>
        <div className="experience-list">
          {professionalExperiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header">
                <h4>{exp.title}</h4>
                <span className="experience-period">{exp.period}</span>
              </div>
              <div className="experience-company">
                {exp.company} • {exp.location}
              </div>
              <ul className="experience-description">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="experience-category">
        <h3>
          <FaGraduationCap className="experience-icon" />
          Academic Experience
        </h3>
        <div className="experience-list">
          {academicExperiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header">
                <h4>{exp.title}</h4>
                <span className="experience-period">{exp.period}</span>
              </div>
              <div className="experience-company">
                {exp.company} • {exp.location}
              </div>
              <ul className="experience-description">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="experience-category">
        <h3>
          <FaCode className="experience-icon" />
          Skills
        </h3>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className={`skill-card ${skill.advanced ? 'skill-advanced' : 'skill-intermediate'}`}>
              <div className="skill-header">
                {skill.icon}
                <h4>{skill.name}</h4>
              </div>
              <span className={`skill-level ${skill.advanced ? 'skill-advanced' : 'skill-intermediate'}`}>{skill.level}</span>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}