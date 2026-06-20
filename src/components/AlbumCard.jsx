export default function AlbumCard({ album, onClick }) {
  return (
    <div
      className="album-card"
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      <div className="album-card__art">
        <img src={album.coverArt} alt={album.title} />
      </div>

      <div className="album-card__info">
        <div className="album-card__title">
          {album.title}
        </div>

        <div className="album-card__meta">
          {album.year} · {album.tracksTotal} tracks
        </div>
      </div>
    </div>
  );
}