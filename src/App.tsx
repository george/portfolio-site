import * as React from 'react';

import { AboutMe } from './containers/about/AboutMe';
import { Contact } from './containers/contact/Contact';
import { Navbar } from './containers/navbar/Navbar';
import { Hero } from './containers/hero/Hero';
import { Projects } from './containers/projects/Projects';

import { themeContext } from './context/ThemeContext';

export const App:React.FC = () => {
    const theme = React.useContext(themeContext);

    React.useEffect(() => {
        const root = document.querySelector('*')['style'];

        root.setProperty('--primary', theme.backgroundColor
            .replace('bg-', '')
            .replace('[', '')
            .replace(']', ''));

        root.setProperty('--secondary', theme.primaryColor);
    });

    return (
      <>
          <Navbar/>
          <Hero/>
          <AboutMe/>
          <Projects/>
          <Contact/>
      </>
  );
}