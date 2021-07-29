import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { Colors } from '../../style/globalStyles';
import { useAppSelector } from '../../store/hooks';
import { recipes } from '../../store/recipes/recipesSlice';

interface RangeSliderProps {
    handleSlider: (range: number[]) => void;
}

const useStyles = makeStyles({
    root: {},
    slider: {
        color: Colors.shade50,
    },
});

function valuetext(value: number) {
    return `${value}`;
}

export const RangeSlider: React.FC<RangeSliderProps> = ({ handleSlider }) => {
    const classes = useStyles();
    const recipe = useAppSelector(recipes);
    const [value, setValue] = React.useState<number[]>(recipe.allItems.calorieRange);

    const handleChange = (event: any, newValue: number | number[]) => {
        setValue(newValue as number[]);
        handleSlider(newValue as number[]);
    };

    return (
        <div className={classes.root}>
            <Slider
                min={recipe.allItems.calorieRange[0]}
                max={recipe.allItems.calorieRange[1]}
                step={1}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
                className={classes.slider}
            />
            <Typography id="range-slider" gutterBottom>
                Calories, kCal
            </Typography>
        </div>
    );
};
