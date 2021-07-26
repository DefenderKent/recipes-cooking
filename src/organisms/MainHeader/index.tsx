import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { View } from '../../templates';
import { Text } from '../../atoms';
import { Typography } from '@material-ui/core';
import { SearchInput } from '../../molecules';
import IconButton from '@material-ui/core/IconButton';

import { Colors } from '../../style/globalStyles';
import Image from '../../assets/image.png';
import FilterIcon from '@material-ui/icons/FilterList';

interface MainHeaderProps {
    className?: string;
}
// type SelfPosition = "center" | "end" | "flex-end" | "flex-start" | "self-end" | "self-start" | "start";
const useStyles = makeStyles({
    root: {
        justifyContent: 'center',
        height: 292,
        width: 'max-content',
    },
    leftColumn: {
        paddingTop: 128,
        marginRight: 20,
    },

    colorIconButton: {
        color: Colors.shade20,
    },
    colorIcon: {
        color: Colors.base0,
    },
    img: {
        backgroundImage: `url(${Image})`,
        backgroundPosition: 'left',
        backgroundSize: 'auto',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        display: 'flex',
        justifyContent: 'space-between',
    },
    inputContainer: {
        paddingTop: 32,
    },
    input: {
        marginRight: 16,
    },
});

export const MainHeader: React.FC<MainHeaderProps> = ({ className }) => {
    const classes = useStyles();

    return (
        <View className={`${classes.root} ${className}`}>
            <View className={classes.leftColumn}>
                <View direction="column">
                    <Typography variant="inherit" component="h1">
                        Air Recipes
                    </Typography>
                    <Text color={Colors.shade50}>Best Recipes for Best People</Text>
                    <View className={classes.inputContainer}>
                        <SearchInput className={classes.input} />
                        <IconButton
                            className={classes.colorIconButton}
                            aria-label="delete2"
                            centerRipple={false}
                            onClick={() => console.log('aasas')}
                            color="inherit"
                        >
                            <FilterIcon className={classes.colorIcon} />
                        </IconButton>
                    </View>
                </View>
            </View>
            <View className={classes.img}></View>
        </View>
    );
};
