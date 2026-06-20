import { useNavigate } from 'react-router-dom';

export default function AboutPage() {

  const navigate = useNavigate();

  return (
    <>
      <div className="about-page">
        <div className="about-page-img-wrapper">
          <img className="about-page-img" src="/images/About-img.png" alt="" />
        </div>

        <div className="page-content--narrow">
          <div className="section-label">
            About <strong>&nbsp;·&nbsp; Cheap Machines</strong>
            <div className="section-divider" />
          </div>

          <p className="about-text">
            It started under a hazy Illinois summer sun…
            <br></br>
            <br></br>
            Ian Barr (co-vocals/lead guitar) and Travis Kelly (co-vocals/rhythm guitar) met at the start of their high school careers. They became fast friends.
            Rock and Roll was in their DNA before their meeting. Travis was swimming in melodic 60’s pop bliss that instantly melded with Ian's obsession with 70’s and 90’s hard rock.
            They started their own rock groups, and after a few teenage years competing against each other in battles of the bands, they called a truce and joined forces during college.
            They took their mutual love for hook-heavy music and started writing and performing their own songs.
            And then, for a few years, things got quiet… too quiet.
            <br></br>
            <br></br>
            Until 2016… when Travis and Ian reunited in LA and vowed to start a band. A real band. With a real record.
            So they got to work.
            They wrote, recorded, engineered, and mixed their debut album: “Shared Delusions.”
            Cheap Machines was born.
            Fixated on performing the music they had spent countless hours making, Travis and Ian sought out the talent to fill the remaining positions within the band.
            <br></br>
            <br></br>
            And then lightning struck.
            Three times... in the individual forms of Bobby Gaglini (bass/backing vocals), Will Thomas Brunet (drums), and John Carey (keyboards/synthesizers).
            The combination of their talents brought Cheap Machines to life. Since then, the five-some have relentlessly attacked the Los Angeles live music scene.
          </p>
          <br></br>
          <div className="section-divider" />
          <p className="shows-text">
            <i>'Rock and Roll Lives in a Cheap Machine'</i>
          </p>
        </div>
      </div>

      <div className="footer-container">
        <div className="footer-img-wrapper">
          <img className="footer-img" src="/images/follow-text.jpg" alt="" />
        </div>
        <div className="footer-text-container">
          <a
            className="footer-text"
            href="https://www.instagram.com/cheapmachines"
          >
            Instagram
          </a>
          <a
            className="footer-text"
            href="https://www.youtube.com/@cheapmachinesmusic"
          >
            YouTube
          </a>
          <a
            className="footer-text"
            href="https://open.spotify.com/artist/3wqqrOCaUwiPlkWuH6sOZs?si=pgPEU6dxQ32fZEujxdpBvQ&nd=1&dlsi=4eec7bde4700474f"
          >
            Spotify
          </a>
          <a
            className="footer-text"
            href="https://www.tiktok.com/@cheapmachines?is_from_webapp=1&sender_device=pc"
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
        </div>
      </div >
    </>
  );
}
