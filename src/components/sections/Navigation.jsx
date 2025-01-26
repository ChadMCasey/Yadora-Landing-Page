import Yadora from "../../assets/logo.svg";
import { links } from "../../utils/constants";

const Navigation = () => {
  return (
    <section className="flex justify-between">
      <nav className="flex items-center">
        <a href="#">
          <img
            src={Yadora}
            alt="Yadora logo"
            className="inline-block mr-8 h-7"
          />
        </a>
        <ul className="inline-flex gap-6 font-medium">
          {links.map((link) => (
            <li key={link}>
              <a href="#" className="text-lg text-primary">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex gap-8">
        <button href="#" className="font-medium text-lg text-primary">
          Sign in
        </button>
        <button className="bg-primary px-8 py-4 rounded-2xl text-lg text-white">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Navigation;
