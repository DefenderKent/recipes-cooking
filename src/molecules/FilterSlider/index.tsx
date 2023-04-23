import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import {Colors} from '../../style/paletteOptions';
import { Controller } from "react-hook-form";


interface RangeSliderProps {
    caloricityRange:number[]
    control:any
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

export const RangeSlider: React.FC<RangeSliderProps> = ({control,caloricityRange}) => {
    console.debug("caloricityRange",caloricityRange)
    const classes = useStyles();
    // const handleChange = (event: any, newValue: number | number[]) => {
    //     handleSlider(newValue as number[]);
    // };

    return (
        <div className={classes.sliderContainer}>
            {/*<Slider*/}
            {/*    min={startRange[0]}*/}
            {/*    max={startRange[1]}*/}
            {/*    step={1}*/}
            {/*    value={calorieRange}*/}
            {/*    onChange={handleChange}*/}
            {/*    valueLabelDisplay="auto"*/}
            {/*    aria-labelledby="range-slider"*/}
            {/*    getAriaValueText={valuetext}*/}
            {/*    className={classes.slider}*/}
            {/*/>*/}
            <Controller
                name="caloricity"
                control={control}
                defaultValue={caloricityRange}
                render={({ field }) => (
                    <Slider
                        {...field}
                        onChange={(_, value) => {
                            field.onChange(value);
                        }}
                        valueLabelDisplay="auto"
                        max={caloricityRange[1]}
                        min={caloricityRange[0]}
                        step={1}
                        className={classes.slider}
                        getAriaValueText={valuetext}
                    />
                )}
            />
            <Typography id="range-slider" gutterBottom variant="subtitle1">
                Calories, kCal
            </Typography>
        </div>
    );
};
