import { Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Text } from '../../../atoms';
import { SearchInput } from '../../../molecules';
import { Colors } from '../../../style/globalStyles';
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
                <Typography variant="inherit" component="h1">
                    Air Recipes
                </Typography>
                <Text color={Colors.shade50}>Best Recipes for Best People</Text>
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
