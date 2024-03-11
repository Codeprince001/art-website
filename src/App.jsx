import { About, FAQ, Navbar, ProductApp } from './components';
import { Route, Routes } from 'react-router-dom';
import { Roadmap, Home } from './pages';

function App() {

  return (
    <>
      <div className='bg-gradient-to-b from-[#7D2AE7] to-[#FAF9FF]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/roadmap' element={<Roadmap />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
