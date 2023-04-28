import styled from "styled-components";
// max-width: 1070px

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 70px 167px;
  border-radius: 0px 100px 0px 0px;
  background-color: var(--footer-bg);
  font-family: "Ubuntu", sans-serif;
  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobileFooter}) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 72px;
  }
`;

export const StyledFooterNav = styled.nav`
  display: flex;
  gap: 185px;
  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobileFooter}) {
    flex-direction: column;
    gap: 40px;
  }
`;

export const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 21px;
  font-weight: 500;
  color: var(--white);
  li {
    font-weight: 400;
    font-size: 15px;
    line-height: 33px;
    opacity: 0.75;
    :hover {
      text-decoration: underline;
      opacity: 1;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.maxMobileFooter}) {
      text-align: center;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobileFooter}) {
    align-items: center;
  }
`;
