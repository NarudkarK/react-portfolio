import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        {/* <img className="mx-2 w-10 " src={logo} alt="KN" /> */}
        <h2 className="font-10">KN</h2>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin
          style={{ cursor: "pointer" }}
          onClick={() => {
            window.open("https://linkedin.com/in/krushna-narudkar-5a060a25a");
          }}
        ></FaLinkedin>
        <FaGithub
          style={{ cursor: "pointer" }}
          onClick={() => {
            window.open("https://github.com/NarudkarK");
          }}
        ></FaGithub>
        <FaSquareXTwitter
          style={{ cursor: "pointer" }}
          onClick={() => {
            window.open("https://x.com/krushna__2003");
          }}
        ></FaSquareXTwitter>
        <FaInstagram
          style={{ cursor: "pointer" }}
          onClick={() => {
            window.open("https://x.com/krushna__2003");
          }}
        ></FaInstagram>
      </div>
    </nav>
  );
};

export default NavBar;
