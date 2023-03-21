import styled from "styled-components";

export const StyledTabletMenu = styled.div`
  position: absolute;
  left: 195px;
  top: 34px;
  width: 168px;
  height: 147px;
  background-color: var(--white);
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.243444);
  border-radius: 5px;
  padding: 24px;
`;

export const LinkList = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const Link = styled.li`
  color: var(--nav-mobile);
  font-size: 15px;
  line-height: 33px;
  font-family: "Ubuntu", sans-serif;
  &:hover {
    font-weight: 700;
  }
`;
