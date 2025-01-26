import { reviewImgs } from "../../utils/constants";

const Hero = () => {
  return (
    <section className="pt-28 pb-16">
      <div className="flex justify-between">
        <div className="max-w-[50rem]">
          <h1 className="mb-4 font-bold text-7xl/[5rem] text-primary tracking-tight">
            Learn from your favorite creators about{" "}
            <span className="bg-clip-text bg-gradient-to-t from-accent to-accent-tint text-accent text-transparent">
              fantasy reports
            </span>
          </h1>
          <div className="flex items-center gap-4">
            <ul className="flex">
              {reviewImgs.map((headshot) => (
                <li className="-mr-4 last:-mr-0" key={headshot.id}>
                  <img
                    src={headshot.image}
                    alt={headshot.name}
                    className="border-4 border-white rounded-full h-12"
                  />
                </li>
              ))}
            </ul>
            <p className="font-medium text-lg text-primary">
              <span className="font-bold text-accent">5000+</span> satisfied
              clients in 2024
            </p>
          </div>
        </div>
        <figure>
          <div className="flex justify-center items-center mr-8 rounded-full w-52 h-52 outline outline-1 outline-primary">
            <div className="flex flex-col justify-center items-center bg-primary rounded-full w-44 h-44">
              <p className="font-bold text-5xl text-white">1:1</p>
              <p className="font-bold text-ellipsis text-white text-xl">
                Video calls
              </p>
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
};

export default Hero;
