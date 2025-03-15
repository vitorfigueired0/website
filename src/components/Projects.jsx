import React, { forwardRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { FaGithub } from 'react-icons/fa6';
import { HiArrowRight } from 'react-icons/hi';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProjectCard = ({ title, description, image, githubUrl, demoUrl }) => (
  <div className="bg-pallete-1 rounded-2xl overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-[1.02] border border-pallete-2/10">
    <div className="relative h-[300px] overflow-hidden bg-pallete-2/5">
      {image ? (
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-pallete-3 text-xl">Project Image</span>
        </div>
      )}
    </div>
    <div className="p-8">
      <h3 className="text-3xl font-bold text-pallete-4 mb-4">{title}</h3>
      <p className="text-pallete-3 text-lg mb-8 leading-relaxed">{description}</p>
      <div className="flex gap-4">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 rounded-lg bg-pallete-2/10 text-pallete-4 hover:bg-pallete-2/20 transition-all duration-300 text-lg"
        >
          <FaGithub size={24} />
          <span>GitHub</span>
        </a>
        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-pallete-2 text-pallete-4 hover:bg-pallete-3 transition-all duration-300 text-lg"
          >
            <span>Live Demo</span>
            <HiArrowRight size={24} />
          </a>
        )}
      </div>
    </div>
  </div>
);

const ComingSoon = () => (
  <div className="bg-pallete-1 rounded-2xl overflow-hidden border border-pallete-2/10 p-12 text-center">
    <h3 className="text-4xl font-bold text-pallete-4 mb-6">Coming Soon</h3>
    <p className="text-pallete-3 text-xl leading-relaxed max-w-2xl mx-auto">
      Exciting projects are in the works! Check back soon to see what I'm building.
    </p>
    <div className="mt-8 w-24 h-1 bg-gradient-to-r from-pallete-2 to-pallete-3 mx-auto rounded-full" />
  </div>
);

export const Projects = forwardRef((props, ref) => {
  // Placeholder projects - replace with your actual projects
  const projects = [
    // {
    //   title: "Project One",
    //   description: "A modern web application built with React and Node.js. Features include user authentication, real-time updates, and responsive design.",
    //   githubUrl: "#",
    //   demoUrl: "#"
    // },
    // {
    //   title: "Project Two",
    //   description: "Full-stack e-commerce platform with secure payment integration, product management, and order tracking system.",
    //   githubUrl: "#",
    //   demoUrl: "#"
    // },
    // {
    //   title: "Project Three",
    //   description: "API service built with Node.js and Express, featuring JWT authentication, rate limiting, and comprehensive documentation.",
    //   githubUrl: "#"
    // },
    // {
    //   title: "Project Four",
    //   description: "Mobile-first web application with offline capabilities, push notifications, and seamless data synchronization.",
    //   githubUrl: "#",
    //   demoUrl: "#"
    // }
  ];

  return (
    <section ref={ref} className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-pallete-4 mb-6">Projects</h2>
        <p className="text-pallete-3 text-xl max-w-3xl mx-auto">
          Explore my latest projects and see how I bring ideas to life through clean code and modern design.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        {projects.length > 0 ? (
          <Swiper
            slidesPerView={1}
            navigation={true}
            pagination={{
              clickable: true,
              dynamicBullets: true
            }}
            modules={[Navigation, Pagination]}
            className="!pb-16"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <ProjectCard {...project} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <ComingSoon />
        )}
      </div>

      {/* Custom Navigation Styles */}
      <style jsx>{`
        :global(.swiper-pagination-bullet) {
          background-color: #1E293B;
          opacity: 1;
          width: 8px;
          height: 8px;
          transition: all 0.3s ease;
        }
        :global(.swiper-pagination-bullet-active) {
          background-color: var(--pallete-2);
          width: 24px;
          border-radius: 4px;
        }
        :global(.swiper-button-prev),
        :global(.swiper-button-next) {
          color: var(--pallete-2);
          transform: scale(0.7);
        }
        :global(.swiper-button-prev:hover),
        :global(.swiper-button-next:hover) {
          color: var(--pallete-3);
        }
        :global(.swiper-button-disabled) {
          opacity: 0.35;
        }
        :global(.swiper-pagination) {
          bottom: 0 !important;
        }
      `}</style>
    </section>
  );
});