import { albums } from '../data/albums';
import AlbumCard from '../components/AlbumCard';

export default function MusicPage() {
    return (

        <div className="music-page">
            <div className="music-page-img-wrapper">
                <img className="music-page-img" src="/images/music-title.jpg" alt="" />
            </div>

            <div className="page-content--narrow">
                <div className="section-label">
                    <strong>Cheap Machines</strong> &nbsp;·&nbsp; Discography
                    <div className="section-divider" />
                </div>
                <p className="music-text">

                </p>
                <div className="album-grid">
                    {albums.map((album) => (
                        <AlbumCard
                            key={album.id}
                            album={album}
                            onClick={() => window.open(album.spotifyUrl, "_blank")}
                        />
                    ))}
                </div>
                <div className="section-divider" />
                <p className="shows-text">
                    <i>'Rock and Roll Lives in a Cheap Machine'</i>
                </p>
            </div>
        </div>

    );
}


