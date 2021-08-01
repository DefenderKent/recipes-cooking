import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button, Typography } from '@material-ui/core';

import { CheckboxList } from '..';
import { RangeSlider } from '../FilterSlider';
import { View } from '../../templates';
import { Colors } from '../../style/globalStyles';
import { Options } from '../../store/recipes/types';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            position: 'absolute',
            zIndex: 101,
            width: 440,
            flex: 1,
            height: 560,
            backgroundColor: theme.palette.background.paper,
            padding: 32,
            margin: 'auto',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
        },
        buttonContainer: {},

        sliderContainer: {
            paddingTop: 40,
            marginBottom: 40,
        },
        button: {
            '&:hover, &:focus': {
                backgroundColor: Colors.shade50,
                color: Colors.base1,
            },
        },
    }),
);
interface FilterModalProps {
    options: Options[];
    handleCalorieRange: (range: number[]) => void;
    handleOptions: (id: number, isSelected: boolean) => void;
    calorieRange: number[];
    startRange: number[];
    isVisible: boolean;
    onToggle: () => void;
    filterRecipe: (range: number[]) => void;
    onClear: () => void;
}

export const FilterModal: React.FC<FilterModalProps> = ({
    isVisible,
    onToggle,
    calorieRange,
    startRange,
    options,
    handleOptions,
    handleCalorieRange,
    filterRecipe,
    onClear,
}) => {
    const classes = useStyles();
    const onPress = () => filterRecipe(calorieRange);
    return (
        <Modal
            open={isVisible}
            onClose={onToggle}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <View className={classes.paper} display="flex" direction="column" justify="space-between">
                <Typography variant="inherit" component="h3">
                    Filter
                </Typography>
                <CheckboxList handleOptions={handleOptions} options={options} />
                <View display="block" className={classes.sliderContainer}>
                    <RangeSlider
                        handleSlider={handleCalorieRange}
                        startRange={startRange}
                        calorieRange={calorieRange}
                    />
                </View>
                <View className={classes.buttonContainer} justify="space-between">
                    <Button className={classes.button} variant="outlined" onClick={onClear}>
                        Clear
                    </Button>
                    <Button className={classes.button} variant="outlined" onClick={onPress}>
                        Show Recipes
                    </Button>
                </View>
            </View>
        </Modal>
    );
};
