import { RxCaretRight } from "react-icons/rx";

import { appStats, appStatsImgs, links } from "../../utils/constants";

const AppStatistics = () => {
  return (
    // 1 px offset for weird white spacing
    <section className="bg-primary">
      <div className="flex flex-col gap-y-28 m-auto px-24 pt-16 pb-24 max-w-[90rem]">
        <div>
          <h2 className="bg-clip-text bg-gradient-to-t from-accent to-accent-tint font-bold text-7xl/[5.6rem] text-accent text-transparent tracking-tight">
            get direct
          </h2>
          <h2 className="font-bold text-7xl/[5rem] text-white tracking-tight">
            knowledge and insight.
          </h2>
        </div>
        <div className="gap-x-9 grid grid-cols-3">
          {appStatsImgs.map((img) => (
            <div className="relative" key={img.id}>
              <img
                key={img.name}
                src={img.image}
                className="rounded-2xl hover:"
              />
              <p className="bottom-8 left-6 absolute bg-white bg-opacity-20 backdrop-blur-sm px-2 py-1 rounded-lg font-normal text-white">
                {img.name}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-between">
          <ul className="flex gap-20">
            {appStats.map((stat) => (
              <li key={stat.id}>
                <p className="font-bold text-7xl/[5rem] text-accent tracking-tight">
                  {stat.value}
                </p>
                <p className="mt-2 font-normal text-[2rem]/[2.5rem] text-white">
                  {stat.description}
                </p>
              </li>
            ))}
          </ul>
          <div className="flex items-end gap-6 font-normal text-[2rem]/[2.5rem] text-white">
            <p className="max-w-52">Explore the marketplace</p>
            <div className="bg-gradient-to-b from-accent to-accent-tint mb-2 p-[2px] rounded-full">
              <div className="flex justify-center items-center border-wi bg-accent bg-gradient-to-t from-accent to-accent-tint rounded-full w-16 h-16">
                <RxCaretRight className="w-12 h-12 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppStatistics;
