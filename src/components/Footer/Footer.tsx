import { StyledLogo } from "../Header/StyledHeader";
import logo from "./logo.svg";

import { StyledFooter, StyledFooterNav } from "./StyledFooter";

function Footer() {
  return (
    <StyledFooter>
      <StyledLogo>
        <img src={logo} alt="Logo" />
      </StyledLogo>
      <StyledFooterNav>
        <div>
          <ul>
            Product
            <li>Overview</li>
            <li>Pricing</li>
            <li>Marketplace</li>
            <li>Features</li>
            <li>Integrations</li>
          </ul>
        </div>
        <div>
          <ul>
            Company
            <li>About</li>
            <li>Team</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <ul>
            Connect
            <li>Contact</li>
            <li>Newsletter</li>
            <li>Linkedin</li>
          </ul>
        </div>
      </StyledFooterNav>
    </StyledFooter>
  );
}

export default Footer;
