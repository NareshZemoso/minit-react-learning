/**
 * @author 
 */

import { createTheme, responsiveFontSizes } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    greyScale: Palette['primary'];
  }
  interface PaletteOptions {
    greyScale: PaletteOptions['primary'];
  }
  interface PaletteColor {
    semilight?: string;
    darker?: string;
    normal?: string;
  }
  interface SimplePaletteColorOptions {
    semilight?: string;
    darker?: string;
    normal?: string;
  }
  interface TypographyVariants {
    captionBold: React.CSSProperties;
    body3: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    captionBold?: React.CSSProperties;
    body3?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    captionBold: true;
    body3: true;
  }
}

const theme = createTheme({
  components: {
    MuiAvatar: {
      styleOverrides: {
        colorDefault: ({ ownerState }) => ({
          marginRight: '10px',
          ...(ownerState.alt === 'Future' && {
            backgroundColor: '#F7F7F7',
            color: '#373C38',
          }),
          ...(ownerState.alt === 'Current' && {
            backgroundColor: '#4ABAAD',
            color: '#FFF',
          }),
        }),
        img: ({ ownerState }) => ({
          ...(ownerState.alt === 'Past' && {
            backgroundColor: '#4ABAAD',
            color: '#FFF',
          }),
        }),
      },
    },
    MuiTypography: {
      styleOverrides: {
        subtitle1: ({ ownerState }) => ({
          marginTop: '8px',
          ...(ownerState.align === 'justify' && {
              color: `#373C38`,
            } &&
            ownerState.color === 'Current' && {
              color: '#4ABAAD',
            }),
        }),
        h6:({
          '&:hover': {
            color: '#000099',
          }
        })
        
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.id === 'outlined-basic' && {
            border: 'none',
          }),
        }),
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        avatar: {
          height: '40px',
          width: '60px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          boxShadow: 'none',
        },
        containedPrimary: ({ ownerState }) => ({
          ...(ownerState.size === 'medium' && {
            width: '140px',
            height: '46px',
            textTransform: 'none',
            borderRadius: '8px',
            '&:hover': {
              backgroundColor: '#4ABAAD',
            },
          }),
          ...(ownerState.size === 'small' && {
            width: '100px',
            height: '32px',
            textTransform: 'none',
            borderRadius: '8px',
            '&:hover': {
              backgroundColor: '#4ABAAD',
            },
          }),
          ...(ownerState.size === 'large' && {
            height: '40px',
            width: '100px',
            textTransform: 'none',
            borderRadius: '5px',
            '&:hover': {
              backgroundColor: '#4ABAAD',
            },
          }),
        }),
        containedSecondary: ({ ownerState }) => ({
          ...(ownerState.size === 'medium' && {
            width: '140px',
            height: '46px',
            textTransform: 'none',
            borderRadius: '8px',
            '&:hover': {
              backgroundColor: '#4ABAAD',
            },
          }),
          ...(ownerState.size === 'small' && {
            width: '100px',
            height: '32px',
            textTransform: 'none',
            borderRadius: '8px',
            '&:hover': {
              backgroundColor: '#4ABAAD',
            },
          }),
          ...(ownerState.size === 'large' && {
            height: '40px',
            width: '100px',
            textTransform: 'none',
            borderRadius: '5px',
            '&:hover': {
              backgroundColor: '#4ABAAD',
            },
          }),
        }),
        outlinedPrimary: ({ ownerState }) => ({
          ...(ownerState.size === 'medium' && {
            width: '140px',
            height: '46px',
            textTransform: 'none',
            borderRadius: '8px',
            '&:hover': {
              backgroundColor: 'white',
            },
          }),
          ...(ownerState.size === 'large' && {
            width: '140px',
            height: '40px',
            textTransform: 'none',
            borderRadius: '5px',
            color:'#3333ff',
            '&:hover': {
              backgroundColor: 'white',
            },
          }),
          ...(ownerState.size === 'small' && {
            width: '156px',
            height: '159px',
            textTransform: 'none',
            borderRadius: '0',
            '&:hover': {
              backgroundColor: 'white',
            },
          }),
        }),
        outlinedSecondary: ({ ownerState }) => ({
          ...(ownerState.size === 'medium' && {
            width: '100px',
            height: '32px',
            textTransform: 'none',
            borderRadius: '12px',
            '&:hover': {
              backgroundColor: 'white',
            },
          }),
          ...(ownerState.size === 'large' && {
            width: '140px',
            height: '46px',
            textTransform: 'none',
            borderRadius: '12px',
            '&:hover': {
              backgroundColor: 'white',
            },
          }),
          ...(ownerState.size === 'small' && {
            width: '92px',
            height: '32px',
            textTransform: 'none',
            borderRadius: '12px',
            '&:hover': {
              backgroundColor: 'white',
            },
          }),
        }),
        textError: ({ ownerState }) => ({
          width: '80px',
          '&:hover': {
            backgroundColor: 'none',
          },
        }),
        textPrimary: ({ ownerState }) => ({
          ...(ownerState.size === 'medium' && {
            // width: '80px',
            height: '16px',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: 'none',
            },
          }),
          ...(ownerState.size === 'small' && {
            width: '36px',
            height: '16px',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: 'white',
            },
          }),
          ...(ownerState.size === 'large' && {
            height: '16px',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: 'white',
            },
          }),
        }),
      },
    },
  },
  palette: {
    primary: {
      main: '#3333ff',
      normal: '#1a1aff',
      dark: '#000080',
      light: '#e6e6ff',
      semilight: '#ccccff',
      contrastText: '#6666ff',
      
    },
    secondary: {
      main: '#ff9933',
      light: '#ffffff',
      dark: '#b35900',
      darker: '#663300',    
      semilight: '#ffb366',
      contrastText: '#ffa64d',
    },
    greyScale: {
      main: '#E9EBE9',
      light: '#F7F7F7',
      dark: '#D6D6D6',
      contrastText: '#373C38',
    },
    info: {
      main: '#B2FFF6',
      light: '#E8FFFC',
      dark: '#77EDDF',
      normal: '#E5E5E5',
      semilight: 'rgba(125, 125, 125, 0.12)',
    },
    warning: {
      main: '#ED8F02',
      dark: '#FF725E',
    },
    success: {
      main: '#EFFEFF',
      dark: '#E9FFF4',
    },
    error: {
      main: '#30A193',
    },
  },
  typography: {
    h1: {
      fontSize: 32,
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h2: {
      fontSize: 20,
      fontWeight: 500,
      lineHeight: 1.875,
    },
    h3: {
      fontSize: 20,
      fontWeight: 600,
      lineHeight: 1.875,
    },
    h4: {
      fontSize: 20,
      fontWeight: 600,
      lineHeight: 1.875,
    },
    h5: {
      fontSize: 24,
      fontWeight: 400,
      lineHeight: 1.875,
      color:'#343446',
      fontFamily: 'Graphik',
    
    },
    h6: {
      fontSize: 24,
      fontWeight: 400,
      lineHeight: 1.875,
      fontFamily: 'Graphik',
      color:'#4B4B60'
    
    },
    subtitle1: {
      fontSize: 20,
      fontWeight: 500,
      lineHeight: 2,
      fontFamily: 'Graphik',
      color:'#343446' 
    },
    subtitle2: {
      fontSize: 16,
      fontWeight: 500,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: 16,
      fontWeight: 500,
      lineHeight: 1.375,
      fontFamily: 'Graphik',
      color:'#343446'
    },
    body2: {
      fontSize: 16,
      fontWeight: 400,
      lineHeight: 1.375,
      fontFamily: 'Graphik',
      color:'#000000'
    },
    body3: {
      fontSize: 48,
      fontWeight: 600,
      lineHeight: 3,
      fontFamily: 'Montserrat',
    },
    caption: {
      fontSize: 14,
      fontWeight: 500,
      lineHeight: 1,
      fontFamily: 'Graphik',
      color:'#7D7D89',
    },
    captionBold: {
      fontSize: 16,
      fontWeight: 500,
      lineHeight: 1,
      fontFamily: 'Graphik',
      color:'#343446'
    },
    overline: {
      fontSize: 12,
      fontWeight: 400,
      lineHeight: 1.875,
      fontFamily: 'Graphik',
      color:'#20B03F'
    
    },
   
    fontFamily: [
      '"Montserrat"',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  spacing: (factor: number) => `${0.25 * factor}rem`,
});

// for responsiveness
const responsiveTheme = responsiveFontSizes(theme);

export default responsiveTheme;