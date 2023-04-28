import styled from "styled-components";

export const StyledMobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  position: absolute;
  top: 135px;
  left: 5%;
  width: 90%;
  background-color: var(--white);
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.243444);
  border-radius: 5px;
  padding: 24px;
`;

export const StyledAngle = styled.img`
  width: 8px;
  height: 4px;
`;

export const MobileLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  li {
    display: flex;
    align-items: center;
    gap: 3px;
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    color: var(--text-primary);
  }
`;

export const LoginButton = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: var(--text-primary);
  a {
    line-height: 18px;
    font-family: "Ubuntu", sans-serif;
  }
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
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 80%;
  &::after {
    content: "";
    position: absolute;
    top: -10px;
    width: 100%;
    height: 1px;
    background-color: var(--sub-menu);
  }
`;
