import { useNavigate } from 'react-router-dom';
import HeroHeader from '../components/HeroHeader';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <HeroHeader onBrowse={() => navigate('/music')} />

      <div className="page-content">
        <div className="section-label">
          Latest Video — 'Run Like Hell' &nbsp;·&nbsp; 2026
          <div className="section-divider" />
        </div>

        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/nbVG6_MIcPM"
            title="Latest Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </>
  );
}
