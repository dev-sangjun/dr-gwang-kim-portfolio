const Samples = () => {
  return (
    <div>
      <div id="samples" className="anchor" />
      <div className="card shadow-xl bg-base-100 overflow-hidden p-8 gap-4 md:gap-8">
        <h2 className="text-lg md:text-2xl font-bold">Samples</h2>
        <div className="flex gap-4 overflow-x-auto">
          <iframe
            className="w-3/4 md:w-full rounded-xl"
            height="315"
            src="https://www.youtube.com/embed/UqesuL7kttc"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
          <iframe
            className="w-3/4 md:w-full rounded-xl"
            height="315"
            src="https://www.youtube.com/embed/-jkMwiIXQZo"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Samples;
