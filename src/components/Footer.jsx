import { badges } from "../constants";
import { BlogLogo } from "../assets";
const Footer = () => {
  return (
    <div>
      <div className=" text-white px-12 py-10 ">
        <div className="container mx-auto flex justify-center">
          {/* <Link
          href="#hero"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <Image src={Logo} alt="logo" className="w-36 h-36 object-contain" />
        </Link> */}
          {/* New badges icons media here  */}
        </div>

        <p className="flex flex-col text-white items-center justify-center dark:text-[#8954fb]">
          All rights reserved {new Date().getFullYear()} &copy;
        </p>
        <p className="flex flex-col text-white items-center justify-center dark:text-[#a37ff0]">
          Suliman Badour
        </p>
        <div className=" mt-4 items-center flex justify-center">
          <ul className="sm:flex flex gap-4">
            {badges.map((item) => (
              <li
                key={item.name}
                className="cursor-pointer"
                onClick={() => {
                  setActive(item.link);
                }}
              >
                <a
                  href={item.link}
                  target={item.link}
                  rel="noopener noreferrer"
                >
                  <img src={item.icon} alt={item.name} width={50} height={50} />
                </a>
              </li>
            ))}
            <li className="cursor-pointer">
              <a
                href="https://sb-blog-silk.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={BlogLogo} alt="SB Blog" width={75} height={50} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
