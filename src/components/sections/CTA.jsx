const CTA = () => {
  return (
    <section className="m-auto px-24 pt-16 pb-16 max-w-[90rem]">
      <div className="relative flex flex-col items-center bg-primary py-28 rounded-2xl">
        {/* orange bar at top of CTA section */}
        <div className="top-0 absolute bg-accent w-1/5 h-2"></div>

        {/* godly light rays */}
        <div className="left-[4%] absolute bg-gradient-to-l from-white to-transparent opacity-20 blur-2xl rounded-[50%] w-[50rem] h-28 -rotate-45"></div>
        <div className="left-[35%] absolute bg-gradient-to-l from-white to-transparent opacity-20 blur-2xl rounded-[50%] w-[40rem] h-28 -rotate-45"></div>

        <h3 className="mb-4 font-bold text-[3.5rem]/[4rem] text-white tracking-tight">
          Engage without limits
        </h3>
        <p className="pb-10 text-white tracking-tight">
          Join a growing community and talk directly with your favorite creators
        </p>
        <div className="bg-white bg-gradient-to-b from-accent to-accent-tint p-[.125rem] rounded-[1.125rem]">
          <button className="bg-gradient-to-t from-accent to-accent-tint px-8 py-4 rounded-2xl font-medium tracking-tight">
            More information
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
