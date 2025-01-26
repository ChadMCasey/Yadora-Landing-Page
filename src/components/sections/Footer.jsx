import { footerCols, footerSocials } from "../../utils/constants";
import Yadora from "../../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="m-auto mt-20 mb-20 px-24 max-w-[90rem]">
      <div className="grid grid-cols-[2fr_repeat(4,1fr)]">
        <div className="flex flex-col justify-start content-between">
          <img src={Yadora} alt="Yadora logo" className="mb-auto w-min" />
          <ul className="flex gap-x-2">
            {footerSocials.map((logo) => (
              <li key={logo.id}>
                <img src={logo.logo} alt={logo.name} />
              </li>
            ))}
          </ul>
        </div>
        {footerCols.map((column) => (
          <div key={column.id}>
            <p className="mb-4 font-bold text-lg/6 text-primary">
              {column.heading}
            </p>
            <ul className="flex flex-col gap-y-2">
              {column.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-primary">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
