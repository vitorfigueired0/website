import { FaGithub, FaLinux, FaDatabase, FaCogs, FaReact, FaCode } from "react-icons/fa";


const SkillBlock = ({ Icon, title, description }) => {
  return (
    <div className='bg-pallete-4 bg-opacity-15 hover:bg-opacity-100 hover:text-black rounded-2xl h-62 md:h-72 px-8 py-5 flex flex-col border-b-4 border-pallete-4'>
      <h1 className='flex items-center gap-3 text-2xl font-black mb-4'> 
        <Icon size={30}/>
        {title}
      </h1>
      <p>{description}</p>
    </div>
  )
}

export const Skills = () => {

  const blocks = [
    {
      Icon: FaCode,
      title: 'Back End',
      description: 'Specialized in developing REST APIs using Java, Python, and Node.js, with strong expertise in frameworks like Spring and NestJS. Focused on building robust, scalable, and high-performance solutions to meet diverse business needs.'
    },
    {
      Icon: FaReact,
      title: 'Front End',
      description: 'Proficient in React, leveraging its component-based architecture to create dynamic, responsive, and user-friendly web interfaces. Focused on delivering seamless user experiences with modern design principles and optimized performance.'
    },
    {
      Icon: FaGithub,
      title: 'Git / Github',
      description: 'Experienced in version control using Git and collaboration through GitHub, following best practices like GitFlow for managing branches and ensuring an organized, efficient development workflow.'
    },
    {
      Icon: FaCogs,
      title: 'Devops',
      description: 'Proficient in cloud environments (AWS, GCP, Firebase) and CI/CD pipelines, streamlining development and deployment processes. Skilled in Docker for containerization, ensuring consistent and scalable application delivery.'
    },
    {
      Icon: FaLinux,
      title: 'Linux',
      description: 'Experienced in Linux systems, leveraging its tools and command-line interface for server management, automation, and development workflows. Skilled in shell scripting to optimize processes and ensure system efficiency.'
    },
    {
      Icon: FaDatabase,
      title: 'Database',
      description: 'Experienced in relational databases like PostgreSQL, MySQL, and Oracle, as well as NoSQL solutions like MongoDB and Firestore. Proficient in designing, managing, and optimizing databases to ensure reliable and efficient data storage and retrieval.'
    }
  ]

  return (
    <section className='mb-1'>
      <header className='text-3xl font-black mt-24 '>
        <h1>Skill Set</h1>
      </header>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 lg:mt-16 gap-3 lg:px-28 '>
        {blocks.map((block) => (
          <SkillBlock
            Icon={block.Icon}
            title={block.title}
            description={block.description}
          />
        ))}
      </div>
    </section>
  )
}