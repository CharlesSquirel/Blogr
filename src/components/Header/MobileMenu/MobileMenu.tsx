import angleDown from "./angle-down copy.svg";
import angleUp from "./angle-up.svg";
import MobileSubMenu from "./MobileSubMenu";
import { LoginButton, MobileLinks, SignUpButton, StyledMobileMenu, WrapperButtons, StyledAngle } from "./StyledMobileMenu";
import { useState } from "react";
function MobileMenu() {
  const [isSubMenuActive, setIsSubMenuActive] = useState<boolean>(false);
  const handleClick = () => {
    setIsSubMenuActive(!isSubMenuActive);
  };
  return (
    <StyledMobileMenu>
      <MobileLinks>
        <li>
          Product <StyledAngle src={angleDown} alt="" />
        </li>
        <li>
          Company <StyledAngle src={angleDown} alt="" />
        </li>
        <li onClick={handleClick}>
          Connect <StyledAngle src={(isSubMenuActive && angleUp) || angleDown} alt="" />
        </li>
      </MobileLinks>
      {isSubMenuActive && <MobileSubMenu />}
      <WrapperButtons>
        <LoginButton>
          <a href="#">Login</a>
        </LoginButton>
        <SignUpButton>Sign up</SignUpButton>
      </WrapperButtons>
    </StyledMobileMenu>
  );
}

export default MobileMenu;
