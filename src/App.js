import { Suspense, lazy } from 'react'
import Navbar, {MobileNavbar} from './components/Navbar'
import Technologies from './components/Technologies'
import Header from './components/Header'
import Footer from './components/Footer'
import Services from './components/Services'
import Sidebar from './components/Sidebar'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'


function App() {
 
  return (
    <>
      <Navbar />
      <div className="app-wraper d-flex">
        <Suspense fallback={<h1>Loading...</h1>}>
          <Sidebar />
        </Suspense>
        <div className="app-content">
          <Suspense fallback={<h1>Loading...</h1>}>
            <Header />
          </Suspense>
          <Experience />
          <div className="sm-screen" id='about'>
            <About />
          </div>
          <Services />
          <Technologies />
          <Projects />
          <Footer />
        </div>
    </div>
    <MobileNavbar />
    </>
  );
}


export default App;
