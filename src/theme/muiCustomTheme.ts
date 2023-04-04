import { createTheme, PaletteColorOptions } from "@mui/material";



declare module "@mui/material/styles" {
    interface Palette {
        tertiary: string;
        quartiary: string;
        blue: string;
        brown: string;
        dark: string;
        light: string;
    }  
    interface PaletteOptions {
        tertiary: PaletteColorOptions | undefined;
        quartiary: PaletteColorOptions | undefined;
        blue: PaletteColorOptions | undefined;
        brown: PaletteColorOptions | undefined;
        dark: PaletteColorOptions | undefined;
        light: PaletteColorOptions | undefined;
    }
}

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        // short: true;
        // long: true;
    }
    interface ButtonPropsColorOverrides {
        tertiary: true;
        blue: true;
        brown: true;
        dark: true;
        light: true;
        quartiary: true;
    }

}

declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides {
      tertiary: true;
      blue: true;
      brown: true;
      dark: true;
      light: true;
      quartiary: true;
  }
}

declare module '@mui/material/Chip' {
  interface ChipPropsColorOverrides {
      tertiary: true;
      blue: true;
      brown: true;
      dark: true;
      light: true;
      quartiary: true;
  }
}

declare module '@mui/material/SvgIcon' {
  interface SvgIconPropsColorOverrides {
      tertiary: true;
      blue: true;
      brown: true;
      dark: true;
      light: true;
  }
}

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true; 
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true; 
  }
}

const { palette } = createTheme();

export const muiCustomTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1400
    },
  },
  palette: {
    primary: {
      main:'#26353F',
      // dark:,
      light:'#425E72',
      contrastText:'#FEF8EC',
    },
    secondary: {
      main:'#008F75',
      // dark:,
      light: '#96D1C6',
      contrastText: '#FEF8EC',
    },
    tertiary: palette.augmentColor({
        color: {
            main:'#EF7D00',
            // dark:,
            light: '#F99C36',
            contrastText: '#252525',
        }
    }),
    quartiary: palette.augmentColor({
        color: {
            main:'#00A75F',
            // dark:,
            light: '#07C058',
            contrastText: '#252525',
        }
    }),
    blue: palette.augmentColor({
        color: {
            main:'#03426F',
            // dark:,
            light: '#2A6996',
            contrastText: '#FEF8EC',
        }
    }),
    brown: palette.augmentColor({
        color: {
            main:'#AE7131',
            // dark:,
            //light:,
            contrastText: '#FEF8EC',
        }
    }),
    dark: palette.augmentColor({
        color: {
            main:'#252525',
            // dark:,
            //light:,
            contrastText: '#FEF8EC',
        }
    }),
    light: palette.augmentColor({
        color: {
            main:'#F0F0F0',
            // dark:,
            //light:,
            contrastText: '#252525',
        }
    }),
    error: {
      main:'#FF5500',
      // dark:,
      // light:,
      //contrastText:,
    },
    warning: {
      main: '#F5B544',
      // dark:,
      // light:,
      //contrastText:,
    },
    info: {
        main: '#0052D9',
        //dark:,
        light:'#0B6DB3',
        contrastText: '#FFFFFF',
     },
    success: {
      main: '#75D873',
      // dark:,
      // light:,
      //contrastText:,
    },
  },
  components: {
    MuiTextField:{
      styleOverrides: {
        root: {
            width: "100%" ,
          '& fieldset':{
            borderRadius: 5,
            borderColor: '#e6e8ec',
          }
        },
      },
    },
    MuiOutlinedInput:{
        styleOverrides: {
            root: {
                borderRadius: 5,
                borderColor: '#e6e8ec',
                '& fieldset':{
                    borderRadius: 5,
                    borderColor: '#e6e8ec',
                }
            }
        }
    },
    MuiButton:{
        styleOverrides:{
            root: {
                width: '100%',
                height: '50px',
            },
        },
        variants: [
            {
              props: { variant: 'contained' },
              style: {
                borderRadius: 5,
              },
            },
            {
                props: { variant: 'outlined' },
                style: {
                  borderRadius: 5,
                },
            }
        ]
    },
    MuiButtonBase:{
      styleOverrides:{
        root:{
            
        }
      }
    },
    MuiBottomNavigation:{
      styleOverrides:{
        root:{
          padding: '10px',
        }
      }
    },
    MuiBottomNavigationAction:{
      styleOverrides:{
        root:{
          color: '#F9F9F9',
          fontSize: '1.5rem',
          '&.Mui-selected': {
            color: "#009076",
            backgroundColor: "#F9F9F9",
          }
        }
      }
    }
  }
})
