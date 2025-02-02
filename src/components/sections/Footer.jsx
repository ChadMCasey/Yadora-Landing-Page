import { footerCols, footerSocials } from "../../utils/constants";
import Yadora from "../../assets/logo.svg";

function Footer() {
  return (
    <footer className="m-auto px-4 sm:px-8 md:px-16 xl:px-24 pt-16 pb-8 sm:pb-12 md:pb-28 max-w-[90rem]">
      <div className="gap-y-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-[2fr_repeat(4,1fr)] grid-rows-3 md:grid-rows-2 xl:grid-rows-1">
        <div className="flex flex-col justify-start content-between row-start-3 md:row-start-2 lg:row-start-1">
          <img
            src={Yadora}
            alt="Yadora logo"
            className="mb-8 md:mb-auto w-min"
          />
          <ul className="flex gap-x-2">
            {footerSocials.map((logo) => (
              <li key={logo.id}>
                <a href="#">
                  <img src={logo.logo} alt={logo.name} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        {footerCols.map((column) => (
          <div key={column.id}>
            <p className="mb-4 font-bold text-lg/6 text-primary-500 xl:text-xl">
              {column.heading}
            </p>
            <ul className="flex flex-col gap-y-2">
              {column.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-primary-500 xl:text-lg hover:text-accent-500 transition-all duration-100"
                  >
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
}

export default Footer;
