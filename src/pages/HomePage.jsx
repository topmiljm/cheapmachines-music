import { useNavigate } from 'react-router-dom';
import HeroHeader from '../components/HeroHeader';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <HeroHeader onBrowse={() => navigate('/music')} />

      <div className="page-content">
        <div className="section-label">
          Newest Video — 'Run Like Hell' &nbsp;·&nbsp; 2026
          <div className="section-divider" />
        </div>

        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/nbVG6_MIcPM"
            title="Newest Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="section-label">
          <div className="section-divider" />
          From the Album — 'Skateland' &nbsp;·&nbsp; Out Now
        </div>

      </div>

      <div className="footer-container">
        <div className="home-footer-divider-container">
          <div className="home-footer-divider" />
          <p className="home-footer-text">
            <i>'Rock and Roll Lives in a Cheap Machine'</i>
          </p>
        </div>
        <div className="footer-img-wrapper">

          <img className="footer-img" src="/images/follow-text.jpg" alt="" />
        </div>
        <div className="footer-text-container">
          <a
            className="footer-text"
            href="https://www.instagram.com/cheapmachines"
            target="_blank"
          >
            Instagram
          </a>
          <a
            className="footer-text"
            href="https://www.youtube.com/@cheapmachinesmusic"
            target="_blank"
          >
            YouTube
          </a>
          <a
            className="footer-text"
            href="https://open.spotify.com/artist/3wqqrOCaUwiPlkWuH6sOZs?si=pgPEU6dxQ32fZEujxdpBvQ&nd=1&dlsi=4eec7bde4700474f"
            target="_blank"
          >
            Spotify
          </a>
          <a
            className="footer-text"
            href="https://www.tiktok.com/@cheapmachines?is_from_webapp=1&sender_device=pc"
            target="_blank"
          >
            TikTok
          </a>
        </div>
        <button
          onClick={() => navigate('/contact')}
          className="contact-btn">
          Contact Cheap Machines
        </button>

        <div className="section-label-footer">
          <div className="section-divider-footer" />
          &nbsp;·&nbsp; JMT
        </div>
      </div >
    </>
  );
}
