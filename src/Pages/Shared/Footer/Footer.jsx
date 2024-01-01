import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import logo from "../../../assets/logo";
const Footer = () => {
  return (
    <footer className="footer p-10 bg-slate-700 text-white mt-10">
      <aside>
        <img src={logo} alt="logo" />
        <p className="lg:w-72">
          Edwin Diaz is a software and web technologies engineer, a life coach
          trainer who is also a serial .
        </p>
        <div className="flex gap-x-3">
          <a
            target="_blank"
            href="https://www.facebook.com/alsamiul11"
            rel="noreferrer"
          >
            <FaFacebook className="text-2xl" />
          </a>
          <a
            target="_blank"
            href="https://twitter.com/al_samiul_404"
            rel="noreferrer"
          >
            <FaTwitter className="text-2xl" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/al-samiul/"
            rel="noreferrer"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          <a
            target="_blank"
            href="https://github.com/mohammad-al-samiul"
            rel="noreferrer"
          >
            <FaGithub className="text-2xl" />
          </a>
        </div>
      </aside>
      <nav>
        <header className="footer-title">Services</header>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <header className="footer-title">Company</header>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <header className="footer-title">Legal</header>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
