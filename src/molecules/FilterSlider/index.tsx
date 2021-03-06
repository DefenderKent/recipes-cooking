import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { Colors } from '../../style/paletteOptions';
import { View } from '../../templates';

interface RangeSliderProps {
    handleSlider: (range: number[]) => void;
    startRange: number[];
    calorieRange: number[];
}

const useStyles = makeStyles({
    root: {},
    slider: {
        color: Colors.shade50,
    },
    sliderContainer: {
        paddingTop: 55,
        marginBottom: 40,
    },
});

function valuetext(value: number) {
    return `${value}`;
}

export const RangeSlider: React.FC<RangeSliderProps> = ({ handleSlider, startRange, calorieRange }) => {
    const classes = useStyles();

    const handleChange = (event: any, newValue: number | number[]) => {
        handleSlider(newValue as number[]);
    };

    return (
        <View display="block" className={classes.sliderContainer}>
            <Slider
                min={startRange[0]}
                max={startRange[1]}
                step={1}
                value={calorieRange}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
                className={classes.slider}
            />
            <Typography id="range-slider" gutterBottom variant="subtitle1">
                Calories, kCal
            </Typography>
        </View>
    );
};
