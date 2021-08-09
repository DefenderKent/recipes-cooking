import { TypographyOptions } from '@material-ui/core/styles/createTypography';

const commonH = { fontFamily: 'Khula, sans-serif', fontWeight: 800 };
export const typography: TypographyOptions = {
    body1: { fontFamily: "'Roboto', sans-serif", fontSize: 12, lineHeight: '16px' },
    //The font is bottom indented, so these styles are applied
    h1: { ...commonH, fontSize: '4.0rem', lineHeight: '3.0rem', height: 80, display: 'flex', alignItems: 'center' },
    h2: { ...commonH, fontSize: '3.0rem', lineHeight: '3.0rem' },
    h3: { ...commonH, fontSize: '1.5rem', lineHeight: '1.6rem' },
    button: { fontFamily: "'Roboto', sans-serif" },
    subtitle1: { fontFamily: "'Roboto', sans-serif", fontSize: '1.0rem', lineHeight: '1.5rem' },
};
