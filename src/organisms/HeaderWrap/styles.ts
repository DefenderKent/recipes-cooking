import {makeStyles} from "@material-ui/core/styles";
import {Colors} from "../../style/paletteOptions";

export const useClasses = makeStyles({
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

    inputContainer: {
        paddingTop: 32,
    },
    input: {
        marginRight: 16,
    },
});