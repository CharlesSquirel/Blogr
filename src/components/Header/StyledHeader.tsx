import bg from "../../images/bg.svg";
import styled from "styled-components";

export const StyledHeader = styled.header`
  position: relative;
  height: 600px;
  padding: 63px 161px 155px 167px;
  border-radius: 0px 0px 0px 100px;
  background: url(${bg}) no-repeat;
  background-size: cover;
  color: var(--white);
  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobileDesign}) {
    padding: 56px 24px;
  }
`;

export const StyledNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 40px;
`;

export const FlexRow = styled.div`
  display: flex;
  align-items: center;
  gap: 64px;
`;

export const StyledLogo = styled.div`
  width: 101px;
  height: 40px;
`;

export const StyledNavDesktop = styled.nav`
  position: relative;
  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobileHeader}) {
    display: none;
  }
`;

export const StyledNavDesktopList = styled.ul`
  display: flex;
  gap: 32px;
  & li {
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: "Ubuntu", sans-serif;
    font-weight: 700;
    line-height: 18px;
    opacity: 0.75;
    transition: all 0.2s ease-in-out;
    &:hover {
      opacity: 1;
    }
  }
`;

export const StyledAngle = styled.img`
  width: 8px;
  height: 4px;
  color: var(--white);
`;

export const StyledLoginBox = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  a {
    font-weight: 700;
    font-family: "Ubuntu", sans-serif;
    line-height: 18px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobileHeader}) {
    display: none;
  }
`;

export const StyledButtonWhite = styled.button`
  width: 137px;
  height: 48px;
  border-radius: 28px;
  font-family: "Ubuntu", sans-serif;
  font-weight: 700;
  line-height: 18px;
  color: var(--btn-hover);
  transition: all 0.3s ease-in-out;
  &:hover {
    background: var(--btn-hover);
    color: var(--white);
  }
`;

export const HamburgerIcon = styled.div`
  width: 32px;
  height: 18px;
  cursor: pointer;
  @media (min-width: ${({ theme }) => theme.breakpoints.maxMobileHeader}) {
    display: none;
  }
`;

export const WrapperTitle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  padding-top: 130px;
  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobileDesign}) {
    padding-top: 108px;
  }
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 64px;
  letter-spacing: -1.92px;
  text-align: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobileDesign}) {
    font-size: 36px;
    line-height: 55px;
    letter-spacing: -1.08px;
  }
`;

export const SubTitle = styled.h2`
  font-size: 20px;
  text-align: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobileDesign}) {
    font-size: 18px;
    line-height: 28px;
  }
`;

export const StyledButtonTransparent = styled(StyledButtonWhite)`
  border: 1px solid var(--white);
  background: transparent;
  color: var(--white);
  transition: all 0.3s ease-in-out;
  &:hover {
    background: var(--white);
    color: var(--btn-hover);
  }
`;

export const StyledButtonBox = styled.div`
  display: flex;
  gap: 16px;
`;
