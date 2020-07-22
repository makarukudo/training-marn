import React from 'react';
import { ThemeProvider, CSSReset } from "@chakra-ui/core";

const App = ({ Component, pageProps }) => (
  <ThemeProvider>
    <CSSReset />
    <Component {...pageProps} />
  </ThemeProvider>
)

export default App
