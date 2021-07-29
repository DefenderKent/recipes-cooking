import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { CheckboxList } from '..';
import { Button, Typography } from '@material-ui/core';
import { RangeSlider } from '../FilterSlider';
import { View } from '../../templates';
import { Colors } from '../../style/globalStyles';
import { filterRecipe } from '../../store/recipes/recipesSlice';

import { useDispatch } from 'react-redux';

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            position: 'absolute',
            //TODO: добавить maxwidth вместо width
            width: 440,
            flex: 1,
            height: 560,
            backgroundColor: theme.palette.background.paper,
            padding: 32,
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
type Test = {
    range: number[];
    filters: number[];
};
export const FilterModal: React.FC<FilterModalProps> = ({ isVisible, onToggle, filters, range }) => {
    const classes = useStyles();
    console.log('filters000', filters);

    const [modalStyle] = React.useState(getModalStyle);
    const dispatch = useDispatch();

    const [stash, setStash] = useState<{ range: any[]; filters: number[] }>({ range, filters });

    const handleFilters = (filters: number[]) => {
        console.log('filters', filters);

        setStash({ ...stash, filters });
    };

    const handleSlider = (range: number[]) => {
        setStash({ ...stash, range });
    };
    const test = (tast: Test) => {
        dispatch(filterRecipe(tast));
        onToggle();
        console.log('tast', tast);
    };

    return (
        <Modal
            open={isVisible}
            onClose={onToggle}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <View style={modalStyle} className={classes.paper} display="block">
                <Typography variant="inherit" component="h3">
                    Filter
                </Typography>

                <CheckboxList handleFilters={(filters) => handleFilters(filters)} filters={filters} />
                <View display="block" className={classes.sliderContainer}>
                    <RangeSlider handleSlider={(range) => handleSlider(range)} />
                </View>

                <View className={classes.buttonContainer} justify="space-between">
                    <Button className={classes.button} variant="outlined">
                        Clear
                    </Button>
                    <Button
                        className={classes.button}
                        variant="outlined"
                        onClick={() => test({ range: stash.range, filters: stash.filters })}
                    >
                        Show Recipes
                    </Button>
                </View>
            </View>
        </Modal>
    );
};
