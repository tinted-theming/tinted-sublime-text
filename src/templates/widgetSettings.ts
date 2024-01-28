import { ColorScheme } from "tinted-theming-colors";
import { appName } from "../constants";

export default (scheme: ColorScheme) => {
  return `{
    "color_scheme": "Packages/${appName}/widgets/${scheme.meta.slug}.stTheme",
    "draw_shadows": false,
    "font_options": ["subpixel_antialias"],
    "line_padding_top": 2
  }`;
};
