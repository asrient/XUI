import { Platform, StyleSheet, Appearance } from 'react-native';

const c = {}

c.white = 'rgb(255, 255, 255)'
c.light = 'rgb(219, 219, 219)'
c.grey = 'rgb(128, 128, 128)'
c.dark = 'rgb(59, 59, 59)'
c.black = 'rgb(20, 20, 20)'

c.red = 'rgb(206, 0, 0)'
c.blue = '#008cff'
c.green = 'rgb(0, 167, 28)'
c.purple = 'rgb(132, 0, 255)'
c.orange = 'rgb(255, 164, 27)'

c.primary = c.black
c.secondary = c.dark
c.tertiary = c.light
c.bg = c.white

colorScheme = Appearance.getColorScheme();
if (colorScheme === 'dark') {
    c.primary = c.white
    c.secondary = c.light
    c.tertiary = c.dark
    c.bg = c.black
}

c.xs = 14
c.s = 16
c.m = 19
c.l = 23
c.xl = 27
c.xxl = 35

c.base_light = '200';
c.base_semilight = '400';
c.base_regular = '600';
c.base_semibold = '700';
c.base_bold = '800';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 12,
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        textAlign: 'center'
    },
    hstack: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    vstack: {
        alignItems: 'center',
        flexDirection: 'column',
    },
    with_center: {
        justifyContent: 'center'
    },
    space_around: {
        justifyContent: 'space-around'
    },
    space_between: {
        justifyContent: 'space-between'
    },
    space_evenly: {
        justifyContent: 'space-evenly'
    },
    center_col: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center'
    },
    text_center: {
        textAlign: 'center'
    },
    text: {
        fontSize: c.s,
        fontWeight: c.base_semilight,
        color: c.light
    },
    screen: {
        flex: 1,
        backgroundColor: c.bg
    },
    screen_white: {
        flex: 1,
        backgroundColor: c.white
    },
    screen_black: {
        flex: 1,
        backgroundColor: c.black
    },
    size_xs: {
        fontSize: c.xs
    },
    size_s: {
        fontSize: c.s
    },
    size_m: {
        fontSize: c.m
    },
    size_l: {
        fontSize: c.l
    },
    size_xl: {
        fontSize: c.xl
    },
    size_xxl: {
        fontSize: c.xxl
    },
    ink_black: {
        color: c.black
    },
    ink_dark: {
        color: c.dark
    },
    ink_grey: {
        color: c.grey
    },
    ink_light: {
        color: c.light
    },
    ink_white: {
        color: c.white
    },
    ink_primary: {
        color: c.primary
    },
    ink_secondary: {
        color: c.secondary
    },
    ink_tertiary: {
        color: c.tertiary
    },
    ink_bg: {
        color: c.bg
    },
    ink_blue: {
        color: c.blue
    },
    ink_green: {
        color: c.green
    },
    ink_orange: {
        color: c.orange
    },
    ink_red: {
        color: c.red
    },
    ink_purple: {
        color: c.purple
    },
    base_light: {
        fontWeight: c.base_light
    },
    base_semilight: {
        fontWeight: c.base_semilight
    },
    base_regular: {
        fontWeight: c.base_regular
    },
    base_semibold: {
        fontWeight: c.base_semibold
    },
    base_bold: {
        fontWeight: 'bold'
    },
    button: {
        marginHorizontal: 10,
        marginVertical: 3,
        paddingHorizontal: 17,
        paddingVertical: 6,
        backgroundColor: c.blue,
        borderRadius: 8
    },
    button_red: {
        backgroundColor: c.red,
    },
    button_green: {
        backgroundColor: c.green,
    },
    button_orange: {
        backgroundColor: c.orange,
    },
    button_purple: {
        backgroundColor: c.purple,
    },
    button_white: {
        backgroundColor: c.white,
    },
    button_light: {
        backgroundColor: c.purple,
    },
    button_grey: {
        backgroundColor: c.grey,
    },
    button_dark: {
        backgroundColor: c.dark,
    },
    button_black: {
        backgroundColor: c.black,
    },
    button_bordered: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: c.blue,
        borderStyle: 'solid'
    },
    button_bordered_red: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: c.red,
        borderStyle: 'solid'
    },
    button_bordered_orange: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: c.orange,
        borderStyle: 'solid'
    },
    button_bordered_green: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: c.green,
        borderStyle: 'solid'
    },
    button_bordered_purple: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: c.purple,
        borderStyle: 'solid'
    },
    button_bordered_white: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: c.white,
        borderStyle: 'solid'
    },
    button_bordered_light: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: c.light,
        borderStyle: 'solid'
    },
    button_bordered_grey: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: c.grey,
        borderStyle: 'solid'
    },
    button_bordered_dark: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: c.dark,
        borderStyle: 'solid'
    },
    button_bordered_black: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: c.black,
        borderStyle: 'solid'
    },
    button_l: {
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    button_rounded: {
        paddingHorizontal: 30,
        borderRadius: 20,
    },
    button_edged: {
        borderRadius: 0
    },
    stretch: {
        alignSelf: 'stretch'
    },
    flex_1: {
        flex: 1
    },
    flex_2: {
        flex: 2
    },
    flex_3: {
        flex: 3
    },
    flex_4: {
        flex: 4
    },
    flex_5: {
        flex: 5
    },
    null: {}
});

styles.c = c

export default styles