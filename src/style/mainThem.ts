import { createTheme } from '@material-ui/core';
import { typography } from './typography';

import { createGlobalStyle } from 'styled-components';
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
}

export const theme = createTheme({
    typography,
    props: {},
    overrides: {
        MuiCssBaseline: {
            '@global': {
                html: { margin: 0, padding: 0, boxSizing: 'border-box' },
                a: { textDecoration: 'none' },
            },
        },
    },
});

export const Global = createGlobalStyle`
 h1{
   
    font-size: 64px;
    line-height:  80px;
 }
 h2{
  
    font-size: 40px;
    line-height:  48px;
 }
 h3{  
    font-size: 24px;
    line-height:  28px;
 }
 h4{
    font-size: 12px;
    line-height: 16px;
}
h5{
    font-weight: bold;
    font-size: 9px;
    line-height: 11px;
}
*,
*:before,
*:after {
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
}
#global-nav {
  position: fixed;
  display: flex;
  top: 0;
  z-index: 100;
  height: 600px;
  width: 100%;
  background: ${Colors.base1};
  -webkit-transition: height 0.5s, line-height 0.5s; /* Safari */
  transition: height 0.5s, line-height 0.5s;
}

.scrolled-nav-mid {
  height: 430px !important;
}
.scrolled-nav {
  height: 330px !important;
}





`;
export enum Difficulty {
    easy,
    medium,
    hard,
    time,
    kCal,
    cuisine,
}
