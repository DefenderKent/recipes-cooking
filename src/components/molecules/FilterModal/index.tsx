import React from 'react';
import { Button, IconButton, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useForm } from 'react-hook-form';

interface FilterModalProps {
    isVisible: boolean;
    onToggle: () => void;
}

export const FilterModal: React.FC<FilterModalProps> = ({ isVisible, onToggle }) => {
    const { control, handleSubmit, setValue } = useForm({
        defaultValues: {},
    });
    const onPress = (data: unknown) => {
        console.debug('data11:', data);
    };

    return (
        <form onSubmit={handleSubmit(onPress)}>
            <div>
                <Typography variant="h3" component="h3">
                    Filter
                </Typography>
                {/* <CheckboxList setValue={setValue} control={control} options={options?.caloriesMax} /> */}

                {/* {options?.caloricityRange && (
                    <RangeSlider control={control} caloricityRange={options} />
                )} */}

                <div>
                    <Button variant="outlined" onClick={() => ({})}>
                        Clear
                    </Button>
                    <Button variant="outlined" onClick={handleSubmit(onPress)}>
                        Show Recipes
                    </Button>
                </div>
                <IconButton aria-label="CloseIcon" onClick={onToggle} color="inherit">
                    <CloseIcon />
                </IconButton>
            </div>
        </form>
    );
};
