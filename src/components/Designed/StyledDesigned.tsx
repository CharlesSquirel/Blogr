import styled from "styled-components";

export const StyledDesigned = styled.section`
  display: flex;
  flex-direction: column;
  gap: 90px;
  position: relative;
  width: 100%;
  height: 882px;
  margin-top: 190px;
  color: var(--text-primary);
  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobileTablet}) {
    align-items: center;
  }
  @media (${({ theme }) => theme.breakpoints.tabletDesign}) {
    gap: 780px;
    margin-top: 100px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobileDesign}) {
    gap: 410px;
    margin-top: 100px;
    height: 1086px;
  }
`;

export const StyledTitle = styled.h2`
  font-size: 64px;
  font-weight: 600;
  line-height: 61px;
  text-align: center;
  letter-spacing: -1.2px;
  @media (${({ theme }) => theme.breakpoints.tabletDesign}) {
    font-size: 50px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobileDesign}) {
    font-size: 28px;
    line-height: 43px;
    letter-spacing: -0.84px;
  }
`;

export const StyledDesignedTextWrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 64px;
  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobileDesign}) {
    gap: 40px;
  }
`;

export const StyledDesignedTextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 540px;
  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobileDesign}) {
    max-width: 318px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobileTablet}) {
    text-align: center;
  }
`;

export const StyledSubTitle = styled.h3`
  font-size: 35px;
  font-weight: 600;
  line-height: 28px;
  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobileDesign}) {
    font-size: 28px;
    line-height: 32px;
  }
`;

export const StyledDesc = styled.p`
  font-weight: 400;
  color: var(--text-secondary);
  line-height: 28px;
  letter-spacing: 0.5px;
`;

export const StyledFlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 125px;
  padding-left: 160px;
  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobileTablet}) {
    padding-left: 0;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobileDesign}) {
    gap: 0;
  }
`;

export const StyledBackgroundImg = styled.div`
  position: absolute;
  top: -10%;
  right: -12%;
  width: 880px;
  height: 882px;
  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobileTablet}) {
    left: 50%;
    right: 0;
    top: 8%;
    transform: translateX(-50%);
  }
  @media (${({ theme }) => theme.breakpoints.tabletDesign}) {
    width: 700px;
    height: 700px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobileDesign}) {
    width: 326px;
    height: 326px;
  }
`;
