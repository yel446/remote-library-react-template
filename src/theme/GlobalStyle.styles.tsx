import { createGlobalStyle, DefaultTheme } from "styled-components";
import convertThemeColorsToRootColors, {
  TThemeColors,
} from "../utils/convertThemeColorsToRootColors";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

    *, ::after, ::before {
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
        padding: 0;
        margin: 0;
    }

    :root {
        ${({ theme }: { theme: DefaultTheme & { colors: TThemeColors } }) => {
          return convertThemeColorsToRootColors(theme.colors);
        }}
    }

`;

export default GlobalStyle;
