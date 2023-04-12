import styled from "styled-components";

export const StyledDesigned = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  color: var(--text-primary);
  margin-top: 190px;
  gap: 90px;
  width: 100%;
  height: 882px;
  @media (${({theme}) => theme.breakpoints.tabletDesign}){
    gap: 780px;
    margin-top: 100px;
    align-items: center;
  }
  @media (max-width: ${({theme}) => theme.breakpoints.maxMobileDesign}) {
    margin-top: 100px;
    gap: 410px;
    height: 1086px;
    align-items: center;
  }
`;

export const StyledTitle = styled.h2`
  font-size: 64px;
  line-height: 61px;
  text-align: center;
  letter-spacing: -1.2px;
  font-weight: 600;
  @media (${({theme}) => theme.breakpoints.tabletDesign}){
    font-size: 50px;
  }
  @media (max-width: ${({theme}) => theme.breakpoints.maxMobileDesign}) {
    font-size: 28px;
    line-height: 43px;
    letter-spacing: -0.84px;
  }
`;

export const StyledDesignedTextWrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 64px;
  @media (max-width: ${({theme}) => theme.breakpoints.maxMobileDesign}) {
    gap: 40px;
  }
`;

export const StyledDesignedTextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 540px;
  @media (max-width: ${({theme}) => theme.breakpoints.maxMobileDesign}) {
    max-width: 318px;
  }
`;

export const StyledSubTitle = styled.h3`
  font-size: 35px;
  line-height: 28px;
  font-weight: 600;
  @media (max-width: ${({theme}) => theme.breakpoints.maxMobileDesign}) {
    font-size: 28px;
    line-height: 32px;
  }
`;

export const StyledDesc = styled.p`
  font-weight: 400;
  line-height: 28px;
  color: var(--text-secondary);
  letter-spacing: 0.5px;
`;

export const StyledFlexRow = styled.div`
  display: flex;
  padding-left: 160px;
  justify-content: space-between;
  gap: 125px;
  @media (${({theme}) => theme.breakpoints.tabletDesign}){
    padding-left: 0;
  }
  @media (max-width: ${({theme}) => theme.breakpoints.maxMobileDesign}) {
    padding-left: 0;
    gap: 0;
  }
`;

export const StyledBackgroundImg = styled.div`
  position: absolute;
  top: -10%;
  right: -12%;
  width: 880px;
  height: 882px;
  @media (${({theme}) => theme.breakpoints.tabletDesign}){
    width: 700px;
    height: 700px;
    left: 50%;
    transform: translateX(-50%);
    right: 0;
    top: 8%;
  }
  @media (max-width: 800px) {
    width: 326px;
    height: 326px;
    right: 0;
    left: 50%;
    top: 8%;
    transform: translateX(-50%);
  }
`;
