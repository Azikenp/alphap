import ContentBody from "./ContentBody";
import FooterNav from "./FooterNav";
import MobileNav from "./MobileNav";
import Nav from "./Nav";

const Homepage = () => {
  return (
    <div className="flex flex-col md:flex-row dark:bg-[#383544]">
      <div>
        <Nav />
        <MobileNav />
      </div>
      <div className="flex-1 overflow-y-auto">
        <ContentBody />
      </div>
      <div>
        <FooterNav />
      </div>
    </div>
  );
};

export default Homepage;
