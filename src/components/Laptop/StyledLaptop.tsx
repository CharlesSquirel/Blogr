import styled from "styled-components";

export const StyledLaptop = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 123px;
  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobileTablet}) {
    flex-direction: column;
    gap: 46px;
  }
  @media (${({ theme }) => theme.breakpoints.tabletDesign}) {
    align-items: center;
  }
`;

export const StyledImg = styled.div`
  width: 891px;
  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobileDesign}) {
    width: 404px;
    height: 326px;
  }
`;
