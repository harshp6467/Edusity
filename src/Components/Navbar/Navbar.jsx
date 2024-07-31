import "../Navbar/Navbar.css";
import logo from "../../assets/logo.png";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import menu from "../../assets/menu.png";
function Navbar() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [mobilemenu, setmobilemenu] = useState(false);
  const togglemenu = () => {
    mobilemenu ? setmobilemenu(false) : setmobilemenu(true);
  };

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="Logo" className="logo" />
      <ul className={mobilemenu ? "" : "hide-mobile-menu"}>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>{" "}
        </li>
        <li>
          <Link to="Programs" smooth={true} offset={-260} duration={500}>
            Program
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-150} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="campus" smooth={true} offset={-230} duration={500}>
            Campus
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} offset={-170} duration={500}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            offset={-203}
            duration={500}
            className="btn "
          >
            Contact us
          </Link>
        </li>
      </ul>
      <img src={menu} className="menu-icon" onClick={togglemenu} />
    </nav>
  );
}

export default Navbar;
