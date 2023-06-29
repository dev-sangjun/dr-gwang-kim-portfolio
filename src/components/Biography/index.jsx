import { HiArrowLongLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Biography = () => {
  return (
    <div className="flex flex-col gap-8 p-4">
      <Link to="/" className="btn btn-ghost btn-sm normal-case w-fit">
        <HiArrowLongLeft />
        Home
      </Link>
      <div className="flex flex-col gap-4">
        <h3 className="text-xl md:text-2xl font-semibold">
          More about Dr. Kim
        </h3>
        <p className="text-sm font-light leading-8 md:text-lg md:leading-10">
          Dr. Kim has also performed at{" "}
          <strong className="font-bold">Coachella</strong> with artists from 88
          Rising and has recorded for numerous television shows including ABC’s
          The Fosters and Netflix original The Chef’s Table. As an educator,
          Gwang has been invited as a guest clinician for the{" "}
          <strong className="font-bold">
            Rockport Brass Festival, Pasadena City College, California State
            University Northridge, WMU Symphony and KAYS Orchestra.
          </strong>
        </p>
        <p className="text-sm font-light leading-8 md:text-lg md:leading-10">
          Currently, Gwang serves on faculty at{" "}
          <strong className="font-bold">
            Loyola Marymount University and Ventura College Schwab School of
            Music
          </strong>{" "}
          while continuing his duties as teaching associate at the{" "}
          <strong className="font-bold">
            Harmony Project, at the Pasadena Conservatory of Music, and at UCLA.
          </strong>{" "}
          As an advocate for serving communities in need, he also is the
          teaching artist at{" "}
          <strong className="font-bold">
            YOLA-Los Angeles Philharmonic, Inglewood.
          </strong>{" "}
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-xl md:text-2xl font-semibold">
          Academic Publications by Dr. Kim
        </h3>
        <ul>
          <li>
            <a
              href="https://escholarship.org/uc/item/567500ft"
              target="_blank"
              rel="noreferrer"
              className=" italic text-blue-700"
            >
              Coram Deo: The Trombone and the Sublime in the Works by Beethoven
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Biography;
