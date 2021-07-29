import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { useDispatch } from 'react-redux';
import { Button, Typography } from '@material-ui/core';

import { CheckboxList } from '..';
import { RangeSlider } from '../FilterSlider';
import { View } from '../../templates';
import { Colors } from '../../style/globalStyles';
import { filterRecipe } from '../../store/recipes/recipesSlice';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            position: 'absolute',
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
    filters: number[];
    range: number[];
    isVisible: boolean;
    onToggle: () => void;
}
type Filters = {
    range: number[];
    filters: number[];
};
export const FilterModal: React.FC<FilterModalProps> = ({ isVisible, onToggle, filters, range }) => {
    const classes = useStyles();

    const dispatch = useDispatch();

    const [stash, setStash] = useState<{ range: any[]; filters: number[] }>({ range, filters });

    const handleFilters = (filters: number[]) => {
        setStash({ ...stash, filters });
    };

    const handleSlider = (range: number[]) => {
        setStash({ ...stash, range });
    };

    const onPress = (data: Filters) => {
        dispatch(filterRecipe(data));
        onToggle();
    };
    const onClear = () => {
        setStash({ range: [], filters: [] });
    };

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

                <CheckboxList handleFilters={(filters) => handleFilters(filters)} filters={filters} />
                <View display="block" className={classes.sliderContainer}>
                    <RangeSlider handleSlider={(range) => handleSlider(range)} />
                </View>

                <View className={classes.buttonContainer} justify="space-between">
                    <Button className={classes.button} variant="outlined" onClick={onClear}>
                        Clear
                    </Button>
                    <Button
                        className={classes.button}
                        variant="outlined"
                        onClick={() => onPress({ range: stash.range, filters: stash.filters })}
                    >
                        Show Recipes
                    </Button>
                </View>
            </View>
        </Modal>
    );
};
