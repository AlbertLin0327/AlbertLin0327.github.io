interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
}

const projects: Project[] = [
  {
    title: "Backtesting System",
    description: "This is a Quantitative Evaluation Framework written in Python. Trader can test signal and trading strategy with this program.",
    technologies: ["Python"],
    githubUrl: "https://github.com/AlbertLin0327/QEF-Backtesting-System",
  },
  {
    title: "Least Square Monte Carlo for Option",
    description: "This program is to stimulate the price of an American option with given market informations using Least Square Monte Carlo.",
    technologies: ["Python"],
    githubUrl: "https://github.com/AlbertLin0327/Least-Square-Monte-Carlo"
  },
  {
    title: "Black Scholes Option Pricing",
    description: "This program is to calculate price and greak letter for regular option by Black Scholes method.",
    technologies: ["Python"],
    githubUrl: "https://github.com/AlbertLin0327/Black-Scholes-Option"
  },
  {
    title: "NFT Lending Protocol",
    description: "This protocol is the final project of the course Decentralized Applications Design and Practice.",
    technologies: ["JavaScript", "Solidity"],
    githubUrl: "https://github.com/AlbertLin0327/NFT-Lending-Protocol"
  }
];

export function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link github"
              >
                View on GitHub
              </a>
              {project.demoUrl && (
                <a 
                  href={project.demoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link demo"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 