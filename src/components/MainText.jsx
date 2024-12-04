import { FaArrowRightLong } from "react-icons/fa6";

export const MainText = () => { 

  return(
    <section className='mt-56 md:mt-44 lg:mt-52 h-90/100'>
      <p className='text-5xl md:text-6xl lg:text-7xl lg:w-1/2 font-black mb-16 md:mb-24'>
        Hi, I am Vitor Figueiredo, a web developer 
      </p>
      <button className='bg-pallete-3 hover:bg-opacity-55 flex items-center gap-4 px-6 md:px-20 py-2 rounded-xl bg-opacity-25 md:text-2xl'>
        Get me a tour
        <FaArrowRightLong />
      </button> 
    </section>
  )

}