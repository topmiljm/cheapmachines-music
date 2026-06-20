export default function HeroHeader({ onBrowse }) {
  return (
    <div className="hero">
      <img
        src="/images/Hero-img.jpg"
        alt="cheap machines band photo"
        className="hero-img"
      />
      <div className="hero-overlay">
        <h1 className="hero-title">Cheap Machines
        </h1>
        <p className="hero-subtitle">Alternative Rock Band &nbsp;·&nbsp; Los Angeles, CA</p>
        <button className="hero-btn" onClick={onBrowse}>
          Browse Music
        </button>
      </div>

    </div>
  );
}
