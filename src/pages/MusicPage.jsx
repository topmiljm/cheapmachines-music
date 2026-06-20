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
                    Cheap Machines Discography
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
            </div>
        </div>

    );
}

// import { useNavigate } from 'react-router-dom';
// import AlbumCard from '../components/AlbumCard';
// // import { albums, tracks } from '../data/tracks';

// export default function DemosPage() {
//   const navigate = useNavigate();

//   const trackCount = (albumTitle) =>
//     tracks.filter((t) => t.album === albumTitle).length;

//   return (
//     <div className="page-content">
//       <div className="section-label">
//         All Demos
//         <div className="section-divider" />
//       </div>

//       <div className="album-grid">
//         {albums.map((album) => (
//           <AlbumCard
//             key={album.id}
//             album={album}
//             trackCount={trackCount(album.title)}
//             onClick={() => navigate(`/demos/${album.slug}`)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }
