import soundCloud from "../../assets/soundcloud.png";
import youTube from "../../assets/youtube.png";

const ExternalLinks = () => {
  return (
    <div className="flex gap-2">
      <a
        className="btn btn-ghost text-xl"
        href="https://on.soundcloud.com/pNwxr"
        target="_blank"
        rel="noreferrer"
      >
        <img className="w-8" src={soundCloud} />
      </a>
      <div className="border-l border-l-slate-300" />
      <a
        className="btn btn-ghost text-xl"
        href="https://www.youtube.com/@kimgwang4531"
        target="_blank"
        rel="noreferrer"
      >
        <img className="w-8" src={youTube} />
      </a>
    </div>
  );
};

export default ExternalLinks;
