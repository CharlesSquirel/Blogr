import styled from "styled-components";

export const StyledPhones = styled.section`
  display: flex;
  justify-content: center;
  gap: 98px;
  height: 400px;
  margin-bottom: 116px;
  padding: 0 165px;
  border-radius: 0px 100px;
  background: linear-gradient(135deg, #2d2e40 0%, #3f4164 100%);
  @media (min-width: ${({ theme }) => theme.breakpoints.hugeScreens}) {
    margin-bottom: 400px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobileTablet}) {
    flex-direction: column;
    align-items: center;
    position: relative;
  }
  @media (${({ theme }) => theme.breakpoints.tabletDesign}) {
    position: relative;
    gap: 0;
    width: 100%;
    height: 490px;
    margin-top: 600px;
    padding: 0;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobileDesign}) {
    position: relative;
    gap: 46px;
    height: 625px;
    padding: 0 24px 109px 24px;
    margin-top: 200px;
  }
`;

export const StyledImg = styled.div`
  position: relative;
  width: 472px;
  height: 499px;
  @media (min-width: ${({ theme }) => theme.breakpoints.hugeScreens}) {
    width: 772px;
    height: 799px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobileTablet}) {
    position: absolute;
    right: 50%;
    left: 50%;
    transform: translateX(-50%);
  }
  @media (${({ theme }) => theme.breakpoints.tabletDesign}) {
    top: -42px;
    width: 328px;
    height: 347px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobileDesign}) {
    top: 0;
    height: 347px;
    width: 328px;
  }
  img {
    position: absolute;
    bottom: 57px;
    @media (min-width: ${({ theme }) => theme.breakpoints.hugeScreens}) {
      bottom: 87px;
    }
  }
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
    padding-top: 190px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.hugeScreens}) {
    width: 840px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobileDesign}) {
    width: 327px;
    padding-top: 320px;
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
  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobileDesign}) {
    text-align: center;
  }
`;

export const StyledDescription = styled.p`
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 0.5px;
  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobileTablet}) {
    text-align: center;
  }
`;
