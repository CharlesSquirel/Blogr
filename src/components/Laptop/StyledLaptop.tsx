import styled from "styled-components";

export const StyledLaptop = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 123px;
  @media (${({ theme }) => theme.breakpoints.tabletDesign}) {
    flex-direction: column;
    align-items: center;
    gap: 46px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobileDesign}) {
    flex-direction: column;
    gap: 46px;
  }
`;

export const StyledImg = styled.div`
  width: 891px;
  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobileDesign}) {
    width: 404px;
    height: 326px;
  }
`;
