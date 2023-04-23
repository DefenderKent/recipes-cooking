import {makeStyles} from "@material-ui/core/styles";
import {Colors} from "../../../../style/paletteOptions";
import Image from "src/assets/image.png";

export const useClasses = makeStyles({
    root: {},
    leftColumn: {
        paddingTop: 128,
        marginRight: 20,
    },

    colorIconButton: {
        color: Colors.shade20,
        border: `1px solid ${Colors.shade20}`,
    },
    colorIcon: {
        color: Colors.base0,
    },
    img: {
        backgroundImage: `url(${Image})`,
        backgroundPosition: 'left',
        backgroundSize: 'auto',
        backgroundRepeat: 'no-repeat',
        width: 814,
        display: 'flex',
        justifyContent: 'space-between',
    },
    inputContainer: {
        paddingTop: 32,
    },
    input: {
        marginRight: 16,
    },
    clearfix: {},
    container: {
        // paddingTop: 635,
        paddingTop: 0,
        paddingLeft: 2,
        paddingRight: 2,
    },

    navLink: {},
});