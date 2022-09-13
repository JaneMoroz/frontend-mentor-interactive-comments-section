import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./styles/globalStyle";

// Provider
import { Provider } from "react-redux";
import { store } from "./store";

// Styled Components
import { Container } from "./styles/globalStyles";

// Components
import { Comments, CommentInput } from "./components";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <main>
          <Container>
            <Comments />
            <CommentInput />
          </Container>
        </main>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
