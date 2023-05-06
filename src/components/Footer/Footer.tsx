import { StyledLogo } from "../Header/StyledHeader";
import { StyledFooter, StyledFooterNav, StyledList } from "./StyledFooter";
import logo from "../../images/logo.svg";

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <StyledLogo>
        <img src={logo} alt="Logo" />
      </StyledLogo>
      <StyledFooterNav>
        <StyledList>
          Product
          <ul>
            <li>Overview</li>
            <li>Pricing</li>
            <li>Marketplace</li>
            <li>Features</li>
            <li>Integrations</li>
          </ul>
        </StyledList>
        <StyledList>
          Company
          <ul>
            <li>About</li>
            <li>Team</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
        </StyledList>
        <StyledList>
          Connect
          <ul>
            <li>Contact</li>
            <li>Newsletter</li>
            <li>Linkedin</li>
          </ul>
        </StyledList>
      </StyledFooterNav>
    </StyledFooter>
  );
};

export default Footer;
