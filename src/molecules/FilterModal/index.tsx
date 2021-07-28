import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { CheckboxList } from '..';
import { Button, Typography } from '@material-ui/core';
import { RangeSlider } from '../FilterSlider';
import { View } from '../../templates';
import { Colors } from '../../style/globalStyles';
import { filterRecipe } from '../../store/recipes/recipesSlice';
import { useDispatch } from 'react-redux';
// import { useDispatch } from 'react-redux';

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
    isVisible: boolean;
    onToggle: () => void;
}

export const FilterModal: React.FC<FilterModalProps> = ({ isVisible, onToggle }) => {
    const classes = useStyles();

    const [modalStyle] = React.useState(getModalStyle);
    const dispatch = useDispatch();
    // const recipe = useAppSelector(recipes);
    // const Itdsa = recipe.allItems.items.map((items) => items.cuisine.id);
    // const [filters, setFilters] = useState([1, 2, 3, 4, 5, 6]);
    // console.log('recipes', recipe.allItems.filterItems);
    const handleFilters = (filtes: any[]) => {
        console.log('filtes-----', filtes);
        dispatch(filterRecipe(filtes));
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

                <CheckboxList handleFilters={(filtes) => handleFilters(filtes)} />
                <View display="block" className={classes.sliderContainer}>
                    <RangeSlider />
                </View>

                <View className={classes.buttonContainer} justify="space-between">
                    <Button className={classes.button} variant="outlined">
                        Clear
                    </Button>
                    <Button className={classes.button} variant="outlined">
                        Show Recipes
                    </Button>
                </View>
            </View>
        </Modal>
    );
};
