import styled from "styled-components";

export const StyledPhones = styled.section`
  display: flex;
  justify-content: center;
  gap: 98px;
  height: 400px;
  background: linear-gradient(135deg, #2d2e40 0%, #3f4164 100%);
  border-radius: 0px 100px;
  padding: 0 165px;
  @media (${({ theme }) => theme.breakpoints.tabletDesign}) {
    flex-direction: column;
    align-items: center;
    gap: 0;
    margin-top: 600px;
    height: 625px;
    width: 100%;
    padding: 0;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.hugeScreens}) {
  }
`;

export const StyledImg = styled.div`
  width: 472px;
  height: 499px;
  position: relative;
  @media (min-width: ${({ theme }) => theme.breakpoints.hugeScreens}) {
    width: 772px;
    height: 799px;
  }
  @media (${({ theme }) => theme.breakpoints.tabletDesign}) {
    width: 328px;
    height: 347px;
  }
  img {
    position: absolute;
    bottom: 57px;
    @media (${({ theme }) => theme.breakpoints.tabletDesign}) {
      left: 50%;
      right: 50%;
      transform: translateX(-50%);
      bottom: 92px;
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.hugeScreens}) {
      bottom: 87px;
    }
  }
  /* ::before {
    content: url("bg-pattern-circles.svg");
    display: block;
    position: absolute;
    width: 1014px;
    height: 1018px;
    top: 0;
    left: 0;
    z-index: 1;
  } */
`;

export const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 540px;
  background-color: transparent;
  color: var(--white);
  @media (${({ theme }) => theme.breakpoints.tabletDesign}) {
    align-items: center;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.hugeScreens}) {
    width: 840px;
  }
`;

export const StyledTitle = styled.h2`
  font-weight: 600;
  font-size: 40px;
  line-height: 61px;
  letter-spacing: -1.2px;
  @media (min-width: ${({ theme }) => theme.breakpoints.hugeScreens}) {
    font-size: 64px;
    line-height: 61px;
    letter-spacing: -1.2px;
  }
`;

export const StyledDescription = styled.p`
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 0.5px;
  @media (${({ theme }) => theme.breakpoints.tabletDesign}) {
    text-align: center;
  }
`;
