import styled from "styled-components";

export const StyledTabletMenu = styled.div`
  position: absolute;
  left: 195px;
  top: 34px;
  width: 168px;
  height: 147px;
  padding: 24px;
  border-radius: 5px;
  background-color: var(--white);
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.243444);
`;

export const LinkList = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const Link = styled.li`
  font-family: "Ubuntu", sans-serif;
  font-size: 15px;
  color: var(--nav-mobile);
  line-height: 33px;
  &:hover {
    font-weight: 700;
  }
`;
