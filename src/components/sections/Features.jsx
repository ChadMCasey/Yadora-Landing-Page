import { features } from "../../utils/constants";

function Features() {
  return (
    <section className="m-auto px-4 sm:px-8 md:px-16 xl:px-24 pt-14 sm:pt-20 md:pt-32 pb-16 md:pb-24 max-w-[90rem]">
      <div className="gap-y-16 md:gap-y-24 grid lg:grid-cols-2">
        <div className="w-[90%] sm:max-w-[80%] md:max-w-[75%] xl:max-w-[65%]">
          <h3 className="mb-2 sm:mb-4 font-bold text-[2rem]/[2.5rem] text-primary-500 sm:text-4xl md:text-5xl xl:text-[3.5rem]/[4rem] tracking-tight">
            Why become a creator?
          </h3>
          <p className="mb-8 md:mb-10 xl:text-lg tracking-tight">
            Engage with your supporters and subscribers to sell your skills,
            knowledge and passions.
          </p>
          <button className="bg-primary-500 hover:bg-accent-500 px-8 hover:px-9 py-4 rounded-2xl text-white xl:text-lg tracking-tight transition-all duration-200">
            Become a creator
          </button>
        </div>
        <ul className="justify-items-center sm:justify-items-start gap-x-8 gap-y-12 md:gap-y-20 grid sm:grid-cols-2 sm:grid-rows-2">
          {features.map((feature) => (
            <li
              className="w-[80%] xl:w-5/6 text-center sm:text-start tracking-tight"
              key={feature.id}
            >
              <img
                src={feature.icon}
                alt={feature.name}
                className="sm:place-self-start mb-6 w-24 md:w-auto h-24 md:h-auto place-self-center"
              />
              <h4 className="mb-2 font-bold text-2xl/8 text-primary-500">
                {feature.name}
              </h4>
              <p className="text-primary-500 xl:text-lg tracking-tight">
                {feature.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Features;
