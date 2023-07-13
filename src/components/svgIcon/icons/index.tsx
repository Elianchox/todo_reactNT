
import { CHECK } from "./check";
import { CLOSE_EYE } from "./closeEye";
import { EYE } from "./eye";
import { ICON1 } from "./icon1";
import { ICON2 } from "./icon2";
import { PLUS } from "./plus";

export const icons = {
    closeEye: CLOSE_EYE,
    eye: EYE,
    ICON1: ICON1,
    ICON2: ICON2,
    CHECK: CHECK,
    PLUS: PLUS,
}

export type SvgIconTypes = keyof typeof icons;
