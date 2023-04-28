import styled from "styled-components";
// max-width: 1070px

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  font-family: "Ubuntu", sans-serif;
  border-radius: 0px 100px 0px 0px;
  /* gap: 185px; */
  padding: 70px 167px;
  background-color: var(--footer-bg);
  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobileFooter}) {
    flex-direction: column;
    align-items: center;
    gap: 72px;
    justify-content: flex-start;
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
  color: var(--white);
  font-weight: 500;

  li {
    opacity: 0.75;
    font-weight: 400;
    font-size: 15px;
    line-height: 33px;

    :hover {
      opacity: 1;
      text-decoration: underline;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.maxMobileFooter}) {
      text-align: center;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobileFooter}) {
    align-items: center;
  }
`;
