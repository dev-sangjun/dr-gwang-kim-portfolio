const Education = () => {
  return (
    <div>
      <div id="education" className="anchor" />
      <div className="card items-center md:items-start shadow-xl p-8 gap-4 md:gap-8 text-lg bg-base-100">
        <h2 className="text-xl md:text-2xl font-bold">Education</h2>
        <ul className="w-full flex flex-col gap-4 text-sm md:text-lg">
          <li className="flex flex-col md:flex-row justify-between gap-2">
            <h3 className="font-semibold">UCLA Herb Alpert School of Music</h3>
            <ul className="flex flex-col font-light md:items-end gap-2">
              <li>Doctor in Musical Arts</li>
              <li>Master of Music</li>
            </ul>
          </li>
          <li className="flex flex-col md:flex-row justify-between gap-2">
            <h3 className="font-semibold">USC Thornton School of Music</h3>
            <ul className="flex flex-col font-light md:items-end gap-2">
              <li>Bachelor of Music</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Education;
