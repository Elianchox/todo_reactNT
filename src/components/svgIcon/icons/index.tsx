
import { CLOSE_EYE } from "./closeEye";
import { EYE } from "./eye";
import { ICON1 } from "./icon1";

export const icons = {
    closeEye: CLOSE_EYE,
    eye: EYE,
    ICON1: ICON1,
}

export type SvgIconTypes = keyof typeof icons;
