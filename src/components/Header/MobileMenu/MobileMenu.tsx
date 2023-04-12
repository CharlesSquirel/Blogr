import angleDown from "./angle-down copy.svg";
import MobileSubMenu from "./MobileSubMenu";
import { LoginButton, MobileLinks, SignUpButton, StyledMobileMenu, WrapperButtons } from "./StyledMobileMenu";
import { useState } from "react";
function MobileMenu() {
  const [isSubMenuActive, setIsSubMenuActive] = useState<boolean>(false);
  const handleClick = () => {
    setIsSubMenuActive(!isSubMenuActive);
  }
  return (
    <StyledMobileMenu>
      <MobileLinks>
        <li>
          Product <img className="angle" src={angleDown} alt="" />
        </li>
        <li>
          Company <img className="angle" src={angleDown} alt="" />
        </li>
        <li onClick={handleClick}>
          Connect <img className="angle" src={angleDown} alt="" />
        </li>
      </MobileLinks>
      {isSubMenuActive && <MobileSubMenu />}
      <WrapperButtons>
        <LoginButton>
          <a className="btn-login" href="#">
            Login
          </a>
        </LoginButton>
        <SignUpButton>Sign up</SignUpButton>
      </WrapperButtons>
    </StyledMobileMenu>
  );
}

export default MobileMenu;
