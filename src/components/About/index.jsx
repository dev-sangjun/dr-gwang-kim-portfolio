import profilePhoto from "../../assets/profile-photo.png";
import avatarPhoto from "../../assets/avatar-photo.png";
import ExternalLinks from "../ExternalLinks";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div id="about" className="anchor" />
      <div className="card shadow-xl bg-base-100 overflow-hidden">
        <div className="flex">
          <div className="hidden md:block md:min-w-[28rem]">
            <img
              className="h-full object-cover"
              src={profilePhoto}
              alt="profile"
            />
          </div>
          <div className="flex flex-col items-center md:items-start justify-center gap-4 p-4 md:p-8">
            <div className="md:hidden w-3/4 max-w-[16rem] rounded-full overflow-hidden shadow-2xl mx-auto">
              <img src={avatarPhoto} alt="avatar" />
            </div>
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
