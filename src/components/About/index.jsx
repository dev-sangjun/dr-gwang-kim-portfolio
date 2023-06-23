import profilePhoto from "../../assets/profile-photo.png";
import avatarPhoto from "../../assets/avatar-photo.png";
import ExternalLinks from "../ExternalLinks";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div id="about" className="anchor" />
      <div className="card shadow-xl bg-base-100 overflow-hidden">
        <div className="flex flex-col items-center gap-4 p-8 md:hidden">
          <div className="w-3/4 max-w-[16rem] rounded-full overflow-hidden shadow-2xl mx-auto">
            <img src={avatarPhoto} alt="avatar" />
          </div>
          <div className="leading-8 font-light">
            <strong className="font-bold">Dr. Gwang Kim</strong> is the second
            trombone of the{" "}
            <strong className="font-bold">
              Bakersfield Symphony Orchestra
            </strong>{" "}
            and serves on faculty at{" "}
            <strong className="font-bold">
              Loyola Marymount University, Pasadena Conservatory of Music, and
              Ventura College Schwab School of Music.
            </strong>{" "}
            As an advocate for serving communities in need, he also serves as
            the teaching artist at{" "}
            <strong className="font-bold">
              Harmony Project and YOLA-Los Angeles Philharmonic.
            </strong>
          </div>
          <ExternalLinks />
        </div>
        <div className="flex">
          <div className="hidden md:block md:min-w-[28rem]">
            <img
              className="h-full object-cover"
              src={profilePhoto}
              alt="profile"
            />
          </div>
          <div className="hidden md:flex flex-col items-center md:items-start justify-center gap-4 p-4 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold">
              About Dr. Gwang Kim
            </h2>
            <p className="text-sm font-light leading-8 md:text-lg md:leading-10">
              Dr. Gwang Kim is the second trombone of the{" "}
              <strong className="font-bold">
                Bakersfield Symphony Orchestra
              </strong>{" "}
              and has performed with notable ensembles around the world
              including the{" "}
              <strong className="font-bold">
                Los Angeles Philharmonic, Hollywood Bowl Orchestra, New West
                Symphony, Seocho Philharmonic, and the Daesan Philharmonic.
              </strong>
              He has also performed at{" "}
              <strong className="font-bold">Coachella</strong> with artists from
              88 Rising and has recorded for numerous television shows including
              ABC’s The Fosters and Netflix original The Chef’s Table. As an
              educator, Gwang has been invited as a guest clinician for the{" "}
              <strong className="font-bold">
                Rockport Brass Festival, Pasadena City College, California State
                University Northridge, WMU Symphony and KAYS Orchestra.
              </strong>
            </p>
            <Link to="/bio" className="ml-auto btn btn-primary normal-case">
              More about Dr. Kim
            </Link>
            <div className="flex w-full justify-end">
              <ExternalLinks />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
