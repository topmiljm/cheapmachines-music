import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
// import Player from './components/Player';
// import { usePlayer } from './hooks/usePlayer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ShowsPage from './pages/ShowsPage';
import MusicPage from './pages/MusicPage';


export default function App() {
  // const player = usePlayer();

  return (
    <div className="app">
      <Navbar />

      <main className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/demos" element={<DemosPage player={player} />} /> */}
          {/* <Route path="/demos/:slug" element={<AlbumPage player={player} />} /> */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/shows" element={<ShowsPage />} />
          <Route path="/music" element={<MusicPage />} />

        </Routes>
      </main>

      {/* <Player
        track={player.currentTrack}
        isPlaying={player.isPlaying}
        progress={player.progress}
        currentTime={player.currentTime}
        onToggle={player.toggle}
        onSeek={player.seek}
      /> */}
    </div>
  );
}
