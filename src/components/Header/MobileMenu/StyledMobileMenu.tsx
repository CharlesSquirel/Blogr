import styled from "styled-components";

export const StyledMobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  position: absolute;
  top: 135px;
  left: 10%;
  width: 80%;
  background-color: var(--white);
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.243444);
  border-radius: 5px;
  padding: 24px;
  .angle {
    width: 8px;
    height: 4px;
  }
`;

export const MobileLinks = styled.ul`
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: var(--text-primary);
`;

export const SubMenuWrapper = styled.div`

  padding: 17px 98px 25px 99px;
  background-color: #f3f3f3;
  border-radius: 5px;
  width: 276px;
  height: 150px;
`;

export const SubMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  li {
    color: var(--text-primary);
  }
`;

export const LoginButton = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: var(--text-primary);
`;

export const SignUpButton = styled.button`
  width: 137px;
  height: 48px;
  background: linear-gradient(135deg, #ff8f71 0%, #ff3e55 100%);
  border-radius: 28px;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  color: var(--white);
`;

export const WrapperButtons = styled.div`
  display: flex;
  flex-direction: column;
`;
