import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./styles/globalStyle";

// Styled Components
import { Container } from "./styles/globalStyles";

// Components
import { Comments } from "./components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <main>
        <Container>
          <Comments />
        </Container>
      </main>
    </ThemeProvider>
  );
}

export default App;
