import { FaGithub, FaLinux, FaDatabase, FaCogs, FaReact, FaCode, FaDocker, FaJava, FaPython, FaTools } from "react-icons/fa";
import { SiNestjs, SiSpringboot, SiKubernetes, SiPostman, SiJira, SiFigma, SiNodedotjs } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import React, { forwardRef, useState } from 'react';

const SkillBlock = ({ Icon, title, description, category }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-pallete-2 to-pallete-1 p-1 transition-all duration-300 hover:scale-[1.02]">
      <div className="relative h-full rounded-xl bg-pallete-1 p-6 transition-all duration-300 group-hover:bg-opacity-90">

        <div className="mb-6">
          <Icon size={28} className="text-pallete-4 transition-all duration-300 group-hover:scale-110" />
        </div>
        
        <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-wider text-pallete-3">
          {category}
        </span>

        <h3 className="mb-4 text-xl font-bold text-pallete-4 transition-colors duration-300">
          {title}
        </h3>

        <p className="text-sm leading-relaxed text-pallete-3 transition-colors duration-300">
          {description}
        </p>

        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-pallete-2 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
      </div>
    </div>
  );
};

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="mb-8 flex flex-wrap items-center justify-center gap-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`rounded-full px-6 py-2 text-sm font-medium transition-all duration-300
            ${activeCategory === category 
              ? 'bg-pallete-2 text-pallete-4' 
              : 'bg-pallete-1 text-pallete-3 hover:bg-pallete-2/50'}`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export const Skills = forwardRef((props, ref) => {
  const categories = ['All', 'Frontend', 'Backend', 'DevOps', 'Tools'];
  const [activeCategory, setActiveCategory] = useState('All');

  const generalBlocks = [
    {
      Icon: FaCode,
      title: 'Back End Development',
      category: 'Backend',
      description: 'Specialized in developing REST APIs using Java, Python, and Node.js, with strong expertise in frameworks like Spring and NestJS. Focused on building robust, scalable solutions.'
    },
    {
      Icon: FaReact,
      title: 'Front End Development',
      category: 'Frontend',
      description: 'Proficient in React, leveraging component-based architecture to create dynamic, responsive interfaces. Focused on delivering seamless user experiences.'
    },
    {
      Icon: FaGithub,
      title: 'Version Control',
      category: 'Tools',
      description: 'Experienced in Git and GitHub, following best practices like GitFlow for managing branches and ensuring efficient development workflow.'
    },
    {
      Icon: FaCogs,
      title: 'DevOps & Cloud',
      category: 'DevOps',
      description: 'Proficient in cloud environments (AWS, GCP, Firebase) and CI/CD pipelines. Skilled in Docker for containerization and deployment automation.'
    },
    {
      Icon: FaLinux,
      title: 'System Administration',
      category: 'OS',
      description: 'Experienced in Linux systems, leveraging tools and CLI for server management and automation. Skilled in shell scripting for process optimization.'
    },
    {
      Icon: FaDatabase,
      title: 'Database Management',
      category: 'Backend',
      description: 'Experienced in both SQL (PostgreSQL, MySQL) and NoSQL (MongoDB, Firestore) databases. Proficient in designing and optimizing data storage solutions.'
    }
  ];

  const categorySpecificBlocks = {
    Backend: [
      {
        Icon: SiNodedotjs,
        title: 'Node.js',
        category: 'Backend',
        description: 'Building scalable server-side applications with Node.js, Express, and modern JavaScript features. Experienced in RESTful APIs and real-time applications.'
      },
      {
        Icon: FaJava,
        title: 'Java',
        category: 'Backend',
        description: 'Developing enterprise-level applications using Java, with expertise in core Java concepts, multithreading, and memory management.'
      },
      {
        Icon: FaPython,
        title: 'Python',
        category: 'Backend',
        description: 'Creating efficient backend solutions with Python, utilizing frameworks like FastAPI and Django for rapid development and high performance.'
      },
      {
        Icon: SiSpringboot,
        title: 'Spring Boot',
        category: 'Backend',
        description: 'Implementing microservices architecture using Spring Boot, with focus on dependency injection, security, and database integration.'
      },
      {
        Icon: SiNestjs,
        title: 'NestJS',
        category: 'Backend',
        description: 'Building structured and scalable Node.js applications with NestJS, leveraging TypeScript and modern architectural patterns.'
      }
    ],
    Frontend: [
      {
        Icon: FaReact,
        title: 'React Ecosystem',
        category: 'Frontend',
        description: 'Deep expertise in React and its ecosystem, including Redux, React Query, Next.js, and modern React patterns like hooks and context.'
      }
    ],
    DevOps: [
      {
        Icon: FaLinux,
        title: 'Linux Administration',
        category: 'DevOps',
        description: 'Advanced Linux system administration, shell scripting, and automation for efficient server management and deployment.'
      },
      {
        Icon: FaCogs,
        title: 'CI/CD Pipelines',
        category: 'DevOps',
        description: 'Implementing and maintaining continuous integration and deployment pipelines using GitHub Actions, Jenkins, and GitLab CI.'
      },
      {
        Icon: FaDocker,
        title: 'Docker',
        category: 'DevOps',
        description: 'Containerizing applications and managing multi-container environments with Docker and Docker Compose.'
      },
      {
        Icon: SiKubernetes,
        title: 'Kubernetes',
        category: 'DevOps',
        description: 'Orchestrating containerized applications with Kubernetes, managing clusters, and implementing scalable deployments.'
      }
    ],
    Tools: [
      {
        Icon: SiPostman,
        title: 'Postman',
        category: 'Tools',
        description: 'API development and testing with Postman, including automated testing, documentation, and team collaboration.'
      },
      {
        Icon: TbBrandVscode,
        title: 'VS Code',
        category: 'Tools',
        description: 'Maximizing productivity with VS Code, utilizing extensions and custom configurations for efficient development.'
      },
      {
        Icon: SiJira,
        title: 'Jira',
        category: 'Tools',
        description: 'Project management and issue tracking with Jira, following Agile methodologies and sprint planning.'
      },
      {
        Icon: SiFigma,
        title: 'Figma',
        category: 'Tools',
        description: 'Collaborating with designers using Figma for UI/UX design implementation and frontend development.'
      }
    ]
  };

  const getDisplayedBlocks = () => {
    if (activeCategory === 'All') {
      return generalBlocks;
    }
    return categorySpecificBlocks[activeCategory] || [];
  };

  return (
    <section className="py-16 md:py-24" ref={ref}>
      {/* Section Header */}
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-4xl font-bold tracking-tight text-pallete-4">
          Professional Skill Set
        </h2>
        <p className="mx-auto max-w-2xl text-pallete-3">
          A comprehensive overview of my technical expertise and professional capabilities
        </p>
      </div>

      {/* Category Filter */}
      <CategoryFilter 
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* Skills Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {getDisplayedBlocks().map((block, index) => (
          <SkillBlock
            key={index}
            Icon={block.Icon}
            title={block.title}
            description={block.description}
            category={block.category}
          />
        ))}
      </div>
    </section>
  );
});