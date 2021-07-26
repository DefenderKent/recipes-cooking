import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { Text } from '../../atoms';
import { RecipeCell } from '../../molecules';
import { View } from '../../templates';

interface CardRecipeProps {
    title: string;
    supTitle: string;
    image: string;
    tag: string[];
}
// type SelfPosition = "center" | "end" | "flex-end" | "flex-start" | "self-end" | "self-start" | "start";
const useStyles = makeStyles({
    root: {
        display: 'flex',
        flex: 1,
        height: '100%',
        maxWidth: 348,
        minHeight: 384,
        borderRadius: 8,
    },
    media: {
        position: 'relative',
        height: 196,
    },
    textContainer: {
        padding: 24,
    },
    recipeCellContainer: {
        position: 'absolute',
        right: 16,
        bottom: 16,
    },
    tag: {
        marginRight: 8,
        '&:last-child': {
            marginRight: 0,
        },
    },
    test: {
        justifyContent: 'flex-start',
    },
});

export const CardRecipe: React.FC<CardRecipeProps> = ({ title, supTitle, image, tag }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea className={classes.test}>
                <CardMedia className={classes.media} image={image} title="Contemplative Reptile">
                    <View className={classes.recipeCellContainer}>
                        {tag.map((item, index) => (
                            <RecipeCell key={`${index + item}`} text={item} className={classes.tag} />
                        ))}
                    </View>
                </CardMedia>
                <CardContent className={classes.textContainer}>
                    <Typography variant="inherit" component="h3">
                        {title}
                    </Typography>
                    <Text>{supTitle}</Text>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};
