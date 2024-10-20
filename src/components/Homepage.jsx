import MobileNav from "./MobileNav";
import Nav from "./Nav";

const Homepage = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div>
        <Nav />
        <MobileNav />
      </div>
    </div>
  );
};

export default Homepage;