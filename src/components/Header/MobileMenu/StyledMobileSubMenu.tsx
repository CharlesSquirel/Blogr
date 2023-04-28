import styled from "styled-components";

export const SubMenuWrapper = styled.div`
  width: 80%;
  height: 150px;
  padding: 17px 98px 25px 99px;
  border-radius: 5px;
  background-color: var(--sub-menu);
`;

export const SubMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  li {
    font-weight: 600;
    color: var(--text-primary);
    line-height: 28px;
  }
`;
