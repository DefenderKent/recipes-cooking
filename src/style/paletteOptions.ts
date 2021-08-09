import { PaletteOptions } from '@material-ui/core/styles/createPalette';
export enum Colors {
    base0 = '#000000',
    base1 = '#ffffff',
    shade20 = '#DDDDDD',
    shade40 = '#A9A9A9',
    shade50 = '#82786A',
    easy = '#2FB65D',
    medium = '#EB8A31',
    hard = '#EB3C31',
    grey = '#C8C8C8',
    grey2 = 'rgba(33,33,33,0.08)',
}
export const palette: PaletteOptions = {
    primary: {
        main: Colors.easy,
    },
    warning: {
        main: Colors.medium,
    },
    secondary: {
        main: Colors.hard,
    },
    text: {
        primary: Colors.base0,
        secondary: Colors.shade50,
    },
};
