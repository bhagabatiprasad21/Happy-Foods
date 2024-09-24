import Logo from "./Logo";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="flex justify-between bg-teal-50 mx-auto w-10/12 my-2 rounded-sm">
      <Logo />
      <Navbar />
    </div>
  );
};

export default Header;
