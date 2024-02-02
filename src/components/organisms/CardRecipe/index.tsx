import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
// @ts-expect-error Does not have Typescript support
import Fade from 'react-reveal/Fade';
import { RecipeCell } from 'src/components/molecules';

interface CardRecipeProps {
    title: string;
    supTitle: string;
    image: string;
    tag: string[];
    className?: string;
}

export const CardRecipe: React.FC<CardRecipeProps> = ({ title, supTitle, image, tag, className }) => {
    return (
        <Card>
            <Fade>
                <CardActionArea>
                    <CardMedia image={image} title="Image of a dish">
                        <div>
                            {tag.map((item, index) => (
                                <RecipeCell key={`${index + item}`} text={item} />
                            ))}
                        </div>
                    </CardMedia>
                    <CardContent>
                        <Typography variant="h3" component="h3">
                            {title}
                        </Typography>
                        <Typography variant="subtitle1" component="span">
                            {supTitle}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Fade>
        </Card>
    );
};
