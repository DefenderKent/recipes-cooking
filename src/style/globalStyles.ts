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
export const Global = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: normal;
 }
h1, h2, h3 {
    color: ${Colors.base0};
    font-family: 'Khula', sans-serif;
    font-weight: 800;
    letter-spacing: -1px;
}
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
body{
    font-size: 24px;
    line-height:  28px;
}
*,
*:before,
*:after {
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
}
header.smaller {
    height: 330px;
  }
  
  header.smaller h1#logo {
    width: 150px;
    height: 75px;
    line-height: 55px;
    font-size: 55px;
    margin: 0;
  }
  
  

  header {
    width: 100%;
    height: 25em;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
 
    background-color: white;
    transition: height 0.3s;
    display: inline-flex;
    justify-content: center;
  }
  
  header h1#logo {
    display: inline-block;
    line-height: 3em;
    margin: 0;
    padding: 0 1em;
   
    float: left;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -ms-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
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
