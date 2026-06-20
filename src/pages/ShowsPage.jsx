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
                        Vinny's
                    </p>
                </div>

            </div>
            <div className="video-container">
                <iframe
                    src="https://www.youtube.com/embed/M4XuAhka7io&list=RDM4XuAhka7io&start_radio=1"
                    title="Live Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        </>
    );
}