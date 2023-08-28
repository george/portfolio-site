import * as React from 'react';

import { AboutMe } from './containers/about/AboutMe';
import { Contact } from './containers/contact/Contact';
import { Navbar } from './containers/navbar/Navbar';
import { Hero } from './containers/hero/Hero';
import { Projects } from './containers/projects/Projects';

export const App:React.FC = () => {
    return (
      <div>
          <Navbar/>
          <Hero/>
          <AboutMe/>
          <Projects/>
          <Contact/>
      </div>
  );
}