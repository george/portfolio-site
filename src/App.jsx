
import Navbar from './containers/navbar/Navbar';
import Hero from './containers/hero/Hero';
import AboutMe from './containers/about/AboutMe';
import Projects from './containers/projects/Projects';

function App() {
    return (
      <div>
          <Navbar/>
          <Hero/>
          <AboutMe/>
          <Projects/>
      </div>
  );
}

export default App;
