import { features } from "../../utils/constants";

const Features = () => {
  return (
    <section className="m-auto px-24 py-32 max-w-[90rem]">
      <div className="grid grid-cols-2">
        <div className="max-w-[69%]">
          <p className="mb-2 font-bold text-accent text-xl uppercase tracking-widest">
            build community
          </p>
          <h3 className="mb-4 font-bold text-[3.5rem]/[4rem] text-primary tracking-tight">
            Why become a creator?
          </h3>
          <p className="mb-10 text-lg tracking-tight">
            Engage with your supporters and subscribers to sell your skills,
            knowledge and passions.
          </p>
          <button className="bg-primary px-8 py-4 rounded-2xl text-lg text-white tracking-tight">
            Become a creator
          </button>
        </div>
        <ul className="gap-x-8 gap-y-20 grid grid-cols-2 grid-rows-2">
          {features.map((feature) => (
            <li className={`${feature.name} w-[80%]`} key={feature.id}>
              <img src={feature.icon} alt={feature.name} className="mb-6" />
              <h5 className="mb-2 font-bold text-2xl/8 text-primary">
                {feature.name}
              </h5>
              <p className="text-lg text-primary tracking-tight">
                {feature.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Features;
