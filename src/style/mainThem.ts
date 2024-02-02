import { createMuiTheme } from '@material-ui/core';
import { palette } from './paletteOptions';
import { typography } from './typography';

export const theme = createMuiTheme({

    typography,
    palette,
    props: {
        MuiIconButton: {},
        MuiTypography: {
            variantMapping: {
                body1: 'span',
                subtitle1: 'span',
            },
        },
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                html: { margin: 0, padding: '0px 96px', boxSizing: 'border-box' },
                a: { textDecoration: 'none' },
            },
        },
    },
});

// export const Global = createGlobalStyle`

// *,
// *:before,
// *:after {
// 	-webkit-box-sizing: border-box;
// 	-moz-box-sizing: border-box;
// 	box-sizing: border-box;
// }
// #global-nav {
//   position: fixed;
//   display: flex;
//   top: 0;
//   z-index: 100;
//   height: 600px;
//   width: 100%;
//   background: ${Colors.base1};
//   -webkit-transition: height 0.5s, line-height 0.5s; /* Safari */
//   transition: height 0.5s, line-height 0.5s;
// }

// .scrolled-nav-mid {
//   height: 430px !important;
// }
// .scrolled-nav {
//   height: 330px !important;
// }

// `;
export enum Difficulty {
    easy,
    medium,
    hard,
    time,
    kCal,
    cuisine,
}
