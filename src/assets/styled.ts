import { PixelRatio } from "react-native";

const pixel = PixelRatio.getFontScale();

const color = {
    dark: "#2B2B2B",
    white: "#FFFFFF",
    orange: "#FF8102",
}
const size = {
    bigfont: 36 / pixel,
    regular: 16 / pixel,
    f18: 18/ pixel,
    small: 14 / pixel,
}
const fonts = {
    normal: 'Poppines-Regular',
    medium: 'Poppins-Medium',
    sembold: 'Poppins-SemiBold',
    bold: 'Poppins-Bold',
}
const styled = {
    ...color,
    ...fonts,
    ...size
}
export default styled