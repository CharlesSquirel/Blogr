import styled from "styled-components";

export const SubMenuWrapper = styled.div`
  padding: 17px 98px 25px 99px;
  background-color: var(--sub-menu);
  border-radius: 5px;
  width: 80%;
  height: 150px;
`;

export const SubMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  li {
    color: var(--text-primary);
    font-weight: 600;
    line-height: 28px;
  }
`;