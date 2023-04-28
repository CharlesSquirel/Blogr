interface ThemeProps {
  maxMobileDesign: string;
  tabletDesign: string;
  hugeScreens: string;
  maxMobileFooter: string;
}

interface BreakProps {
  breakpoints: ThemeProps;
}

export const theme: BreakProps = {
  breakpoints: {
    maxMobileDesign: "800px",
    tabletDesign: "801px <= width <= 1400px",
    hugeScreens: "2000px",
    maxMobileFooter: "1070px",
  },
};
