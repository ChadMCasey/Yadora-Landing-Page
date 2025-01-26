import { CiCircleCheck } from "react-icons/ci";

const PricingCard = ({ card }) => {
  const pclass = {
    primarySizing: card.primary ? "pb-14" : "pb-10 my-2",
    bulletColor: card.primary ? "stroke-accent" : "stroke-white",
    cta: card.primary ? "bg-accent from-accent to-accent-tint" : "bg-white",
    ctaWrapper: card.primary
      ? "bg-gradient-to-b from-accent to-accent-tint p-[.125rem] rounded-2xl drop-shadow-[0_0px_35px_rgba(255,184,76,0.20)]"
      : "",
  };

  return (
    <div
      className={`bg-primary px-8 pt-10 rounded-2xl relative ${pclass.primarySizing}`}
    >
      {/* aboslutely positioned elements */}
      {card.primary && (
        <>
          <div className="top-0 right-0 z-10 absolute bg-gradient-to-b from-accent to-accent-tint py-[.125rem] rounded-tr-2xl rounded-bl-2xl">
            <p className="bg-accent bg-gradient-to-t from-accent to-accent-tint px-4 py-2 rounded-tr-xl rounded-bl-2xl text-xs">
              most popular
            </p>
          </div>
          <div className="left-[-20%] absolute bg-gradient-to-l from-white to-transparent opacity-20 blur-2xl rounded-[50%] w-[30rem] h-28 -rotate-45"></div>
          <div className="top-[30%] left-[30%] absolute bg-gradient-to-l from-white to-transparent opacity-20 blur-2xl rounded-[50%] w-[30rem] h-28 -rotate-45"></div>
        </>
      )}
      <p className="opacity-80 mb-12 px-6 py-2 border rounded-2xl max-w-min text-sm text-white">
        {card.program}
      </p>
      <div className="flex items-end gap-x-2 mb-2">
        <p className="font-bold text-[3.5rem]/[4rem] text-white tracking-tight">
          {card.price === "Free" ? card.price : `$${card.price}`}
        </p>
        <span className="opacity-50 mb-3 text-white">
          {card.perMonth ? "per month" : ""}
        </span>
      </div>
      <p className="text-white">{card.subheading}</p>
      <ul className="flex flex-col gap-y-4 my-10">
        {card.bullets.map((bullet) => (
          <li key={bullet} className="flex items-center gap-x-2">
            <CiCircleCheck
              className={`w-6 h-6 text-white stroke-1 ${pclass.bulletColor}`}
            />
            <p className="text-white">{bullet}</p>
          </li>
        ))}
      </ul>
      <div className={pclass.ctaWrapper}>
        <button
          className={`text-primary py-4 w-full rounded-2xl bg-gradient-to-t ${pclass.cta}`}
        >
          {card.cta}
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
