import React, { useEffect, useRef, useState } from 'react';

import { Header } from './components/Header'
import { MainText } from './components/MainText'
import { Skills } from './components/Skills'
import { Footer } from './components/Footer'
import { Projects } from './components/Projects'
import ErrorBoundary from './components/ErrorBoundary';
import ErrorMessage from './components/ErrorMessage';

function App() {
  const [error, setError] = useState(null);
  const mainRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactsRef = useRef(null);

  const refs = [mainRef, skillsRef, projectsRef, contactsRef];

  // Example of global error handling for unhandled promises
  useEffect(() => {
    const handleUnhandledRejection = (event) => {
      console.error('Unhandled promise rejection:', event.reason);
      setError('An unexpected error occurred. Please try again later.');
    };

    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-pallete-1 text-pallete-4">
        <div className="p-5 pb-1 md:px-20">
          {error && (
            <ErrorMessage
              error={error}
              className="mb-4"
              onRetry={() => setError(null)}
            />
          )}
          <Header refs={refs} />
          <MainText 
            ref={mainRef}
            projectsRef={projectsRef}
            contactRef={contactsRef}
          />
          <div className="h-80"></div>
          <Skills ref={skillsRef} />
          <div className="h-80"></div>
          <Projects ref={projectsRef} />
          <div className="h-24"></div>
          <Footer ref={contactsRef} />
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default App;
