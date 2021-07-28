import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { Colors } from '../../style/globalStyles';

const useStyles = makeStyles({
    root: {},
    slider: {
        color: Colors.shade50,
    },
});

function valuetext(value: number) {
    return `${value}`;
}

export const RangeSlider = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState<number[]>([100, 1000]);

    const handleChange = (event: any, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };
    console.log('value', value);

    return (
        <div className={classes.root}>
            <Slider
                min={100}
                max={1000}
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
