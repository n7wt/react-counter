import FooterLogo from "./FooterLogo";
import FooterMenu from "./FooterMenu";
import Copyright from "./Copyright";

function Footer() {
  return (
    <>
      <footer className="footer">
        <FooterLogo />
        <FooterMenu />
        <Copyright />
      </footer>
    </>
  );
}

export default Footer;
