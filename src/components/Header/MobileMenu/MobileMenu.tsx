import angleDown from "./angle-down copy.svg";
import { LoginButton, MobileLinks, SignUpButton, StyledMobileMenu, SubMenuList, SubMenuWrapper, WrapperButtons } from "./StyledMobileMenu";
function MobileMenu() {
  return (
    <StyledMobileMenu>
      <MobileLinks>
        <li>Product <img className="angle" src={angleDown} alt="" /></li>
        <li>Company <img className="angle" src={angleDown} alt="" /></li>
        <li>Connect <img className="angle" src={angleDown} alt="" /></li>
      </MobileLinks>
      <SubMenuWrapper>
        <SubMenuList>
          <li>Contact</li>
          <li>Newsletter</li>
          <li>Linkedin</li>
        </SubMenuList>
      </SubMenuWrapper>
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
