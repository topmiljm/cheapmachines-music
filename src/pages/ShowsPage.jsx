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
            Live Studio Performance — 'Better Off Dead' &nbsp;·&nbsp; 2025
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
              Live Studio Performance — 'Moonlighting' &nbsp;·&nbsp; 2025
              <div className="section-divider" />
            </div>
            <iframe
              src="https://www.youtube.com/embed/M4XuAhka7io?si=1EzYX4CTGNsxMfWj"
              title="Live Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />

            <div className="section-label">
              Current Live Band
              <div className="section-divider" />
            </div>
            <p className="shows-text">
              <strong> &nbsp;·&nbsp;Ian Barr</strong> -- lead & backing vocals/lead guitar
              <br></br>
              <strong> &nbsp;·&nbsp;Travis Kelly</strong> -- lead & backing vocals/rhythm guitar
              <br></br>
              <strong> &nbsp;·&nbsp;Bobby Gaglini</strong> -- bass/backing vocals
              <br></br>
              <strong> &nbsp;·&nbsp;Will Thomas Brunet</strong> -- drums
              <br></br>
              <strong> &nbsp;·&nbsp;John Carey</strong> -- keyboards/synthesizers
            </p>
            <div className="section-divider" />
            <p className="shows-text">
              <i>'Rock and Roll Lives in a Cheap Machine'</i>
            </p>
          </div>
        </div>

      </div>

    </>
  );
}

// "https://www.youtube.com/embed/M4XuAhka7io?si=1EzYX4CTGNsxMfWj"