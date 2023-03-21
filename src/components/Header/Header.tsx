import logo from "./logo.svg";
import hamburger from "./icon-hamburger.svg";
import angleDown from "../../images/angle-down.svg";
import { HamburgerIcon, StyledButtonTransparent, StyledButtonWhite, StyledHeader, StyledNavDesktop, SubTitle, Title, WrapperTitle } from "./StyledHeader";
import { useState } from "react";
import TabletMenu from "./TabletMenu/TabletMenu";
import MobileMenu from "./MobileMenu/MobileMenu";

function Header() {
  const [isTabletMenuActive, setIsTabletMenuActive] = useState<boolean>(false);
  const handleClick = () => {
    setIsTabletMenuActive(!isTabletMenuActive);
  }
  return (
    <StyledHeader>
      <div className="nav-box">
        <div className="flex-row">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <StyledNavDesktop>
            <ul className="nav-desktop-links">
              <li>
                Product <img className="angle" src={angleDown} alt="" />
              </li>
              <li>
                Company <img className="angle" src={angleDown} alt="" />
              </li>
              <li onClick={handleClick}>
                Connect <img className="angle" src={angleDown} alt="" />
              </li>
            </ul>
            {isTabletMenuActive && <TabletMenu/>}
          </StyledNavDesktop>
        </div>
        <div className="login-box">
          <p>
            <a className="btn-login" href="#">
              Login
            </a>
          </p>
          <StyledButtonWhite className="btn btn-sign">Sign up</StyledButtonWhite>
        </div>
        <HamburgerIcon>
          <img src={hamburger} alt="" />
        </HamburgerIcon>
      </div>
      <WrapperTitle>
        <Title>A modern publishing platform</Title>
        <SubTitle>Grow your audience and build your online brand</SubTitle>
        <div className="btn-row">
          <StyledButtonWhite className="btn btn-start">Start for Free</StyledButtonWhite>
          <StyledButtonTransparent className="btn btn-learn">Learn More</StyledButtonTransparent>
        </div>
      </WrapperTitle>
      <MobileMenu/>
    </StyledHeader>
  );
}

export default Header;
