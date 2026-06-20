export default function ShowsPage() {
  return (
    <>
      <div className="shows-page">
        <div className="shows-page-img-wrapper">
          <img className="shows-page-img" src="/images/Shows-img.jpg" alt="" />
        </div>

        <div className="page-content--narrow">
          <div className="section-label">
            Upcoming Shows
            <div className="section-divider" />
          </div>
          <p className="shows-text">
            Vinny's ...
          </p>
          <div className="section-label">
            Live Performance — 'Better Off Dead' &nbsp;·&nbsp; 2025
            <div className="section-divider" />
          </div>
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/nQ-bXRw0UeI?si=hflF1xE-kUjB-Kn7"
              title="Live Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />

            <div className="section-label">
              Live Performance — 'Moonlighting' &nbsp;·&nbsp; 2025
              <div className="section-divider" />
            </div>
            <iframe
              src="https://www.youtube.com/embed/M4XuAhka7io?si=1EzYX4CTGNsxMfWj"
              title="Live Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

      </div>

    </>
  );
}

// "https://www.youtube.com/embed/M4XuAhka7io?si=1EzYX4CTGNsxMfWj"