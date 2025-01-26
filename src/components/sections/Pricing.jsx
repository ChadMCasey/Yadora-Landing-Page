import Toggle from "../UI/Toggle";
import PricingCard from "./PricingCard";
import { pricingCards } from "../../utils/constants";

const Pricing = () => {
  return (
    <section className="m-auto px-24 py-32 max-w-[90rem]">
      <div className="flex flex-col items-center">
        <p className="mb-2 text-primary tracking-tight">
          Tailored pricing packages to suit any professional needs
        </p>
        <h2 className="mb-6 font-bold text-[3.5rem]/[4rem] tracking-tight">
          Start creating today<span className="text-accent">.</span>
        </h2>

        <div className="flex items-center gap-x-4">
          <p className="tracking-tight">Monthly</p>
          <Toggle />
          <p className="tracking-tight">Annual</p>
        </div>

        <div className="gap-x-4 grid grid-cols-[32fr_34fr_32fr] my-10 w-[95%]">
          {pricingCards.map((card) => (
            <PricingCard card={card} key={card.program} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
