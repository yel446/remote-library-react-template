import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { store } from "../store";
import { theme } from "../theme";
import { Provider } from "react-redux";
import { muiCustomTheme } from "../theme/muiCustomTheme";
import { ToastContainer } from "react-toastify";
import GlobalStyle from "../theme/GlobalStyle.styles";

type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiThemeProvider theme={muiCustomTheme}>
        <Provider store={store}>
          <GlobalStyle />
          <ToastContainer />
          <Router>{children}</Router>
        </Provider>
      </MuiThemeProvider>
    </ThemeProvider>
  );
};

export default AppProvider;
