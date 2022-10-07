import { styled } from "@mui/material/styles";
import { FormControlLabel, Checkbox } from "@mui/material";
import { defaultBorderColor } from "@Utils/Constants/CustomTheme";

export const DamagePortCheckbox = styled(FormControlLabel)(
  ({ ischecked, theme, checkicononly }) => ({
    "border": `1px solid ${defaultBorderColor}`,
    ...(checkicononly
      ? { padding: ischecked ? "8px 13px 8px 5px" : "10px 15px" }
      : { padding: ischecked ? 4 : 5 }),
    "boxSizing": "border-box",
    "marginRight": 0,
    "marginLeft": 0,
    "borderRadius": 4,
    "backgroundColor": "white",
    "borderColor": ischecked && theme?.palette?.primary?.main,
    "borderWidth": ischecked && 2,
    ".MuiCheckbox-root": {
      display: checkicononly && !ischecked && "none",
    },
    "&:not(:last-child)": {
      marginBottom: 15,
    },
  })
);

export const CustomCheckBox = styled(Checkbox)(({ theme }) => ({
  "&.Mui-checked": {
    "&, & + .MuiFormControlLabel-label": {
      color: theme?.palette?.primary?.main,
    },
  },
}));

export const CheckCont = styled("div")(({ checked, theme }) => ({
  border: `${checked ? 2 : 1}px solid ${
    checked ? theme?.palette?.primary?.main : defaultBorderColor
  }`,
  height: checked ? 30 : 32,
  width: checked ? 30 : 32,
  borderRadius: 4,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxSizing: "border-box",
}));
