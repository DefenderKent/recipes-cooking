import { TypographyOptions } from '@material-ui/core/styles/createTypography';

const commonTypographyStyle = { fontFamily: 'Khula, sans-serif', fontWeight: 800 };
export const typography: TypographyOptions = {
    body1: { fontFamily: "'Roboto', sans-serif", fontSize: 12, lineHeight: '16px' },
    //The font is bottom indented, so these styles are applied
    h1: { ...commonTypographyStyle, fontSize: '4.0rem', lineHeight: '125%' },
    h2: { ...commonTypographyStyle, fontSize: '3.0rem', lineHeight: '125%' },
    h3: { ...commonTypographyStyle, fontSize: '1.5rem', lineHeight: '125%' },
    button: { fontFamily: "'Roboto', sans-serif" },
    subtitle1: { fontFamily: "'Roboto', sans-serif", fontSize: '1.0rem', lineHeight: '1.5rem', display: 'block' },
};
