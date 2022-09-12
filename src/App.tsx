import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./styles/globalStyle";

// Styled Components
import { Container } from "./styles/globalStyles";

// Components
import { Comments, CommentInput } from "./components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <main>
        <Container>
          <Comments />
          <CommentInput />
        </Container>
      </main>
    </ThemeProvider>
  );
}

export default App;
