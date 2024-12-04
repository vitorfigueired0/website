import { FaGithub, FaLinux, FaDatabase, FaCogs, FaReact, FaCode } from "react-icons/fa";


const SkillBlock = ({ Icon, title, description }) => {
  return (
    <div className='bg-pallete-4 bg-opacity-15 hover:bg-opacity-100 hover:text-black rounded-2xl h-56 px-8 py-5 flex flex-col border-b-4 border-pallete-4'>
      <h1 className='flex items-center gap-3 text-2xl font-black mb-2'> 
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
      description: 'test'
    },
    {
      Icon: FaReact,
      title: 'Front End',
      description: 'test'
    },
    {
      Icon: FaGithub,
      title: 'Git / Github',
      description: 'test'
    },
    {
      Icon: FaCogs,
      title: 'Devops',
      description: 'test'
    },
    {
      Icon: FaLinux,
      title: 'Linux',
      description: 'test'
    },
    {
      Icon: FaDatabase,
      title: 'Database',
      description: 'test'
    }
  ]

  return (
    <section className='h-90/100 mb-1'>
      <header className='text-3xl font-black'>
        <h1>Skill Set</h1>
      </header>
      <div className='grid grid-cols-1 mt-8 gap-3'>
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