import { SubMenuWrapper, SubMenuList } from "./StyledMobileSubMenu";
const MobileSubMenu: React.FC = () => {
  return (
    <SubMenuWrapper>
      <SubMenuList>
        <li>Contact</li>
        <li>Newsletter</li>
        <li>Linkedin</li>
      </SubMenuList>
    </SubMenuWrapper>
  );
}

export default MobileSubMenu;
