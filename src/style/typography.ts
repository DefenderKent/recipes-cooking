import { TypographyOptions } from '@material-ui/core/styles/createTypography';

const commonH = { fontFamily: 'Khula, sans-serif', fontWeight: 800, margin: 'auto' };
export const typography: TypographyOptions = {
    fontSize: 12,
    h1: { ...commonH, fontSize: '4.0rem', lineHeight: '5.0rem' },
    h2: { ...commonH, color: 'green' },
    h3: { ...commonH, fontSize: '1.5rem', lineHeight: '1.6rem' },
    h4: { fontFamily: "'Krona One', sans-serif" },
    h5: { fontFamily: "'Krona One', sans-serif" },
    h6: { fontFamily: "'Roboto', sans-serif" },
    subtitle1: { fontFamily: "'Roboto', sans-serif" },
    subtitle2: { fontFamily: "'Roboto', sans-serif" },
    body1: { fontFamily: "'Roboto', sans-serif" },
    body2: { fontFamily: "'Roboto', sans-serif" },
    caption: { fontFamily: "'Roboto', sans-serif" },
    overline: { fontFamily: "'Roboto', sans-serif" },
};
