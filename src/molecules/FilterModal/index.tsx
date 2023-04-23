import React from 'react';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {Button, IconButton, Typography} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import {CheckboxList} from '..';
import {RangeSlider} from '../FilterSlider';
import {Colors} from '../../style/paletteOptions';
import {useFilterRecipeStore} from "../../features/Recipe/hooks";
import {useForm} from "react-hook-form";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            position: 'absolute',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
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
        buttonContainer: {
            flexGrow: 1,
        },
        title: {marginBottom: 6},
        button: {
            '&:hover, &:focus': {
                backgroundColor: Colors.shade50,
                color: Colors.base1,
            },
        },
        close: {
            width: 24,
            height: 24,
            position: 'absolute',
            right: 16,
            top: 16,
            color: Colors.shade50,
        },
    }),
);

interface FilterModalProps {
    isVisible: boolean;
    onToggle: () => void;
}

export const FilterModal: React.FC<FilterModalProps> = ({
                                                            isVisible,
                                                            onToggle,
                                                        }) => {
    const classes = useStyles();
    const {options, fetchFilters, isLoading} = useFilterRecipeStore()
    const {control, handleSubmit,setValue} = useForm({
        defaultValues: {
            caloricity: options?.caloricityRange,
            cuisines: [],
        }
    });
    const onPress = (data: any) => {
        console.debug("data11:", data)
    };
    React.useEffect(() => {
        fetchFilters();
    }, [fetchFilters])
    return (
        <Modal
            open={isVisible}
            onClose={onToggle}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <form onSubmit={handleSubmit(onPress)}>
                <div className={classes.paper}>
                    {isLoading && "Loading..."}
                    <Typography variant="h3" component="h3" className={classes.title}>
                        Filter
                    </Typography>
                    <CheckboxList setValue={setValue} control={control} options={options?.cuisines}/>

                    {options?.caloricityRange &&
                        <RangeSlider control={control} caloricityRange={options.caloricityRange}/>}

                    <div className={classes.buttonContainer}>
                        <Button variant="outlined" className={classes.button} onClick={() => ({})}>
                            Clear
                        </Button>
                        <Button className={classes.button} variant="outlined" onClick={handleSubmit(onPress)}>
                            Show Recipes
                        </Button>
                    </div>
                    <IconButton aria-label="CloseIcon" onClick={onToggle} color="inherit" className={classes.close}>
                        <CloseIcon/>
                    </IconButton>
                </div>
            </form>
        </Modal>
    );
};
