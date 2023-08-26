
import Navbar from './containers/navbar/Navbar';
import Hero from './containers/hero/Hero';
import AboutMe from './containers/about/AboutMe';
import Portfolio from './containers/projects/Portfolio';

function App() {
    return (
      <div>
          <Navbar/>
          <Hero/>
          <AboutMe/>
          <Portfolio/>
      </div>
  );
}

export default App;
