import { defaultTheme } from './../style/themes/defalt';
import "styled-components"
import { defaultTheme } from "../style/themes/defalt"

type ThemeType=typeof defaultTheme;

declare module "styled-components" {
    export interface defaultTheme extends ThemeType{}
}