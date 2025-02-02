import hamburger from "../../../assets/hamburger.svg";

function Hamurger() {
  return (
    <button className="lg:hidden">
      <img
        src={hamburger}
        alt="Hamburger menu icon"
        className="w-6 h-6 transition-all duration-200 hover:-rotate-90"
      />
    </button>
  );
}

export default Hamurger;
