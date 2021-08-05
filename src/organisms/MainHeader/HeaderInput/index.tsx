import { Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { SearchInput } from '../../../molecules';
import { Colors } from '../../../style/paletteOptions';
import { View } from '../../../templates';
import IconButton from '@material-ui/core/IconButton';
import FilterIcon from '@material-ui/icons/FilterList';

interface HeaderInputProps {
    search: (query: string) => void;
    onToggle: () => void;
}
const useStyles = makeStyles({
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
export const HeaderInput: React.FC<HeaderInputProps> = ({ search, onToggle }) => {
    const classes = useStyles();
    return (
        <View className={classes.leftColumn}>
            <View direction="column">
                <Typography variant="h1">Air Recipes</Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    Best Recipes for Best People
                </Typography>
                <View className={classes.inputContainer}>
                    <SearchInput className={classes.input} search={search} />
                    <IconButton
                        className={classes.colorIconButton}
                        aria-label="delete"
                        centerRipple={false}
                        onClick={onToggle}
                        color="inherit"
                    >
                        <FilterIcon className={classes.colorIcon} />
                    </IconButton>
                </View>
            </View>
        </View>
    );
};
