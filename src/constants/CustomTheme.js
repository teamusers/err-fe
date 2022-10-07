import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
// eslint-disable-next-line import/no-cycle

export const primaryColor = "#d40511";
export const secondaryColor = "#333330";
export const defaultBorderColor = "#CCCCCC";
export const defaultContainerColor = "#F2F2F2";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
    error: {
      main: red.A400,
    },
  },
});

const CustomTheme = createTheme(theme, {
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ".download-link": {
          color: "black",
          textDecoration: "none",
        },
        "body": {
          background: "white",
          [theme?.breakpoints.up("md")]: {
            background: "#F5F5F5",
          },
        },
        ".subtitle3": {
          fontSize: "0.625rem!important",
          color: `${defaultBorderColor}`,
        },
        "html": {
          background: "white",
          [theme?.breakpoints.up("md")]: {
            background: "#F5F5F5",
          },
        },
        ".text-green": {
          color: "#007B38!important",
        },
        ".text-grey": {
          color: "#707070",
        },
        ".pointer": {
          cursor: "pointer",
        },
        ".text-bold": {
          fontWeight: "bold!important",
        },
        ".mt-1": {
          marginTop: ".5rem",
        },
        ".mt-2": {
          marginTop: "1.5rem",
        },
        ".mb-1": {
          marginBottom: ".5rem",
        },

        ".mb-2": {
          marginBottom: "1.5rem",
        },
        ".display-block": {
          display: "block",
        },
        ".font-12": {
          fontSize: "0.75rem!important",
        },
        ".flickity-prev-next-button": {
          width: "30px",
          height: "30px",
          top: "55%",
        },
        ".flickity-prev-next-button.previous": {
          left: -20,
        },
        ".flickity-prev-next-button.next": {
          right: -20,
        },
        ".flickity-button": {
          background: "transparent",
        },
        ".SnackbarContainer-center": {
          transform: "initial!important",
          left: "initial!important",
        },
        ".SnackbarContainer-root": {
          "top": `54px!important`,
          "zIndex": "1000!important",
          "maxWidth": "100vw!important",
          ".MuiCollapse-wrapper": {
            padding: "0!important",
            width: "100vw!important",
          },
          ".SnackbarItem-contentRoot": {
            borderRadius: "0!important",
          },

          [theme.breakpoints.up("md")]: {
            top: `63px!important`,
            width: "100vw!important",
          },
        },
        ".MuiInputLabel-root": {
          border: "none!important",
          fontSize: "0.875rem",
          top: 2,
        },
        ".MuiFormLabel-asterisk": {
          border: "none!important",
        },
        ".Mui-error": {
          color: primaryColor,
        },
      },
    },
    MuiAccordion: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          background: "#F2F2F2",
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            opacity: 0.5,
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          "background": "#F2F2F2",
          "&.Mui-expanded": {
            minHeight: "48px",
            margin: "initial",
          },
          ".MuiAccordionSummary-content": {
            "&.Mui-expanded": {
              margin: "12px 0",
            },
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            cursor: "not-allowed",
            filter: "grayscale(100%)",
            pointerEvents: "all !important",
          },
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          "width": 42,
          "height": 26,
          "padding": 0,
          "& .MuiSwitch-switchBase": {
            "padding": 0,
            "margin": 2,
            "transitionDuration": "300ms",
            "&.Mui-checked": {
              "transform": "translateX(16px)",
              "color": "#fff",
              "& + .MuiSwitch-track": {
                opacity: 1,
                border: 0,
              },
              "&.Mui-disabled + .MuiSwitch-track": {
                opacity: 0.5,
              },
            },
            "&.Mui-focusVisible .MuiSwitch-thumb": {
              color: "#33cf4d",
              border: "6px solid #fff",
            },
          },
          "& .MuiSwitch-thumb": {
            boxSizing: "border-box",
            width: 22,
            height: 22,
          },
          "& .MuiSwitch-track": {
            borderRadius: 26 / 2,
            backgroundColor: defaultBorderColor,
            opacity: 1,
          },
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          subtitle1: "span",
        },
      },
      styleOverrides: {
        body1: {
          fontSize: "0.875rem",
        },
        body2: {
          fontSize: "1rem",
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          ".MuiFilledInput-root": {
            backgroundColor: "initial",
            border: `1px solid ${defaultBorderColor}`,
            borderRadius: 4,
          },
          ".MuiFilledInput-input": {
            color: secondaryColor,
          },

          "& .MuiFilledInput-underline:after": {
            borderBottom: "none",
            display: "none",
          },
          "& .MuiFilledInput-underline:before": {
            borderBottom: "none",
            display: "none",
          },

          ".MuiInputLabel-root": {
            border: "none!important",
            fontSize: "0.875rem",
            top: 2,
          },

          "& .Mui-focused": {
            border: `1px solid ${secondaryColor}`,
            backgroundColor: "initial",
            color: `${secondaryColor}!important`,
          },
          "& .Mui-error": {
            border: `1px solid ${primaryColor}`,
            backgroundColor: "initial",
            color: `${primaryColor}!important`,
          },
        },
      },
    },

    MuiPagination: {
      defaultProps: {
        shape: "rounded",
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        icon: {
          fontSize: "1.7rem",
        },
        root: {
          "&.Mui-selected": {
            backgroundColor: "initial!important",
            borderBottom: `2px solid ${primaryColor}`,
            borderRadius: 0,
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        InputLabelProps: {
          shrink: true,
        },
      },
      styleOverrides: {
        root: {
          ".MuiFilledInput-root": {
            backgroundColor: "initial",
            border: `1px solid ${defaultBorderColor}`,
            borderRadius: 4,
          },
          ".MuiFilledInput-input": {
            color: secondaryColor,
          },

          "& .MuiFilledInput-underline:after": {
            borderBottom: "none",
            display: "none",
          },
          "& .MuiFilledInput-underline:before": {
            borderBottom: "none",
            display: "none",
          },

          "& .Mui-focused": {
            "border": `1px solid ${secondaryColor}`,
            "backgroundColor": "initial",
            "color": `${secondaryColor}!important`,
            ".MuiOutlinedInput-notchedOutline": {
              border: `0.2px solid ${defaultBorderColor}!important`,
            },
          },
          "& .Mui-error": {
            border: `1px solid ${primaryColor}`,
            backgroundColor: "initial",
            color: `${primaryColor}!important`,
          },
        },
      },
    },
    MuiStepLabel: {
      styleOverrides: {
        label: {
          fontSize: ".75rem",
        },
      },
    },

    MuiStepConnector: {
      styleOverrides: {
        root: {
          "left": "calc(-50% + 10px)",
          "right": "calc(50% + 10px)",
          "height": 5,
          "top": 12,
          "background": defaultBorderColor,
          "borderBottom": "1px solid",
          "&.Mui-completed, &.Mui-active": {
            borderBottom: "1px solid #007B38",
            background: "#007B38",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "initial",
          fontWeight: "bold",
        },
        sizeLarge: {
          minHeight: 48,
        },
        sizeSmall: {
          padding: "2px 10px",
        },
        text: {
          padding: 0,
          fontWeight: "normal",
          minWidth: 0,
          marginLeft: 4,
          marginBottom: 10,
          marginTop: 5,
        },
      },
    },
  },
});

export default CustomTheme;
