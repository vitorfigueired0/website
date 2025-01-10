import React, { useEffect, useRef, useState } from 'react';

import { Header } from './components/Header'
import { MainText } from './components/MainText'
import { Skills } from './components/Skills'
import { Footer } from './components/Footer'
import { Projects } from './components/Projects'

function App() {

  const mainRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactsRef = useRef(null);

  const refs = [mainRef, skillsRef, projectsRef, contactsRef];

  return (
    <div className="p-5 pb-1 md:px-20 h-screen">
      <Header refs={refs} />
      <MainText ref={mainRef} />
      <div className="h-80"></div>
      <Skills ref={skillsRef} />
      <div className="h-80"></div>
      <Projects ref={projectsRef} />
      <div className="h-24"></div>
      <Footer ref={contactsRef} />
    </div>
  );
}

export default App
