import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import { Router } from './Router';
import { CartContextProvider } from "./context/CartContext";
import { GlobalStyle } from './styles/global';
import { defautTheme } from './styles/themes/default';

function App() {
  return (
    <CartContextProvider>
      <ThemeProvider theme={defautTheme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </CartContextProvider>
  );
}

export default App
