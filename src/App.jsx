import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ShowsPage from './pages/ShowsPage';
import MusicPage from './pages/MusicPage';
import ContactPage from './pages/ContactPage';
import ScrollToTop from "./components/ScrollToTop";



export default function App() {

  return (
    <>
      <div className="app">
        <Navbar />

        <main className="main">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/shows" element={<ShowsPage />} />
            <Route path="/music" element={<MusicPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

      </div>
    </>
  );
}
