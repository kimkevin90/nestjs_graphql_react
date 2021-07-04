import { createMuiTheme } from "@material-ui/core";

const PALETTE = {
  BACKGROUNDS: {
    DARK: "#373d53",
    DARKER: "#272930",
    DARKERHOVER: "#292E41",
    DEFAULT: "#FEFEFE",
    HOVER_DEFAULT: "#43475B",
    ACTIVE_DEFAULT: "#2F3240",
    DARK_HOVER: "#2b2f3e",
    DARK_ACTIVE: "#23252f",
    DARK_HOVER_LIGHTER: "#3c4256",
    DARK_ACTIVE_LIGHTER: "#43495f",
    PRIMARY: "#ffeac8",
  },
  PRIMARY: {
    MAIN: "#eee",
  },
  SECONDARY: {
    MAIN: "#E0AF5E",
  },
  DISABLED: "#CCC",
};

const muiDefaultTheme = createMuiTheme();

export const darkTheme = {
  typography: {
    subtitle1: {
      fontSize: "1.125rem",
      lineHeight: 1.3,
    },
    subtitle2: {
      fontSize: "1rem",
      lineHeight: 1.2,
    },
    allVariants: {
      display: "flex",
      alignItems: "center",
      whiteSpace: "pre",
      fontWeight: "300",
      fontFamily: "'Nanum Square', 'Noto Sans KR', sans-serif",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1080,
      lg: 1640,
      xl: 1920,
    },
  },
  palette: {
    type: "dark",
    primary: {
      main: PALETTE.PRIMARY.MAIN,
      contrastText: "#000000",
    },
    secondary: {
      main: PALETTE.SECONDARY.MAIN,
    },
    background: {
      paper: "#FFFFFF",
      default: PALETTE.BACKGROUNDS.DEFAULT,
    },
    success: {
      main: "#56B4E8",
      hover: "#56B4E8",
    },
    warning: {
      main: "#EFE341",
    },
    error: {
      main: "#9D4B0B",
      hover: "#9D4B0B",
    },
    available: {
      main: "white",
      background: "rgba(255, 255, 255, 0.4)",
    },
    info: {
      main: "#0072B1",
    },
    disabled: {
      main: PALETTE.DISABLED,
    },
    blurred: {
      main: "rgba(255, 255, 255, 0.3)",
    },
    indicator: {
      main: "rgba(255, 255, 255, 0.55)",
    },
    default: {
      main: "white",
    },
    border: {
      default: "rgba(255, 255, 255, 0.15)",
    },
  },
  border: {
    default: "1px solid rgba(255, 255, 255, 0.15)",
  },
  background: {
    dark: PALETTE.BACKGROUNDS.DARK,
    darkHover: PALETTE.BACKGROUNDS.DARK_HOVER,
    darkActive: PALETTE.BACKGROUNDS.DARK_ACTIVE,
    default: PALETTE.BACKGROUNDS.DEFAULT,
    light: "#696e81",
    hoverDefault: PALETTE.BACKGROUNDS.HOVER_DEFAULT,
    activeDefault: PALETTE.BACKGROUNDS.ACTIVE_DEFAULT,
    primary: PALETTE.BACKGROUNDS.PRIMARY,
  },
};

export const lightTheme = {
  typography: {
    subtitle1: {
      fontSize: "1.125rem",
      lineHeight: 1.3,
    },
    subtitle2: {
      fontSize: "1rem",
      lineHeight: 1.2,
    },
    allVariants: {
      display: "flex",
      alignItems: "center",
      whiteSpace: "pre",
      fontWeight: "300",
      color: "black",
      fontFamily: "'Nanum Square', 'Noto Sans KR', sans-serif",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1080,
      lg: 1640,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: "#000000",
    },
  },
};

export const muiLightTheme = createMuiTheme(lightTheme);

export const muiDarkTheme = createMuiTheme(darkTheme);

export const languageFontFamilies = {
  "ko-KR": {
    fontFamily: "'Nanum Square', sans-serif",
    title: "'Mate SC', 'Nanum Myeongjo'",
    fontWeightRegular: 300,
  },
  en: {
    fontFamily: "'Nanum Square', sans-serif",
    title: "'Mate SC', 'Nanum Myeongjo'",
  },
  jp: {
    fontFamily: "'Noto Sans KR', sans-serif",
    title: muiDefaultTheme.typography.fontFamily,
  },
  default: {
    fontFamily: muiDefaultTheme.typography.fontFamily,
    title: muiDefaultTheme.typography.fontFamily,
  },
};

export const MUITheme = muiLightTheme;
