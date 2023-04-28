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
  padding: 24px;
  border-radius: 5px;
  background-color: var(--white);
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.243444);
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
    color: var(--text-primary);
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
  }
`;

export const LoginButton = styled.p`
color: var(--text-primary);
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  a {
    font-family: "Ubuntu", sans-serif;
    line-height: 18px;
  }
`;

export const SignUpButton = styled.button`
  width: 137px;
  height: 48px;
  border-radius: 28px;
  background: linear-gradient(135deg, #ff8f71 0%, #ff3e55 100%);
  color: var(--white);
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
`;

export const WrapperButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  position: relative;
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
