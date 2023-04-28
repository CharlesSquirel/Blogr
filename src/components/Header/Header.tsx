import logo from "./logo.svg";
import hamburger from "./icon-hamburger.svg";
import iconClose from "./icon-close.svg";
import angleDown from "../../images/angle-down.svg";
import { useState } from "react";
import {
  HamburgerIcon,
  StyledButtonTransparent,
  StyledButtonWhite,
  StyledHeader,
  StyledLogo,
  StyledNavDesktop,
  SubTitle,
  Title,
  WrapperTitle,
  StyledNavContainer,
  FlexRow,
  StyledNavDesktopList,
  StyledAngle,
  StyledLoginBox,
  StyledButtonBox,
} from "./StyledHeader";
import TabletMenu from "./TabletMenu/TabletMenu";
import MobileMenu from "./MobileMenu/MobileMenu";

const Header: React.FC = () => {
  const [isTabletMenuActive, setIsTabletMenuActive] = useState<boolean>(false);
  const [isMobileMenuActive, setIsMobileMenuActive] = useState<boolean>(false);
  const handleTabletClick = () => {
    setIsTabletMenuActive(!isTabletMenuActive);
  };
  const handleMobileClick = () => {
    setIsMobileMenuActive(!isMobileMenuActive);
  };
  return (
    <StyledHeader>
      <StyledNavContainer>
        <FlexRow>
          <StyledLogo>
            <img src={logo} alt="logo" />
          </StyledLogo>
          <StyledNavDesktop>
            <StyledNavDesktopList>
              <li>
                Product <StyledAngle src={angleDown} alt="" />
              </li>
              <li>
                Company <StyledAngle src={angleDown} alt="" />
              </li>
              <li onClick={handleTabletClick}>
                Connect <StyledAngle src={angleDown} alt="" />
              </li>
            </StyledNavDesktopList>
            {isTabletMenuActive && <TabletMenu />}
          </StyledNavDesktop>
        </FlexRow>
        <StyledLoginBox>
          <p>
            <a href="#">Login</a>
          </p>
          <StyledButtonWhite>Sign up</StyledButtonWhite>
        </StyledLoginBox>
        <HamburgerIcon onClick={handleMobileClick}>
          <img src={isMobileMenuActive ? iconClose : hamburger} alt="" />
        </HamburgerIcon>
      </StyledNavContainer>
      <WrapperTitle>
        <Title>A modern publishing platform</Title>
        <SubTitle>Grow your audience and build your online brand</SubTitle>
        <StyledButtonBox>
          <StyledButtonWhite>Start for Free</StyledButtonWhite>
          <StyledButtonTransparent>Learn More</StyledButtonTransparent>
        </StyledButtonBox>
      </WrapperTitle>
      {isMobileMenuActive && <MobileMenu />}
    </StyledHeader>
  );
};

export default Header;
