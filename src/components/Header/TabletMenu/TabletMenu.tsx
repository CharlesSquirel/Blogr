import { Link, LinkList, StyledTabletMenu } from "./StyledTabletMenu";

function TabletMenu() {
  return (
    <StyledTabletMenu>
      <LinkList>
        <Link>Contact</Link>
        <Link>Newsletter</Link>
        <Link>Linkedin</Link>
      </LinkList>
    </StyledTabletMenu>
  );
}

export default TabletMenu;
