import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
// @ts-expect-error Does not have Typescript support
import Fade from 'react-reveal/Fade';
import { RecipeCell } from '../../molecules';
import { View } from '../../templates';

interface CardRecipeProps {
    title: string;
    supTitle: string;
    image: string;
    tag: string[];
    className?: string;
}
const useStyles = makeStyles({
    root: {
        height: '100%',
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
});

export const CardRecipe: React.FC<CardRecipeProps> = ({ title, supTitle, image, tag, className }) => {
    const classes = useStyles();
    return (
        <Card className={`${classes.root} ${className}`}>
            <Fade>
                <CardActionArea>
                    <CardMedia image={image} title="Image of a dish" className={classes.media}>
                        <View className={classes.recipeCellContainer}>
                            {tag.map((item, index) => (
                                <RecipeCell key={`${index + item}`} text={item} className={classes.tag} />
                            ))}
                        </View>
                    </CardMedia>
                    <CardContent className={classes.textContainer}>
                        <Typography variant="h3" component="h3">
                            {title}
                        </Typography>
                        <Typography variant="inherit" component="h6">
                            {supTitle}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Fade>
        </Card>
    );
};
