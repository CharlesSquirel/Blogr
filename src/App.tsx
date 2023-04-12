import Header from "./components/Header/Header";
import { GlobalStyle } from "./components/GlobalStyle/GlobalStyle";
import Designed from "./components/Designed/Designed";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/GlobalStyle/theme";

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Designed/>
      </ThemeProvider>
    </>
  );
}

export default App;
