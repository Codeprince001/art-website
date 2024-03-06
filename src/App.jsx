import Home from './pages/Home';
import { About, Navbar } from './components';
import Video from './components/Video';
import Services from './components/Services';
import Adverticement from './components/Adverticement';
import FAQ from './components/FAQ';
import Newletter from './components/Newletter';

function App() {

  return (
    <>
      <div className='bg-gradient-to-b from-[#7D2AE7] to-[#FAF9FF]'>
        <Navbar />
        <Home />
        <About />
      </div>
      <Video />
      <Services />
      <Adverticement />
      <div className='bg-gradient-to-b  from-[#1E0734] to-[#FAF9FF]'>
        <FAQ />
        <Newletter />
      </div>
    </>
  );
}

export default App;
