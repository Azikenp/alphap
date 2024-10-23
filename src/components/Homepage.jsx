import ContentBody from "./ContentBody";
import FooterNav from "./FooterNav";
import MobileNav from "./MobileNav";
import Nav from "./Nav";

const Homepage = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div>
        <Nav />
        <MobileNav />
      </div>
      <div>
        <ContentBody />
      </div>
      <div>
        <FooterNav />
      </div>
    </div>
  );
};

export default Homepage;
