import './App.css';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FaPhotoVideo, FaClock, FaMapMarkerAlt, FaGamepad, FaHeart } from 'react-icons/fa';
import Gallery from './components/Gallery';
import Timeline from './components/Timeline';
import Counter from './components/Counter';
import Map from './components/Map';
import MiniGame from './components/MiniGame';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Counter />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/map" element={<Map />} />
            <Route path="/minigame" element={<MiniGame />} />
          </Routes>
        </main>
        <footer className="fixed bottom-0 w-full bg-gray-200 p-2 shadow-lg flex justify-around">
          <Link to="/"><FaClock className="text-xl" />Counter</Link>
          <Link to="/gallery"><FaPhotoVideo className="text-xl" />Gallery</Link>
          <Link to="/timeline"><FaHeart className="text-xl" />Timeline</Link>
          <Link to="/map"><FaMapMarkerAlt className="text-xl" />Map</Link>
          <Link to="/minigame"><FaGamepad className="text-xl" />MiniGame</Link>
        </footer>
      </div>
    </Router>
  );
}

export default App;


