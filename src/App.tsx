import Header from "./components/Header/Header";
import { GlobalStyle } from "./components/GlobalStyle/GlobalStyle";
import Designed from "./components/Designed/Designed";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/GlobalStyle/theme";
import Phones from "./components/Phones/Phones";
import Laptop from "./components/Laptop/Laptop";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Designed />
        <Phones />
        <Laptop/>
      </ThemeProvider>
    </>
  );
}

export default App;
