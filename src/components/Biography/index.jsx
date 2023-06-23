import { HiArrowLongLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Biography = () => {
  return (
    <div className="Biography">
      <Link to="/" className="btn btn-ghost btn-md normal-case">
        <HiArrowLongLeft />
        Home
      </Link>
    </div>
  );
};

export default Biography;
